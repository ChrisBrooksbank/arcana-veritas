<p align="center">
  <img src="docs/media/hero.jpg" alt="Arcana Veritas: The Moon, The Star and The Sun from the 1909 Rider-Waite-Smith deck, fanned out by candlelight" width="100%" />
</p>

<p align="center">
  <em>A traditional tarot companion for spiritual insight, symbolic learning, and private reflection.</em>
</p>

<p align="center">
  <a href="https://tarot-table.netlify.app"><strong>✦ Open the live app ✦</strong></a>
  &nbsp;·&nbsp; free &nbsp;·&nbsp; no login &nbsp;·&nbsp; no ads &nbsp;·&nbsp; works offline
  <br />
  <strong>🔑 Bring your own OpenAI or Claude key for a full, human-style reading of every spread</strong>
</p>

---

> *The candle is lit. The deck is old, older than the table it rests on, its edges soft from a century of hands.*
>
> *You do not come here for a prophecy. You come with a question you have been carrying around for a while, and you lay three pictures down to see what it looks like from the outside. A woman pours water back into the pool beneath a sky full of stars. A hermit holds up a lantern on a cold ridge. A child rides out under a blazing sun.*
>
> *The cards don't tell you what will happen. They give you better words for what is already happening.*

**Arcana Veritas** (*"the truths of the arcana"*) is an installable tarot web app built around the **Rider-Waite-Smith** tradition, not novelty fortune-telling. It uses Pamela Colman Smith's 1909 artwork, authored interpretations, short lessons on symbolism, and a journal that stays private on your device.

Add your own **OpenAI or Claude API key** and every spread can also get a **Real reading**: a written interpretation that weaves your question, each card, its position, and the way the cards speak to each other into one story, much as a human reader would at the table. No subscription and no markup: you pay your provider directly at their normal API rates.

<p align="center">
  <img src="docs/media/demo.gif" alt="Demo: choosing a Situation / Action / Outcome spread, typing a question, drawing The Magician, The High Priestess and Judgement, opening a card, then searching the library for 'moon'" width="800" />
</p>

## ✦ Real readings: bring your own key

The authored meanings are good for learning a card. A human reader does something more: they read the **whole spread**. They notice that all three cards are Major Arcana, that an action card is asking you to be still, that the outcome answers the question you didn't quite ask.

**Real reading** does that automatically. Paste your own OpenAI or Claude API key once in **Settings**, and a **Real reading** button appears next to *Shuffle and draw*. One tap draws the cards and returns a reading built from:

- **your question**, in your own words
- **every card**, its position in the spread, and whether it's upright or reversed
- **the conversation between the cards**: repeated suits, majors versus minors, tensions and echoes

It comes back in four short parts: **Overall current**, **Card-by-card**, **What to notice**, and **Gentle next step**. It's written to be warm and specific, never fatalistic, and it steers clear of medical, legal, or financial certainty. Save it to your journal with the cards and your note, so you can come back to it later.

<p align="center">
  <img src="docs/media/byok-reading.png" alt="Example Real reading for 'How do I begin the project I keep circling?' with The Magician, The High Priestess and Judgement, in four sections: Overall current, Card-by-card, What to notice, Gentle next step" width="820" />
  <br />
  <sub><em>An example Real reading for a Situation / Action / Outcome spread (The Magician, The High Priestess, Judgement).</em></sub>
</p>

### Set it up in under a minute

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys) or [Anthropic](https://console.anthropic.com/settings/keys).
2. Open **Settings** in the app, choose a provider, and paste the key. The model field is pre-filled, and you can change it to any model your key can use.
3. Choose whether to **remember the key on this device** or keep it for this browser session only.
4. Go back to **Reading**, ask your question, and tap **Real reading**.

<p align="center">
  <img src="docs/media/byok-settings.png" alt="Settings screen with Claude selected, a saved key, and 'Real readings enabled'" width="820" />
</p>

### Why bring your own key?

- **It stays free.** The app has no subscription and no paywall. You pay your provider directly at their API rates.
- **You choose the model.** Pick OpenAI or Claude, and a faster or a deeper model.
- **Your key stays yours.** It's stored only in your browser. Each Real reading passes through a small Netlify Function on its way to the provider, and that function never stores or logs your key.
- **It's optional.** Without a key, everything else (spreads, authored meanings, lessons, journal) works exactly the same, offline included.

## At the table

### Ask, shuffle, draw

Choose a spread, pick a reading voice, and write down what you're carrying. Each card speaks from its position, so The Tower as *Action* reads differently from The Tower as *Past*.

<p align="center">
  <img src="docs/media/reading.png" alt="A Past / Present / Future reading showing The Hermit, The Star and The Sun with reflective interpretations" width="820" />
</p>

### Sit with a single card

Tap any card for its keywords, upright and reversed meanings, symbolism, and notes on how to read it.

<p align="center">
  <img src="docs/media/card-detail.png" alt="Card detail for The Star: keywords, upright and reversed meanings, symbolism and a deep dive" width="820" />
</p>

### Walk the whole deck

All 78 cards, searchable by name or symbol and filterable by arcana or suit.

<p align="center">
  <img src="docs/media/library.png" alt="Card library filtered to the Major Arcana, from The Fool to Death" width="820" />
</p>

### Keep a private journal

Save readings with a mood, a category, and a note. Over time the journal shows your patterns: recurring cards, the dominant suit, the moods you tend to bring to the table. It all stays in your browser, and you can export or import it as JSON.

<p align="center">
  <img src="docs/media/journal.png" alt="Journal with three saved readings and pattern insights" width="820" />
</p>

### Learn the language

Short lessons on the structure of the deck, suits and elements, positions, reversals, and the symbols that keep coming back: thresholds, crowns, hands, light and shadow.

<p align="center">
  <img src="docs/media/learn.png" alt="Learn view with short lessons and symbolism deep dives" width="820" />
</p>

### In your pocket

Install it on your phone's home screen. It's designed for one-handed use and keeps working offline.

<p align="center">
  <img src="docs/media/mobile-home.png" alt="Mobile home screen" width="280" />
  &nbsp;&nbsp;
  <img src="docs/media/mobile-reading.png" alt="Mobile one-card reading showing The Star" width="280" />
</p>

## Features

- **Spreads:** One Card, Past / Present / Future, Situation / Action / Outcome, Yes / No / Maybe
- **Card of the day:** the same card (and orientation) for the whole day
- **Three reading voices:** Traditional, Reflective, Practical
- **Optional reversals**
- **Authored interpretations** for all 78 cards, with symbolism and deep-dive notes
- **Historical artwork:** public-domain 1909 scans, with generated study art as a fallback
- **Lessons** and **symbolism deep dives**
- **Private journal** with moods, categories, filters, pattern insights, and JSON import/export
- **🔑 Real readings (BYOK):** a human-style interpretation of the whole spread from OpenAI or Claude, using **your own API key**; it's saved to the journal with the cards
- **Installable PWA** that works offline

## The Vibe

Mystic, but rooted in tradition.

It should feel like opening an old deck at a quiet table: warm, respectful, symbolic, and focused on the cards. Dark walnut and candle-gold, serif headings, and Pamela Colman Smith's line work at the centre of every screen. There are no ads, no login walls, and no streak counters.

## Philosophy

Arcana Veritas treats tarot as a symbolic and spiritual practice. It is **not** medical, legal, financial, or crisis advice. The readings are written to support reflection, learning, and discernment, not certainty or fear.

## Artwork

The Rider-Waite-Smith deck uses public-domain historical scans from the Pamela Colman Smith / A. E. Waite 1909 tarot, loaded through Wikimedia Commons `Special:FilePath` URLs. If a scan can't load, the app falls back to generated study artwork so no card face is ever blank.

## Privacy

- Your journal lives only in your browser's `localStorage`.
- Real readings are optional and use **bring your own key**. Keys never ship with the app. A remembered key is kept in `localStorage`; otherwise it lives in `sessionStorage` and disappears when you close the browser. **Clear AI settings** removes it straight away.
- During a Real reading, your question, the drawn cards, and your key go to this app's Netlify Function, which forwards them to the provider you chose and returns the text. The function doesn't store or log your key, question, or reading.
- Your provider's own data policy applies to what you send them.

## Tech

A small static PWA with no framework, no build step, and no accounts:

- HTML, CSS, and vanilla JavaScript (ES modules)
- Web app manifest and service worker (network-first app shell, offline fallback)
- One Netlify Function (`netlify/functions/ai-reading.js`) for BYOK AI calls
- Netlify static deploy

## Local development

Serve the project folder with any static server:

```sh
python -m http.server 5173 --bind 127.0.0.1
```

Then open <http://127.0.0.1:5173/>.

Real readings call the Netlify Function at `/.netlify/functions/ai-reading`, so run `netlify dev` instead if you want to try them locally.

## Deployment

The live site runs on Netlify: **[tarot-table.netlify.app](https://tarot-table.netlify.app)**

Netlify reads [`netlify.toml`](./netlify.toml) and publishes the repository root as a static site.

## Roadmap status

- Single Rider-Waite-Smith deck flow: implemented.
- Richer card-specific symbolism lessons: implemented with card deep dives.
- Card pattern insights from the private journal: implemented locally.

See [`TAROT_PWA_PLAN.md`](./TAROT_PWA_PLAN.md) for the full product plan.

## License

[MIT](./LICENSE) for the code. The 1909 Rider-Waite-Smith artwork is in the public domain in the US and UK; check your own jurisdiction before reusing it.

<p align="center"><sub>☾ &nbsp; ✦ &nbsp; ☀</sub></p>
