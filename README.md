# Arcana Veritas

**A traditional tarot companion for spiritual insight, symbolic learning, and private reflection.**

Live app: [https://tarot-table.netlify.app](https://tarot-table.netlify.app)

Arcana Veritas is a free, installable tarot PWA built around the Rider-Waite-Smith tradition rather than novelty fortune-telling. It supports quick readings, authored interpretations, tarot learning, and a private local journal.

## The Vibe

Mystic, but rooted in tradition.

The app is designed to feel like opening an old deck at a quiet table: warm, respectful, symbolic, and focused on the cards themselves. The Rider-Waite-Smith deck uses historical scan artwork, and the experience is intentionally free of ads and login walls. AI readings are optional and require the user to bring their own API key.

## Features

- Installable Progressive Web App
- Rider-Waite-Smith deck with historical scan artwork and generated fallback art
- One-card daily reading
- Three-card Past / Present / Future spread
- Situation / Action / Outcome spread
- Yes / No / Maybe reflective spread
- Visible reading mode buttons:
  - Traditional
  - Reflective
  - Practical
- Optional BYOK Real reading action with OpenAI or Claude
- Settings page for session-only or remembered local API key storage
- Fixed authored interpretations
- Full 78-card library
- Symbolism deep dives
- Card-specific deep-dive notes
- Short tarot lessons
- Private local journal
- Pattern insights from saved readings
- Mood tags and categories
- Journal import/export
- Offline-capable app shell

## Artwork

The Rider-Waite-Smith deck uses public-domain historical scan artwork from the Pamela Colman Smith / A. E. Waite 1909 tarot tradition, loaded through Wikimedia Commons `Special:FilePath` image URLs.

If a historical scan cannot load, the app falls back to generated study artwork so card faces do not appear empty.

## Philosophy

Arcana Veritas treats tarot as a symbolic and spiritual practice. It is not medical, legal, financial, or crisis advice. The readings are written to support reflection, learning, and discernment rather than certainty or fear.

## Tech

This is a small static PWA:

- HTML
- CSS
- Vanilla JavaScript
- Web app manifest
- Service worker
- Netlify Function for BYOK AI provider calls
- Netlify static deploy

No framework, no build step, no account system.

Optional AI readings use a bring-your-own-key flow from the browser. Keys are never shipped with the app; if users choose to remember a key it is stored in browser `localStorage`, otherwise it stays in `sessionStorage`. During a Real reading, the key is sent to the app's Netlify Function only to forward that request to the selected provider.

## Local Development

Run a local static server from the project folder:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173/
```

## Deployment

The live site is deployed on Netlify:

[https://tarot-table.netlify.app](https://tarot-table.netlify.app)

Netlify uses [netlify.toml](./netlify.toml) and publishes the repository root as a static site.

## Roadmap Status

- Single Rider-Waite-Smith deck flow: implemented.
- Richer card-specific symbolism lessons: implemented with card detail deep dives.
- Optional card pattern insights from the private journal: implemented locally.
