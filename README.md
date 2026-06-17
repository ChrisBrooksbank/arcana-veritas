# Arcana Veritas

**A traditional tarot companion for spiritual insight, symbolic learning, and private reflection.**

Live app: [https://arcana-veritas-20260615164633.netlify.app](https://arcana-veritas-20260615164633.netlify.app)

Arcana Veritas is a free, installable tarot PWA built around historical deck traditions rather than novelty fortune-telling. It supports quick readings, authored interpretations, tarot learning, and a private local journal.

## The Vibe

Mystic, but rooted in tradition.

The app is designed to feel like opening an old deck at a quiet table: warm, respectful, symbolic, and focused on the cards themselves. The Rider-Waite-Smith deck uses historical scan artwork, and the experience is intentionally free of ads and login walls. AI readings are optional and require the user to bring their own API key.

## Features

- Installable Progressive Web App
- Rider-Waite-Smith deck with historical scan artwork
- Tarot de Marseille deck with Jean Dodal historical trump scans where available
- High-contrast accessibility study deck
- Arcana Noctis gothic/occult/fantasy study deck
- One-card daily reading
- Three-card Past / Present / Future spread
- Situation / Action / Outcome spread
- Yes / No / Maybe reflective spread
- Selectable reading styles:
  - Traditional
  - Reflective
  - Spiritual Guidance
  - Practical
- Optional BYOK Real readings with OpenAI or Claude
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

The Tarot de Marseille deck uses Jean Dodal historical scan support for known trump filenames and a generated Marseille study fallback where complete scan coverage is not yet available through stable public URLs.

The High-Contrast Study and Arcana Noctis decks are app-generated study treatments, intentionally labeled separately from historical scan decks.

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

[https://arcana-veritas-20260615164633.netlify.app](https://arcana-veritas-20260615164633.netlify.app)

Netlify uses [netlify.toml](./netlify.toml) and publishes the repository root as a static site.

## Roadmap Status

- Complete historical Tarot de Marseille scan deck: partially implemented with Jean Dodal trump scans and generated fallback for missing stable public URLs.
- Deck source/provenance metadata in the UI: implemented.
- Richer card-specific symbolism lessons: implemented with card detail deep dives.
- Optional card pattern insights from the private journal: implemented locally.
- High-contrast accessibility deck: implemented.
- Original gothic/occult/fantasy deck: implemented as Arcana Noctis, an app-generated study deck.
