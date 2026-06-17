const SYSTEM_PROMPT =
  "You are a thoughtful tarot reader using tarot as symbolic reflection. Do not present predictions as certainty.";

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return response(204, "");
  }

  if (event.httpMethod !== "POST") {
    return response(405, { error: { message: "Use POST for AI readings." } });
  }

  try {
    const { provider, model, apiKey, prompt } = JSON.parse(event.body || "{}");
    if (!["openai", "claude"].includes(provider)) {
      return response(400, { error: { message: "Choose OpenAI or Claude." } });
    }
    if (!apiKey || typeof apiKey !== "string") {
      return response(400, { error: { message: "Add an API key in Settings." } });
    }
    if (!prompt || typeof prompt !== "string") {
      return response(400, { error: { message: "A reading prompt is required." } });
    }

    const text =
      provider === "claude"
        ? await callClaude({ apiKey, model, prompt })
        : await callOpenAi({ apiKey, model, prompt });

    return response(200, { text });
  } catch (error) {
    return response(error.statusCode || 500, { error: { message: error.message || "AI reading failed." } });
  }
};

async function callOpenAi({ apiKey, model, prompt }) {
  const providerResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model || "gpt-4.1-mini",
      max_output_tokens: 900,
      input: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
    }),
  });
  const data = await providerResponse.json().catch(() => ({}));
  if (!providerResponse.ok) throw providerError(providerResponse.status, data, "OpenAI");
  return data.output_text || extractOpenAiText(data) || "";
}

async function callClaude({ apiKey, model, prompt }) {
  const providerResponse = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: model || "claude-sonnet-4-6",
      max_tokens: 900,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await providerResponse.json().catch(() => ({}));
  if (!providerResponse.ok) throw providerError(providerResponse.status, data, "Claude");
  return (data.content || []).filter((part) => part.type === "text").map((part) => part.text).join("\n").trim();
}

function extractOpenAiText(data) {
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((part) => part.type === "output_text" || part.text)
    .map((part) => part.text)
    .join("\n")
    .trim();
}

function providerErrorMessage(data, provider) {
  return data?.error?.message || `${provider} returned an error. Check the key, model, and billing status.`;
}

function providerError(statusCode, data, provider) {
  const error = new Error(providerErrorMessage(data, provider));
  error.statusCode = statusCode >= 400 && statusCode < 500 ? statusCode : 502;
  return error;
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  };
}
