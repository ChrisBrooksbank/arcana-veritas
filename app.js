const DEFAULT_DECK_ID = "rws";
const decks = [
  {
    id: DEFAULT_DECK_ID,
    name: "Rider-Waite-Smith",
    system: "rws",
    description:
      "Pamela Colman Smith's illustrated 1909 deck, using public-domain historical scan artwork.",
    source:
      "Artwork: Pamela Colman Smith / A. E. Waite, 1909. Public-domain scans via Wikimedia Commons and Sacred Texts/Holly Voley provenance notes.",
    artist: "Pamela Colman Smith",
    year: "1909",
    license: "Public domain in the US and UK; verify jurisdiction for reuse.",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck",
  },
];

const styles = [
  {
    id: "traditional",
    name: "Traditional",
    description: "Classic meanings, suit structure, and position-based interpretation.",
  },
  {
    id: "reflective",
    name: "Reflective",
    description: "Gentle inquiry, journaling prompts, and inner work.",
  },
  {
    id: "practical",
    name: "Practical",
    description: "Action-oriented guidance and grounded next steps.",
  },
];

const realReadingStyle = {
  id: "real",
  name: "Real reading",
  description: "AI-written synthesis using your question, spread, positions, and drawn cards.",
};

const aiProviders = {
  openai: {
    name: "OpenAI",
    defaultModel: "gpt-4.1-mini",
  },
  claude: {
    name: "Claude",
    defaultModel: "claude-sonnet-4-6",
  },
};

const spreads = [
  {
    id: "one",
    name: "One Card",
    positions: ["Message"],
    description: "A focused daily insight or answer.",
  },
  {
    id: "three",
    name: "Past / Present / Future",
    positions: ["Past", "Present", "Future"],
    description: "A simple time-based thread through the question.",
  },
  {
    id: "sao",
    name: "Situation / Action / Outcome",
    positions: ["Situation", "Action", "Outcome"],
    description: "A practical spread for choices and movement.",
  },
  {
    id: "yesno",
    name: "Yes / No / Maybe",
    positions: ["Yes", "No", "Maybe"],
    description: "A reflective way to examine a binary question without treating tarot as certainty.",
  },
];

const lessons = [
  {
    title: "The Deck as a Ladder",
    type: "Short lesson",
    body:
      "Tarot is traditionally read as 78 images: 22 Major Arcana cards for large archetypal movements, and 56 Minor Arcana cards for daily life, choices, relationships, work, and inner weather.",
  },
  {
    title: "Major Arcana",
    type: "Short lesson",
    body:
      "The majors move from The Fool to The World. Read them as thresholds, initiations, tests, revelations, and integrations rather than simple good or bad omens.",
  },
  {
    title: "Suits and Elements",
    type: "Symbolism",
    body:
      "Wands often carry fire and will. Cups carry water and feeling. Swords carry air and thought. Pentacles carry earth and the material world.",
  },
  {
    title: "Reading a Position",
    type: "Short lesson",
    body:
      "A card changes when it lands in a spread position. The Tower as 'Action' is not the same as The Tower as 'Past'. Always let card and position speak together.",
  },
  {
    title: "Reversals",
    type: "Short lesson",
    body:
      "A reversed card can suggest blockage, inward movement, delay, excess, or a shadow expression. It should deepen the reading, not simply invert it.",
  },
  {
    title: "Symbols Before Certainty",
    type: "Symbolism",
    body:
      "Traditional tarot works through repeated symbols: roads, gates, crowns, moons, suns, cups, hands, towers, water, and thresholds. Learning them builds intuition with roots.",
  },
];

const deepDives = [
  {
    title: "Light and Shadow",
    body:
      "The Sun and Moon appear as more than sky. They mark clarity and mystery, seen and unseen knowledge, conscious confidence and dreamlike uncertainty.",
  },
  {
    title: "Thresholds",
    body:
      "Gates, roads, cliffs, boats, and towers mark transition. When they appear, ask what must be crossed, left behind, or entered with intention.",
  },
  {
    title: "Crowns and Hands",
    body:
      "Crowns point to authority, mastery, and responsibility. Hands point to agency: what is offered, withheld, chosen, received, or released.",
  },
];

const symbolismByKeyword = {
  threshold: "Thresholds, cliffs, roads, and open air point to trust at the edge of the known.",
  will: "Tools on the table, raised hands, and flowering growth show intention brought into form.",
  mystery: "Veils, moons, books, and water mark hidden knowledge and receptive attention.",
  abundance: "Gardens, grain, robes, and stars point to embodiment, fertility, and creative shelter.",
  order: "Thrones, stone, mountains, and crowns show structure, law, and protective boundary.",
  tradition: "Keys, hands, pillars, and ritual figures show transmission through lineage and teaching.",
  union: "Paired figures, angelic witness, and divided paths make choice visible.",
  victory: "Vehicles, reins, armor, and city walls point to discipline directing opposing forces.",
  courage: "Lion, hand, garland, and calm posture show strength as relationship rather than force.",
  solitude: "Lantern, staff, cloak, and height show wisdom gathered through retreat.",
  cycle: "Wheel, creatures, clouds, and letters mark change beyond personal control.",
  balance: "Scales, sword, pillars, and square posture show truth, measure, and consequence.",
  surrender: "Suspension, halo, bound legs, and the tree show voluntary pause and altered seeing.",
  ending: "Banner, horse, river, and sunrise show transformation rather than annihilation.",
  alchemy: "Two cups, flowing water, wings, and path show moderation as sacred mixture.",
  bondage: "Chains, torch, and shadowed figures ask what is chosen, feared, or compulsive.",
  rupture: "Lightning, falling figures, and broken crown show truth striking false structures.",
  hope: "Stars, flowing water, and nakedness show renewal after exposure.",
  dream: "Moon, dogs, towers, water, and path mark uncertainty, instinct, and dream logic.",
  clarity: "Sun, child, wall, and flowers point to vitality, visibility, and simple joy.",
  calling: "Trumpet, rising figures, and water show awakening and the summons to answer.",
  completion: "Wreath, dancer, and four living emblems show integration and arrival.",
};

const majors = [
  ["fool", "The Fool", "0", "threshold", "A beginning, trust, sacred risk", "Naivety, hesitation, scattered trust", "✦"],
  ["magician", "The Magician", "I", "will", "Skill, intention, focused power", "Manipulation, unused ability", "☿"],
  ["priestess", "The High Priestess", "II", "mystery", "Inner knowing, silence, hidden wisdom", "Secrets, disconnection from intuition", "☾"],
  ["empress", "The Empress", "III", "abundance", "Nurture, beauty, embodied creation", "Stagnation, dependency, creative block", "♀"],
  ["emperor", "The Emperor", "IV", "order", "Structure, authority, protection", "Rigidity, control, brittle order", "♔"],
  ["hierophant", "The Hierophant", "V", "tradition", "Teaching, lineage, sacred structure", "Dogma, empty conformity", "☩"],
  ["lovers", "The Lovers", "VI", "union", "Choice, devotion, alignment", "Division, avoidance, misalignment", "♊"],
  ["chariot", "The Chariot", "VII", "victory", "Discipline, direction, movement", "Force without integration", "♜"],
  ["strength", "Strength", "VIII", "courage", "Gentle courage, patience, inner mastery", "Self-doubt, harshness, unsteady nerve", "∞"],
  ["hermit", "The Hermit", "IX", "solitude", "Study, retreat, inner light", "Isolation, withheld wisdom", "♍"],
  ["wheel", "Wheel of Fortune", "X", "cycle", "Change, fate, turning point", "Resistance to cycles, instability", "☸"],
  ["justice", "Justice", "XI", "balance", "Truth, consequence, clear judgment", "Bias, avoidance, imbalance", "⚖"],
  ["hanged", "The Hanged Man", "XII", "surrender", "Pause, sacrifice, new perspective", "Stalling, martyrdom, refusal to release", "♆"],
  ["death", "Death", "XIII", "ending", "Transformation, release, necessary ending", "Clinging, fear of change", "♏"],
  ["temperance", "Temperance", "XIV", "alchemy", "Integration, moderation, healing mixture", "Excess, impatience, disharmony", "⚗"],
  ["devil", "The Devil", "XV", "bondage", "Attachment, temptation, shadow knowledge", "Liberation, denial, breaking chains", "♑"],
  ["tower", "The Tower", "XVI", "rupture", "Revelation, collapse, truth breaking through", "Delayed upheaval, fear of honesty", "⚡"],
  ["star", "The Star", "XVII", "hope", "Renewal, blessing, spiritual trust", "Discouragement, guarded hope", "✶"],
  ["moon", "The Moon", "XVIII", "dream", "Dream, uncertainty, psychic depth", "Confusion lifting, fear named", "☽"],
  ["sun", "The Sun", "XIX", "clarity", "Joy, vitality, clear success", "Dimmed confidence, partial clarity", "☀"],
  ["judgement", "Judgement", "XX", "calling", "Awakening, reckoning, calling", "Self-avoidance, unfinished reckoning", "♩"],
  ["world", "The World", "XXI", "completion", "Completion, integration, wholeness", "Loose ends, delayed arrival", "◎"],
];

const suitDefs = [
  ["wands", "Wands", "Fire", "will", "creative force", "♣"],
  ["cups", "Cups", "Water", "feeling", "emotional truth", "♥"],
  ["swords", "Swords", "Air", "thought", "clarity and conflict", "♠"],
  ["pentacles", "Pentacles", "Earth", "matter", "body, work, and resources", "♦"],
];

const ranks = [
  ["ace", "Ace", "I", "seed", "new potential", "blocked beginning"],
  ["two", "Two", "II", "duality", "choice and exchange", "imbalance or delay"],
  ["three", "Three", "III", "growth", "development and expression", "scattered growth"],
  ["four", "Four", "IV", "foundation", "stability and pause", "stagnation"],
  ["five", "Five", "V", "challenge", "conflict and testing", "avoidance or recovery"],
  ["six", "Six", "VI", "harmony", "repair and movement", "difficulty receiving help"],
  ["seven", "Seven", "VII", "trial", "assessment and perseverance", "doubt or overextension"],
  ["eight", "Eight", "VIII", "movement", "discipline and momentum", "restriction or haste"],
  ["nine", "Nine", "IX", "attainment", "ripening and solitude", "excess or guardedness"],
  ["ten", "Ten", "X", "completion", "culmination and consequence", "burden or unfinished cycle"],
  ["page", "Page", "Page", "student", "curiosity and first practice", "immaturity or distraction"],
  ["knight", "Knight", "Knight", "quest", "pursuit and movement", "recklessness or delay"],
  ["queen", "Queen", "Queen", "keeper", "mature receptivity", "insecurity or overgiving"],
  ["king", "King", "King", "master", "stewardship and command", "rigidity or misuse of power"],
];

const cards = [
  ...majors.map(([id, name, numeral, keyword, upright, reversed, glyph]) => ({
    id,
    name,
    numeral,
    arcana: "major",
    suit: "Major Arcana",
    keyword,
    upright,
    reversed,
    glyph,
      symbol:
      symbolismByKeyword[keyword] ||
      "A major archetype in the soul's procession, read through image, threshold, ordeal, and integration.",
  })),
  ...suitDefs.flatMap(([suitId, suitName, element, theme, material, glyph]) =>
    ranks.map(([rankId, rankName, numeral, keyword, uprightPhrase, reversedPhrase]) => ({
      id: `${rankId}-${suitId}`,
      name: `${rankName} of ${suitName}`,
      numeral,
      arcana: "minor",
      suit: suitName,
      suitId,
      keyword,
      upright: `${rankName} energy in ${material}: ${uprightPhrase}.`,
      reversed: `${rankName} energy in ${material}: ${reversedPhrase}.`,
      glyph,
      element,
      symbol: `${suitName} belong to ${element}; they teach through ${theme} and ${material}.`,
      deepSymbol: `${rankName} carries the number-symbol of ${keyword}; ${suitName.toLowerCase()} carry ${element.toLowerCase()} and ${material}.`,
    })),
  ),
];

const categories = ["self", "relationships", "work", "creativity", "money", "wellbeing", "other"];
const moods = ["clear", "curious", "hopeful", "tender", "uncertain", "charged", "grounded"];
const storage = createSafeStorage("localStorage");
const sessionStore = createSafeStorage("sessionStorage");
const state = {
  deckId: DEFAULT_DECK_ID,
  spreadId: storage.getItem("av.spread") || "one",
  styleId: storage.getItem("av.style") || "traditional",
  reversals: storage.getItem("av.reversals") === "true",
  ai: loadAiSettings(),
  currentReading: null,
  journal: loadJournal(),
};

// Storage can be unavailable (private modes, blocked site data) or full; the app should keep working in memory.
function createSafeStorage(name) {
  let store = null;
  try {
    store = window[name];
    store.getItem("av.probe");
  } catch {
    store = null;
  }
  return {
    getItem(key) {
      try {
        return store ? store.getItem(key) : null;
      } catch {
        return null;
      }
    },
    setItem(key, value) {
      try {
        store?.setItem(key, value);
        return true;
      } catch (error) {
        console.warn(`Could not save ${key}`, error);
        return false;
      }
    },
    removeItem(key) {
      try {
        store?.removeItem(key);
      } catch {
        // Nothing to remove when storage is unavailable.
      }
    },
  };
}

function loadJournal() {
  try {
    const parsed = JSON.parse(storage.getItem("av.journal") || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizeJournalEntry).filter(Boolean) : [];
  } catch {
    console.warn("Saved journal could not be read; starting with an empty journal.");
    return [];
  }
}

function normalizeJournalEntry(entry) {
  if (!entry || typeof entry !== "object" || !Array.isArray(entry.cards)) return null;
  const entryCards = entry.cards
    .filter((cardEntry) => cardEntry && cards.some((card) => card.id === cardEntry.cardId))
    .map((cardEntry) => ({
      cardId: cardEntry.cardId,
      position: String(cardEntry.position || "Card"),
      orientation: cardEntry.orientation === "reversed" ? "reversed" : "upright",
    }));
  if (!entryCards.length) return null;
  const createdAt = Number.isNaN(Date.parse(entry.createdAt)) ? new Date().toISOString() : entry.createdAt;
  return {
    ...entry,
    id: typeof entry.id === "string" && entry.id ? entry.id : createId(),
    createdAt,
    deckId: getDeck(entry.deckId).id,
    spreadId: spreads.some((spread) => spread.id === entry.spreadId) ? entry.spreadId : "one",
    styleId: getStyle(entry.styleId).id,
    category: categories.includes(entry.category) ? entry.category : "self",
    mood: moods.includes(entry.mood) ? entry.mood : "clear",
    question: typeof entry.question === "string" ? entry.question : "",
    note: typeof entry.note === "string" ? entry.note : "",
    aiText: typeof entry.aiText === "string" ? entry.aiText : undefined,
    cards: entryCards,
  };
}

function createId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  populateControls();
  bindEvents();
  renderLessons();
  renderLibrary();
  renderJournal();
  setupPwa();
}

function populateControls() {
  $("#spreadSelect").innerHTML = spreads.map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
  if (!styles.some((style) => style.id === state.styleId)) {
    state.styleId = "traditional";
    storage.setItem("av.style", state.styleId);
  }
  if (!spreads.some((spread) => spread.id === state.spreadId)) {
    state.spreadId = spreads[0].id;
    storage.setItem("av.spread", state.spreadId);
  }
  $("#spreadSelect").value = state.spreadId;
  $("#reversalToggle").checked = state.reversals;
  renderStyleModes();
  renderRealReadingButton();
  $("#journalCategoryFilter").innerHTML =
    `<option value="all">All categories</option>` + categories.map((c) => `<option>${c}</option>`).join("");
  $("#journalMoodFilter").innerHTML =
    `<option value="all">All moods</option>` + moods.map((m) => `<option>${m}</option>`).join("");
  renderAiSettingsForm();
}

function bindEvents() {
  $$("[data-nav]").forEach((button) => button.addEventListener("click", () => showView(button.dataset.nav)));
  $("#spreadSelect").addEventListener("change", (event) => setPreference("spreadId", event.target.value, "av.spread"));
  $$("[data-style-mode]").forEach((button) =>
    button.addEventListener("click", () => setPreference("styleId", button.dataset.styleMode, "av.style")),
  );
  $("#reversalToggle").addEventListener("change", (event) => {
    state.reversals = event.target.checked;
    storage.setItem("av.reversals", String(state.reversals));
  });
  $("#drawButton").addEventListener("click", () => drawReading(false));
  $("#dailyButton").addEventListener("click", () => drawReading(true));
  $("#realReadingButton").addEventListener("click", (event) => {
    if (event.currentTarget.disabled) return;
    drawReading(false, "real");
  });
  $("#learnDailyButton").addEventListener("click", () => {
    showView("home");
    drawReading(true);
  });
  $("#cardSearch").addEventListener("input", renderLibrary);
  $("#arcanaFilter").addEventListener("change", renderLibrary);
  $("#dialogClose").addEventListener("click", () => $("#cardDialog").close());
  $("#exportJournalButton").addEventListener("click", exportJournal);
  $("#importJournalInput").addEventListener("change", importJournal);
  $("#clearJournalButton").addEventListener("click", clearJournal);
  $("#journalCategoryFilter").addEventListener("change", renderJournal);
  $("#journalMoodFilter").addEventListener("change", renderJournal);
  $("#aiSettingsForm").addEventListener("submit", saveAiSettings);
  $("#clearAiSettingsButton").addEventListener("click", clearAiSettings);
  $("#aiProvider").addEventListener("change", updateAiModelDefault);
}

function showView(name) {
  const id = name === "home" ? "homeView" : `${name}View`;
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === id));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.nav === name));
}

function setPreference(key, value, storageKey) {
  state[key] = value;
  storage.setItem(storageKey, value);
  if (key === "styleId") renderStyleModes();
}

function renderStyleModes() {
  $$("[data-style-mode]").forEach((button) => {
    const active = button.dataset.styleMode === state.styleId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderRealReadingButton() {
  const button = $("#realReadingButton");
  if (!button) return;
  button.hidden = !hasAiKey();
}

function drawReading(isDaily, styleOverride = state.styleId) {
  const spread = isDaily ? spreads[0] : getSpread();
  const deck = getDeck();
  const style = getStyle(styleOverride);
  const question = isDaily ? "Card of the day" : $("#questionInput").value.trim();
  const random = isDaily ? seededRandom(dayKey()) : secureRandom;
  const drawn = drawUniqueCards(spread.positions.length, random);
  const reading = {
    id: createId(),
    createdAt: new Date().toISOString(),
    deckId: deck.id,
    spreadId: spread.id,
    styleId: style.id,
    question,
    cards: drawn.map((card, index) => ({
      cardId: card.id,
      position: spread.positions[index],
      orientation: state.reversals && random() > 0.72 ? "reversed" : "upright",
    })),
  };
  state.currentReading = reading;
  renderReading(reading);
  if (style.id === "real") {
    generateRealReading(reading);
  }
  $("#readingResult").scrollIntoView({ behavior: "smooth", block: "start" });
}

function drawUniqueCards(count, random) {
  const source = [...cards];
  const result = [];
  while (result.length < count && source.length) {
    const index = Math.floor(random() * source.length);
    result.push(source.splice(index, 1)[0]);
  }
  return result;
}

function secureRandom() {
  const [value] = window.crypto.getRandomValues(new Uint32Array(1));
  return value / 2 ** 32;
}

// Zero-padded local date, so 1 Nov and 11 Jan no longer share a seed.
function dayKey(date = new Date()) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map((part) => String(part).padStart(2, "0")).join("-");
}

// mulberry32 seeded from a string hash: the card of the day stays stable for the whole day, orientation included.
function seededRandom(key) {
  let seed = 2166136261;
  for (const char of key) seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function renderReading(reading) {
  const deck = getDeck(reading.deckId);
  const style = getStyle(reading.styleId);
  const spread = spreads.find((s) => s.id === reading.spreadId);
  $("#readingResult").innerHTML = `
    <div class="result-header">
      <div>
        <div class="section-kicker">Reading result</div>
        <h2>${escapeHtml(spread.name)}</h2>
        <p class="result-meta">${escapeHtml(deck.name)} · ${escapeHtml(style.name)}${
          reading.question ? ` · ${escapeHtml(reading.question)}` : ""
        }</p>
      </div>
      <span class="style-pill">${escapeHtml(style.name)}</span>
    </div>
    <div class="spread-board">
      ${reading.cards.map((entry) => renderDrawnCard(entry, deck.id, style.id)).join("")}
    </div>
    ${style.id === "real" ? renderAiReadingPanel(reading) : ""}
    <form class="journal-editor" id="saveReadingForm">
      <div class="control-grid">
        <label><span>Category</span><select id="journalCategory">${categories
          .map((c) => `<option>${c}</option>`)
          .join("")}</select></label>
        <label><span>Mood</span><select id="journalMood">${moods.map((m) => `<option>${m}</option>`).join("")}</select></label>
      </div>
      <label><span>Private note</span><textarea id="journalNote" rows="3" placeholder="What did this reading stir or clarify?"></textarea></label>
      <button class="primary-button" type="submit">Save to journal</button>
    </form>
  `;
  $$(".drawn-card .tarot-card").forEach((el) =>
    el.addEventListener("click", () => openCard(cards.find((card) => card.id === el.dataset.cardId))),
  );
  $$("[data-learn-card]").forEach((button) =>
    button.addEventListener("click", () => openCard(cards.find((card) => card.id === button.dataset.learnCard))),
  );
  $("#saveReadingForm").addEventListener("submit", saveCurrentReading);
}

function renderDrawnCard(entry, deckId, styleId) {
  const card = cards.find((item) => item.id === entry.cardId);
  const reversed = entry.orientation === "reversed";
  return `
    <article class="drawn-card">
      <span class="position-label">${escapeHtml(entry.position)} · ${reversed ? "Reversed" : "Upright"}</span>
      ${renderCard(card, deckId, reversed)}
      <p class="interpretation">${escapeHtml(interpret(card, entry.position, styleId, reversed))}</p>
      <button class="secondary-button" data-learn-card="${card.id}">Learn this card</button>
    </article>
  `;
}

function renderAiReadingPanel(reading) {
  const status = reading.aiStatus || "loading";
  const provider = aiProviders[state.ai.provider]?.name || "AI";
  const body = {
    loading: `<p>Drawing together the full spread with ${escapeHtml(provider)}...</p>`,
    ready: `<div class="ai-reading-text">${escapeHtml(reading.aiText)}</div>`,
    error: `<p>${escapeHtml(reading.aiError || "The AI reading could not be generated.")}</p>`,
  }[status];
  return `
    <section class="ai-reading-panel ${status === "error" ? "is-error" : ""}" id="aiReadingPanel">
      <div class="section-kicker">Real reading</div>
      <h3>${status === "ready" ? "AI synthesis" : status === "error" ? "AI reading unavailable" : "Reading in progress"}</h3>
      ${body}
    </section>
  `;
}

function renderCard(card, deckId = state.deckId, reversed = false) {
  const palette = getCardPalette(card, deckId);
  const imageUrl = getHistoricalImageUrl(card, deckId);
  return `
    <article class="tarot-card ${reversed ? "reversed" : ""}" data-card-id="${card.id}" data-deck="${deckId}" data-arcana="${card.arcana}" data-suit="${card.suitId || "major"}" style="--card-tone: ${palette.tone}; --card-accent: ${palette.accent}; --card-ink: ${palette.ink};" tabindex="0">
      <div class="card-art ${imageUrl ? "has-historical-scan" : ""}">
        ${
          imageUrl
            ? `<img class="historical-card-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(card.name)} historical tarot scan" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="markHistoricalImageLoaded(this)" onerror="markHistoricalImageFailed(this)" />`
            : ""
        }
        <div class="card-art-inner">
          <div class="card-title-ribbon">
            <span>${escapeHtml(card.numeral)}</span>
            <strong>${escapeHtml(shortCardTitle(card.name))}</strong>
          </div>
          <div class="card-corner top-left">${escapeHtml(card.glyph)}</div>
          <div class="card-corner top-right">${escapeHtml(card.glyph)}</div>
          <div class="card-illustration">
            ${renderCardScene(card, deckId)}
          </div>
          <div class="card-footer">
            <span>${escapeHtml(card.keyword)}</span>
            <span>${escapeHtml(card.suit)}</span>
          </div>
        </div>
      </div>
      <div class="card-caption">
        <h3>${escapeHtml(card.name)}</h3>
        <p>${escapeHtml(card.keyword)} · ${escapeHtml(card.arcana)}</p>
      </div>
    </article>
  `;
}

function getHistoricalImageUrl(card, deckId) {
  const fileName = deckId === DEFAULT_DECK_ID ? getRwsCommonsFileName(card) : "";
  if (!fileName) return "";
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=700`;
}

function getRwsCommonsFileName(card) {
  if (card.arcana === "major") {
    const majorFileNames = {
      fool: "RWS Tarot 00 Fool.jpg",
      magician: "RWS Tarot 01 Magician.jpg",
      priestess: "RWS Tarot 02 High Priestess.jpg",
      empress: "RWS Tarot 03 Empress.jpg",
      emperor: "RWS Tarot 04 Emperor.jpg",
      hierophant: "RWS Tarot 05 Hierophant.jpg",
      lovers: "RWS Tarot 06 Lovers.jpg",
      chariot: "RWS Tarot 07 Chariot.jpg",
      strength: "RWS Tarot 08 Strength.jpg",
      hermit: "RWS Tarot 09 Hermit.jpg",
      wheel: "RWS Tarot 10 Wheel of Fortune.jpg",
      justice: "RWS Tarot 11 Justice.jpg",
      hanged: "RWS Tarot 12 Hanged Man.jpg",
      death: "RWS Tarot 13 Death.jpg",
      temperance: "RWS Tarot 14 Temperance.jpg",
      devil: "RWS Tarot 15 Devil.jpg",
      tower: "RWS Tarot 16 Tower.jpg",
      star: "RWS Tarot 17 Star.jpg",
      moon: "RWS Tarot 18 Moon.jpg",
      sun: "RWS Tarot 19 Sun.jpg",
      judgement: "RWS Tarot 20 Judgement.jpg",
      world: "RWS Tarot 21 World.jpg",
    };
    return majorFileNames[card.id] || "";
  }

  const rankFileNumbers = {
    ace: "01",
    two: "02",
    three: "03",
    four: "04",
    five: "05",
    six: "06",
    seven: "07",
    eight: "08",
    nine: "09",
    ten: "10",
    page: "11",
    knight: "12",
    queen: "13",
    king: "14",
  };
  const suitPrefixes = {
    wands: "Wands",
    cups: "Cups",
    swords: "Swords",
    pentacles: "Pents",
  };
  const [rankId] = card.id.split("-");
  const prefix = suitPrefixes[card.suitId];
  const number = rankFileNumbers[rankId];
  return prefix && number ? `${prefix}${number}.jpg` : "";
}

function shortCardTitle(name) {
  return name.replace("Wheel of Fortune", "The Wheel").replace("The High Priestess", "Priestess");
}

function getCardPalette(card, deckId) {
  const suitPalettes = {
    wands: { tone: "#9d433a", accent: "#6b2b22", ink: "#28160f" },
    cups: { tone: "#445e78", accent: "#233d5e", ink: "#101923" },
    swords: { tone: "#7b8790", accent: "#33434d", ink: "#15191b" },
    pentacles: { tone: "#53745b", accent: "#254b34", ink: "#101b13" },
    major: { tone: "#6f5576", accent: "#2e2036", ink: "#1e1422" },
  };
  return suitPalettes[card.suitId || "major"];
}

function renderCardScene(card, deckId) {
  if (card.arcana === "major") {
    return renderMajorScene(card, deckId);
  }
  return renderMinorScene(card, deckId);
}

function renderMajorScene(card, deckId) {
  const moonCards = new Set(["priestess", "moon", "hermit", "hanged"]);
  const sunCards = new Set(["sun", "magician", "empress", "star", "world", "judgement"]);
  const towerCards = new Set(["tower", "emperor", "chariot"]);
  const skyMark = moonCards.has(card.id) ? "☾" : sunCards.has(card.id) ? "☀" : "✦";
  const towers = towerCards.has(card.id)
    ? `<span class="scene-tower left"></span><span class="scene-tower right"></span>`
    : `<span class="scene-pillar left"></span><span class="scene-pillar right"></span>`;
  return `
    <div class="major-scene scene-${card.id}">
      <span class="scene-sky">${escapeHtml(skyMark)}</span>
      <span class="scene-mountain mountain-a"></span><span class="scene-mountain mountain-b"></span>
      ${towers}
      <span class="scene-path"></span>
      <span class="scene-figure">
        <span class="figure-head"></span>
        <span class="figure-body">${escapeHtml(card.glyph)}</span>
      </span>
      <span class="scene-orb orb-a"></span>
      <span class="scene-orb orb-b"></span>
    </div>
  `;
}

function renderMinorScene(card, deckId) {
  const rankId = card.id.split("-")[0];
  const pipNumber = {
    ace: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  }[rankId];

  if (!pipNumber) {
    return `
      <div class="court-scene">
        <span class="court-arch"></span>
        <span class="court-crown">♛</span>
        <span class="court-face"></span>
        <span class="court-robe"></span>
        <span class="court-emblem">${escapeHtml(card.glyph)}</span>
        <span class="court-scepter"></span>
      </div>
    `;
  }

  return `
    <div class="pip-scene pip-count-${pipNumber}">
      <span class="pip-vine vine-a"></span>
      <span class="pip-vine vine-b"></span>
      ${Array.from({ length: pipNumber }, (_, index) => `<span class="pip pip-${index + 1}">${escapeHtml(card.glyph)}</span>`).join("")}
    </div>
  `;
}

function interpret(card, position, styleId, reversed) {
  const meaning = reversed ? card.reversed : card.upright;
  const intros = {
    traditional: `In the ${position} position, ${card.name} speaks through ${card.keyword}: ${meaning}`,
    reflective: `${card.name} invites you to notice ${card.keyword}. In ${position}, ask where this pattern is already alive in you. ${meaning}`,
    practical: `${card.name} points to ${card.keyword}. For ${position}, turn this into one grounded choice: ${meaning}`,
    real: `Base meaning for ${position}: ${card.name} carries ${card.keyword}. ${meaning}`,
  };
  return intros[styleId] || intros.traditional;
}

function renderLessons() {
  $("#lessonGrid").innerHTML = lessons
    .map(
      (lesson) => `
      <article class="lesson-card">
        <span class="tag">${escapeHtml(lesson.type)}</span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.body)}</p>
      </article>
    `,
    )
    .join("");
  $("#deepDivePanel").innerHTML = `
    <div class="section-kicker">Symbolism deep dives</div>
    <h2>Read the image before the answer.</h2>
    ${deepDives.map((item) => `<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p>`).join("")}
  `;
}

function renderLibrary() {
  const query = ($("#cardSearch")?.value || "").toLowerCase();
  const filter = $("#arcanaFilter")?.value || "all";
  const filtered = cards.filter((card) => {
    const matchesQuery = [card.name, card.keyword, card.upright, card.symbol, card.suit].join(" ").toLowerCase().includes(query);
    const matchesFilter =
      filter === "all" ||
      card.arcana === filter ||
      card.suitId === filter;
    return matchesQuery && matchesFilter;
  });
  $("#cardGrid").innerHTML = filtered
    .map(
      (card) => `
      <button class="library-card" data-card-id="${card.id}">
        ${renderCard(card)}
      </button>
    `,
    )
    .join("");
  $$(".library-card").forEach((button) =>
    button.addEventListener("click", () => openCard(cards.find((card) => card.id === button.dataset.cardId))),
  );
}

function openCard(card) {
  const deck = getDeck();
  $("#dialogContent").innerHTML = `
    <div class="dialog-layout">
      ${renderCard(card)}
      <div class="dialog-copy">
        <div class="section-kicker">${escapeHtml(card.arcana)} · ${escapeHtml(card.suit)}</div>
        <h2>${escapeHtml(card.name)}</h2>
        <p><strong>Keywords:</strong> ${escapeHtml(card.keyword)}</p>
        <p><strong>Upright:</strong> ${escapeHtml(card.upright)}</p>
        <p><strong>Reversed:</strong> ${escapeHtml(card.reversed)}</p>
        <p><strong>Symbolism:</strong> ${escapeHtml(card.symbol)}</p>
        <p><strong>Deep dive:</strong> ${escapeHtml(card.deepSymbol || buildDeepSymbol(card))}</p>
        <p><strong>Deck note:</strong> ${escapeHtml(getDeckNote(card, deck))}</p>
      </div>
    </div>
  `;
  $("#cardDialog").showModal();
}

function buildDeepSymbol(card) {
  if (card.arcana === "major") return `${card.name} asks you to read posture, gesture, threshold, and surrounding emblems together.`;
  return `${card.name} combines ${card.keyword} with the ${card.suit} suit, so read number and element together before reaching for a fixed answer.`;
}

function getDeckNote() {
  return "Rider-Waite-Smith emphasizes pictorial symbolism, scenic detail, and Pamela Colman Smith's narrative compositions.";
}

function saveCurrentReading(event) {
  event.preventDefault();
  if (!state.currentReading) return;
  const { aiStatus, aiError, ...reading } = state.currentReading;
  const saved = {
    ...reading,
    category: $("#journalCategory").value,
    mood: $("#journalMood").value,
    note: $("#journalNote").value.trim(),
  };
  const existingIndex = state.journal.findIndex((entry) => entry.id === saved.id);
  if (existingIndex >= 0) {
    state.journal[existingIndex] = saved;
  } else {
    state.journal.unshift(saved);
  }
  persistJournal();
  renderJournal();
  showView("journal");
}

function renderJournal() {
  renderJournalInsights();
  const category = $("#journalCategoryFilter")?.value || "all";
  const mood = $("#journalMoodFilter")?.value || "all";
  const filtered = state.journal.filter(
    (entry) => (category === "all" || entry.category === category) && (mood === "all" || entry.mood === mood),
  );
  if (!filtered.length) {
    $("#journalList").innerHTML = `<div class="journal-empty"><p>Your saved readings will stay private on this device.</p></div>`;
    return;
  }
  $("#journalList").innerHTML = filtered
    .map((entry) => {
      const spread = spreads.find((s) => s.id === entry.spreadId) || spreads[0];
      const deck = getDeck(entry.deckId);
      const style = getStyle(entry.styleId);
      return `
        <article class="journal-entry">
          <span class="tag">${escapeHtml(entry.category || "self")} · ${escapeHtml(entry.mood || "clear")}</span>
          <h3>${escapeHtml(entry.question || spread.name)}</h3>
          <p>${new Date(entry.createdAt).toLocaleString()} · ${escapeHtml(deck.name)} · ${escapeHtml(style.name)}</p>
          <div class="mini-cards">
            ${entry.cards
              .map((cardEntry) => {
                const card = cards.find((item) => item.id === cardEntry.cardId);
                if (!card) return "";
                return `<span class="mini-card">${escapeHtml(cardEntry.position)}: ${escapeHtml(card.name)}</span>`;
              })
              .join("")}
          </div>
          ${entry.note ? `<p>${escapeHtml(entry.note)}</p>` : ""}
          ${entry.aiText ? `<div class="ai-reading-text journal-ai-text">${escapeHtml(entry.aiText)}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderJournalInsights() {
  const panel = $("#journalInsights");
  if (!panel) return;
  if (!state.journal.length) {
    panel.innerHTML = `
      <div class="section-kicker">Pattern insights</div>
      <h3>No patterns yet</h3>
      <p>Save readings to see recurring cards, suits, moods, and categories. Everything stays local to this device.</p>
    `;
    return;
  }
  const cardCounts = new Map();
  const suitCounts = new Map();
  const moodCounts = new Map();
  const categoryCounts = new Map();
  state.journal.forEach((entry) => {
    moodCounts.set(entry.mood || "clear", (moodCounts.get(entry.mood || "clear") || 0) + 1);
    categoryCounts.set(entry.category || "self", (categoryCounts.get(entry.category || "self") || 0) + 1);
    entry.cards.forEach((cardEntry) => {
      const card = cards.find((item) => item.id === cardEntry.cardId);
      if (!card) return;
      cardCounts.set(card.name, (cardCounts.get(card.name) || 0) + 1);
      suitCounts.set(card.suit, (suitCounts.get(card.suit) || 0) + 1);
    });
  });
  panel.innerHTML = `
    <div class="section-kicker">Pattern insights</div>
    <h3>${state.journal.length} saved ${state.journal.length === 1 ? "reading" : "readings"}</h3>
    <div class="insight-grid">
      ${renderInsight("Most frequent card", topEntry(cardCounts))}
      ${renderInsight("Dominant suit", topEntry(suitCounts))}
      ${renderInsight("Common mood", topEntry(moodCounts))}
      ${renderInsight("Common category", topEntry(categoryCounts))}
    </div>
  `;
}

function topEntry(map) {
  const [label, count] = [...map.entries()].sort((a, b) => b[1] - a[1])[0] || ["None yet", 0];
  return count ? `${label} (${count})` : label;
}

function renderInsight(label, value) {
  return `<div class="insight-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function exportJournal() {
  const blob = new Blob([JSON.stringify(state.journal, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `arcana-veritas-journal-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importJournal(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported)) throw new Error("Journal export must be an array.");
    const valid = imported.map(normalizeJournalEntry).filter(Boolean);
    if (imported.length && !valid.length) throw new Error("No readable journal entries were found in that file.");
    const existingIds = new Set(state.journal.map((entry) => entry.id));
    const fresh = valid.filter((entry) => !existingIds.has(entry.id));
    state.journal = [...fresh, ...state.journal].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
    persistJournal();
    renderJournal();
    const skipped = imported.length - fresh.length;
    alert(`Imported ${fresh.length} ${fresh.length === 1 ? "reading" : "readings"}${skipped ? ` (${skipped} duplicate or unreadable skipped)` : ""}.`);
  } catch (error) {
    alert(`Import failed: ${error.message}`);
  } finally {
    event.target.value = "";
  }
}

function clearJournal() {
  if (!confirm("Clear all local journal entries on this device?")) return;
  state.journal = [];
  persistJournal();
  renderJournal();
}

function persistJournal() {
  if (!storage.setItem("av.journal", JSON.stringify(state.journal))) {
    alert("This reading is kept for now, but the device would not save the journal. Export it to keep a copy.");
  }
}

function getDeck(deckId = state.deckId) {
  return decks.find((deck) => deck.id === deckId) || decks[0];
}

function getSpread() {
  return spreads.find((spread) => spread.id === state.spreadId) || spreads[0];
}

function getStyle(styleId = state.styleId) {
  if (styleId === realReadingStyle.id) return realReadingStyle;
  return styles.find((style) => style.id === styleId) || styles[0];
}

function hasAiKey() {
  return Boolean(state.ai?.apiKey?.trim());
}

function loadAiSettings() {
  const remember = storage.getItem("av.ai.remember") === "true";
  const storedProvider = storage.getItem("av.ai.provider");
  const provider = aiProviders[storedProvider] ? storedProvider : "openai";
  const model =
    storage.getItem("av.ai.model") ||
    aiProviders[provider]?.defaultModel ||
    aiProviders.openai.defaultModel;
  const apiKey = remember ? storage.getItem("av.ai.key") || "" : sessionStore.getItem("av.ai.key") || "";
  return { provider, model, apiKey, remember };
}

function renderAiSettingsForm() {
  if (!$("#aiSettingsForm")) return;
  $("#aiProvider").value = state.ai.provider;
  $("#aiModel").value = state.ai.model || aiProviders[state.ai.provider]?.defaultModel || "";
  $("#aiApiKey").value = "";
  $("#aiApiKey").placeholder = hasAiKey() ? "Saved key is active" : "Paste a personal API key";
  $("#rememberAiKey").checked = state.ai.remember;
  renderAiSettingsStatus();
}

function renderAiSettingsStatus(message = "") {
  const status = $("#aiSettingsStatus");
  if (!status) return;
  status.innerHTML = `
    <strong>${hasAiKey() ? "Real readings enabled" : "Real readings disabled"}</strong>
    <span>${escapeHtml(message || (hasAiKey() ? `${aiProviders[state.ai.provider]?.name || "AI"} is configured.` : "Add a key to reveal the Real reading option."))}</span>
  `;
}

function updateAiModelDefault() {
  const provider = $("#aiProvider").value;
  $("#aiModel").value = aiProviders[provider]?.defaultModel || "";
}

function saveAiSettings(event) {
  event.preventDefault();
  const provider = $("#aiProvider").value;
  const model = $("#aiModel").value.trim() || aiProviders[provider].defaultModel;
  const typedKey = $("#aiApiKey").value.trim();
  const remember = $("#rememberAiKey").checked;
  const apiKey = typedKey || state.ai.apiKey || "";

  state.ai = { provider, model, apiKey, remember };
  storage.setItem("av.ai.provider", provider);
  storage.setItem("av.ai.model", model);
  storage.setItem("av.ai.remember", String(remember));
  if (remember && apiKey) {
    storage.setItem("av.ai.key", apiKey);
    sessionStore.removeItem("av.ai.key");
  } else {
    storage.removeItem("av.ai.key");
    if (apiKey) sessionStore.setItem("av.ai.key", apiKey);
  }

  populateControls();
  renderAiSettingsStatus(
    hasAiKey() ? "Settings saved. Real reading is available from the reading screen." : "Settings saved. Add a key to enable Real reading.",
  );
}

function clearAiSettings() {
  state.ai = {
    provider: "openai",
    model: aiProviders.openai.defaultModel,
    apiKey: "",
    remember: false,
  };
  storage.removeItem("av.ai.provider");
  storage.removeItem("av.ai.model");
  storage.removeItem("av.ai.remember");
  storage.removeItem("av.ai.key");
  sessionStore.removeItem("av.ai.key");
  if (state.styleId === "real") {
    state.styleId = "traditional";
    storage.setItem("av.style", state.styleId);
  }
  populateControls();
  renderAiSettingsStatus("AI settings cleared.");
}

async function generateRealReading(reading) {
  reading.aiStatus = "loading";
  renderAiReadingOnly(reading);
  setRealReadingBusy(true);
  try {
    const prompt = buildAiReadingPrompt(reading);
    const text = state.ai.provider === "claude" ? await callClaude(prompt) : await callOpenAi(prompt);
    reading.aiStatus = "ready";
    reading.aiText = text.trim();
  } catch (error) {
    reading.aiStatus = "error";
    reading.aiError = error.message || "The provider returned an error.";
  }
  setRealReadingBusy(false);
  const saved = state.journal.find((entry) => entry.id === reading.id);
  if (saved && reading.aiText) {
    saved.aiText = reading.aiText;
    persistJournal();
    renderJournal();
  }
  // A newer reading may be on screen by now; never paint this answer into its panel.
  if (state.currentReading?.id === reading.id) {
    renderAiReadingOnly(reading);
  }
}

function setRealReadingBusy(busy) {
  const button = $("#realReadingButton");
  if (!button) return;
  button.disabled = busy;
  button.textContent = busy ? "Reading..." : "Real reading";
}

function renderAiReadingOnly(reading) {
  const panel = $("#aiReadingPanel");
  if (!panel) return;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderAiReadingPanel(reading).trim();
  panel.replaceWith(wrapper.firstElementChild);
}

function buildAiReadingPrompt(reading) {
  const deck = getDeck(reading.deckId);
  const spread = spreads.find((s) => s.id === reading.spreadId);
  const cardLines = reading.cards
    .map((entry) => {
      const card = cards.find((item) => item.id === entry.cardId);
      const reversed = entry.orientation === "reversed";
      return `- ${entry.position}: ${card.name} (${reversed ? "reversed" : "upright"}). Keyword: ${card.keyword}. Meaning: ${
        reversed ? card.reversed : card.upright
      }. Symbolism: ${card.symbol}`;
    })
    .join("\n");
  return `Question or intention: ${reading.question || "No explicit question"}\nDeck: ${deck.name}\nSpread: ${spread.name}\nCards:\n${cardLines}\n\nWrite a grounded tarot reading for reflective use. Use the card positions, orientations, and interactions between cards. Avoid claiming certainty, fate, medical, legal, financial, or crisis advice. Keep it warm, specific, and useful. Format with these short sections: Overall current, Card-by-card, What to notice, Gentle next step.`;
}

async function callOpenAi(prompt) {
  return callAiProxy(prompt);
}

async function callClaude(prompt) {
  return callAiProxy(prompt);
}

async function callAiProxy(prompt) {
  const providerName = aiProviders[state.ai.provider]?.name || "AI";
  const response = await fetch("/.netlify/functions/ai-reading", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      provider: state.ai.provider,
      model: state.ai.model,
      apiKey: state.ai.apiKey,
      prompt,
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(providerErrorMessage(data, providerName));
  if (!data.text) throw new Error(`${providerName} returned no reading text.`);
  return data.text;
}

function providerErrorMessage(data, provider) {
  return data?.error?.message || `${provider} returned an error. Check the key, model, billing, and browser access.`;
}

window.markHistoricalImageLoaded = (image) => {
  const art = image.closest(".card-art");
  if (!art) return;
  if (image.naturalWidth > 32 && image.naturalHeight > 32) {
    art.classList.add("image-loaded");
    art.classList.remove("image-failed");
  } else {
    window.markHistoricalImageFailed(image);
  }
};

window.markHistoricalImageFailed = (image) => {
  const art = image.closest(".card-art");
  if (!art) return;
  art.classList.add("image-failed");
  art.classList.remove("image-loaded");
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

async function setupPwa() {
  const installButton = $("#installButton");
  const updateBanner = $("#pwaUpdateBanner");
  const updateButton = $("#pwaUpdateButton");
  let installPrompt;
  let waitingWorker;

  const showUpdateReady = (worker) => {
    waitingWorker = worker;
    if (updateBanner) updateBanner.hidden = false;
  };

  if ("serviceWorker" in navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      if (registration.waiting) {
        showUpdateReady(registration.waiting);
      }
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateReady(newWorker);
          }
        });
      });
      if (document.visibilityState === "visible") {
        registration.update();
      }
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") registration.update();
      });
    } catch (error) {
      console.warn("Service worker registration failed", error);
    }
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });
  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    installButton.hidden = true;
  });

  installButton.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    installButton.hidden = true;
  });

  updateButton?.addEventListener("click", () => {
    if (!waitingWorker) return;
    updateButton.disabled = true;
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
  });
}

init();
