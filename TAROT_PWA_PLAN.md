# Arcana Veritas Tarot PWA Product Plan

Research date: 2026-06-15

## Goal

Build an installable tarot Progressive Web App called **Arcana Veritas** that supports quick readings, deeper learning, and at least two selectable tarot decks. The app should feel useful to spiritual users who want to learn more, while staying authentic, traditional, and respectful of tarot history.

## Product Positioning

The market is split between:

- reading-first apps that offer many spreads and daily guidance,
- learning-first apps that teach card meanings through practice,
- deck-library apps that focus on beautiful card art and paid deck collections,
- ritual/journal apps that emphasize reflection, mood, and habit.

The proposed app should combine the best beginner-friendly pieces: a fast reading path, a structured learning path, and a calm offline-first PWA experience.

Recommended positioning:

> A traditional tarot companion for spiritual insight, symbolic learning, and private reflection, with historically rooted decks and clear authored meanings.

Visual positioning:

> Beautiful enough to feel like opening a real deck, restrained enough that the cards remain the star.

Brand direction:

- Working name: **Arcana Veritas**.
- Meaning: "hidden truths" or "truths of the arcana."
- Tone: mystical, traditional, authentic, respectful.
- Audience: spiritual users who want to learn tarot more deeply.
- Price: free.
- Reading content: fixed authored interpretations for MVP, not AI-generated readings.
- First two decks: Rider-Waite-Smith and Tarot de Marseille.
- Future art direction: gothic, occult, and fantasy-influenced decks after the historical foundation is strong.

## Competitor Notes

| App / Site | What It Does Well | Useful Lessons |
|---|---|---|
| [Labyrinthos Tarot Reading](https://apps.apple.com/us/app/labyrinthos-tarot-reading/id1155180220) | Strong learning system, 70+ spreads, custom spreads, deck switching, journal, reminders, ad-free model, AI readings, saved-reading analytics. | Best-in-class learning depth. The app should support readings, learning, journaling, and pattern discovery as connected loops. |
| [Golden Thread Tarot](https://goldenthreadtarot.com/) | Modern deck identity, guided readings, lessons, card database, saved readings, emotional/self-knowledge tracking. | A distinct deck style can become part of the product identity. Reflection data is valuable if it stays lightweight. |
| [Trusted Tarot](https://www.trustedtarot.com/app/) | Simple quick access to daily, weekly, Celtic Cross, yes/no, love, money, and career readings; full card meaning library. | Users want quick readings by topic. Position-specific interpretations matter: a card should mean something different in "past" vs "advice". |
| [Galaxy Tarot](https://galaxytone.com/) | Straightforward shuffle, select cards, three-card readings, card of the day, and beginner-friendly interpretations. | Keep the first reading flow very simple. The core should work without sign-up or setup. |
| [The Fool's Dog Tarot & Divination](https://apps.apple.com/us/app/fools-dog-tarot-divination/id573978695) | Large deck library, high-resolution card zoom, many spreads, free-form layouts, journal, reversals, majors-only mode, customizable meanings, calm professional-reader features. | Deck quality and reader control matter. Advanced settings should exist, but not interrupt beginners. |
| [Mystic Mondays](https://apps.apple.com/us/app/mystic-mondays/id1233064572) | Daily card ritual, multiple decks/oracle decks, calendar journal, lifestyle categories, keywords, reversals, insights, subscription model. | Habit and reflection features can make users return. Categorized journal entries make past readings easier to browse. |
| [Lo Scarabeo Tarot Collection](https://apps.apple.com/jp/app/lo-scarabeo-tarot-collection/id1241768744?l=en-US) | Two interactive decks, one-card and three-card readings, reversals toggle, animated shuffle/cut, deck catalogue, multilingual meanings. | The user's "at least two decks" requirement is validated by an existing app model. Two decks is enough for MVP if both feel complete. |

## Differentiation Opportunity

Most existing apps lean either mystical, commercial, or encyclopedic. This PWA can stand out by being:

- privacy-first: local journal by default, no account required for MVP,
- installable and offline-capable: readings and card meanings continue to work without network,
- spiritually grounded and beginner-friendly without being condescending,
- tradition-led: Rider-Waite-Smith and Tarot de Marseille are treated as real systems with their own symbolism and history,
- deck-aware: meanings can include small notes about how symbolism differs between decks,
- practical: each reading ends with reflection prompts and optional action notes,
- visually led: deck artwork, card reveal, and reading layout should feel like the main experience rather than decoration.

## MVP Feature Set

### 1. Deck Choice

Ship with two complete 78-card decks:

1. Rider-Waite-Smith inspired deck
   - Best for beginners because most learning material references its symbols.
   - Use original public-domain scans only after confirming image provenance and jurisdiction.
   - Avoid using modern recolored editions unless license is clear.
   - Possible source: Wikimedia Commons Rider-Waite tarot deck category, which notes the original deck is public domain in the US and UK while warning that some colorized versions may still be copyrighted.
   - Visual treatment: lightly restored scans, consistent crop, soft card shadow, optional zoom, no heavy filters.

2. Tarot de Marseille style deck
   - Good contrast with Rider-Waite-Smith because pip cards are less illustrated.
   - Useful for teaching that deck systems differ, not just art styles.
   - Use a public-domain historical source or a clearly licensed restoration.
   - Possible sources: British Museum Tarot de Marseille object records, Wikimedia Commons, PICRYL, or another museum/public-domain collection after checking reuse terms.
   - Visual treatment: preserve historic texture and line quality, but normalize card size and background so the deck feels intentional in the app.

Optional later decks:

- high-contrast accessibility deck,
- gothic/occult original deck,
- fantasy-influenced symbolic deck,
- seasonal or theme deck if it still feels respectful to tarot tradition,
- user-imported personal deck images.

Artwork quality bar:

- Cards must be high enough resolution for mobile full-screen viewing.
- Decks need consistent aspect ratio, border treatment, naming, and card backs.
- Do not mix artwork from multiple editions inside one deck unless it is intentionally labeled as a sampler.
- Store license/source metadata per deck and expose it in deck details.
- If generated artwork is used later, label it clearly and keep it separate from historical/public-domain decks.
- Best long-term option: commission an original third deck once the product direction is validated.

### 2. Quick Reading

Primary first-screen action: "Draw Cards".

MVP spreads:

- One Card: quick daily insight.
- Three Card: Past / Present / Future.
- Situation / Action / Outcome.
- Yes / No / Maybe: framed carefully as reflection, not certainty.

Reading flow:

1. Choose deck or use last selected deck.
2. Choose spread.
3. Choose reading style or use default reading style.
4. Optional: enter a question.
5. Shuffle animation.
6. Tap or auto-draw cards.
7. Reveal cards one by one.
8. Show:
   - card image,
   - position meaning,
   - upright/reversed state if enabled,
   - concise interpretation,
   - "learn this card" link,
   - save-to-journal button.

Selectable reading styles:

- Traditional: classic tarot meanings, symbolism, suit/element associations, and position-based interpretation.
- Reflective: gentle self-inquiry and journaling prompts.
- Spiritual Guidance: intuitive/divinatory language while staying grounded and respectful.
- Practical: action-oriented guidance and next steps.

The reading style should be available as both a default setting and a per-reading choice. MVP interpretations should be authored in advance, with no AI-generated readings.

Settings:

- reversals on/off,
- default reading style,
- app chooses cards vs user picks cards,
- allow repeated cards within same reading: off,
- majors-only practice mode: later, not MVP-critical.

### 3. Learn Tarot

Learning should be practical and directly connected to readings.

MVP learning sections:

- Card Library
  - all 78 cards,
  - major/minor filters,
  - suit filters,
  - upright and reversed meanings,
  - keywords,
  - symbolism notes,
  - historical/deck-system notes where useful,
  - "seen in my readings" count.

- Beginner Path
  - What is tarot?
  - The structure of the deck.
  - Major Arcana as archetypes.
  - Four suits and their themes.
  - Court cards.
  - Reading a spread position.
  - Reversals.
  - Asking better questions.

- Symbolism Deep Dives
  - visual symbols on major cards,
  - suit and elemental symbolism,
  - Marseille vs Rider-Waite-Smith differences,
  - recurring symbols such as towers, moons, water, animals, crowns, hands, roads, and thresholds,
  - occult correspondences only where they are historically appropriate and clearly explained.

- Card of the Day
  - one daily card,
  - brief traditional meaning,
  - symbol to notice,
  - reflection prompt,
  - option to save to journal.

- Practice Mode
  - later phase after the learning foundation,
  - show a card, guess keywords,
  - compare your answer to the guide,
  - no harsh scoring; use confidence tracking instead.

### 4. Reading Journal

Local-first journal:

- saved readings,
- date/time,
- deck used,
- spread used,
- question,
- cards and positions,
- user notes,
- mood/category tags.
- import/export.

MVP categories:

- self,
- relationships,
- work,
- creativity,
- money,
- health/wellbeing,
- other.

Important: include a gentle disclaimer that tarot is for reflection and entertainment, not medical, legal, financial, or crisis advice.

Privacy decision:

- Journal data should be private and local-first by default.
- No account is required for MVP.
- Import/export should support a simple user-owned file format such as JSON.
- Mood tags and categories are MVP features.

### 5. PWA Requirements

Use a web app manifest so the app can be installed. MDN describes the manifest as the browser-facing file that tells the device how the PWA should appear and behave.

Use a service worker for:

- app shell caching,
- deck image caching,
- card meaning data caching,
- offline reading and learning,
- graceful update handling.

Core offline promise:

> If the user has opened the app once, they can draw cards, read meanings, and view saved journal entries offline.

## Suggested Information Architecture

- Home
  - Draw Cards
  - Daily Card
  - Continue Learning
  - Recent Journal

- Reading
  - Spread picker
  - Deck picker
  - Reading style picker
  - Shuffle/draw
  - Reading result

- Learn
  - Beginner Path
  - Symbolism Deep Dives
  - Card Library
  - Card of the Day
  - Practice

- Journal
  - Reading history
  - Filters by card, deck, spread, category, date
  - Mood and category filters
  - Import/export
  - Reading detail

- Settings
  - Default deck
  - Default reading style
  - Reversals
  - Theme
  - Data export/import
  - Clear local data
  - About/disclaimer

## Data Model

### Card

- id
- name
- arcana
- suit
- number/rank
- keywords
- uprightMeaning
- reversedMeaning
- symbolism
- learningNotes
- historicalNotes
- deckSpecificNotes

### Deck

- id
- name
- description
- license
- sourceUrl
- cardImageMap
- system: `rws`, `marseille`, or `custom`
- visualStyle
- cardBackImage

### Spread

- id
- name
- description
- positions
- recommendedUse

### Reading Style

- id
- name
- description
- tone
- interpretationMode: `traditional`, `reflective`, `spiritual`, or `practical`
- promptStyle

### Reading

- id
- createdAt
- deckId
- spreadId
- readingStyleId
- question
- cards:
  - cardId
  - positionId
  - orientation
- notes
- category
- mood

## UX Principles

- The first screen must be the usable app, not a marketing landing page.
- Quick reading must take under 30 seconds from app open to interpretation.
- Learning content should be available from every card result.
- Avoid implying fixed predictions. Use language like "invites", "may suggest", "reflect on".
- Keep journal private by default.
- Make all card images zoomable.
- Make meanings skimmable first, detailed second.
- Include accessible color contrast and a non-animated/reduced-motion mode.

## Visual Direction

Visual ambition:

The app should feel visually "on vibe": mystical, tactile, card-led, and atmospheric, but still practical and respectful of tarot tradition. The artwork should do most of the emotional work. Interface chrome should stay quiet, readable, and supportive.

Recommended tone:

- intimate,
- warm,
- tactile,
- art-forward,
- historically rooted,
- gently gothic,
- occult-literate,
- readable,
- symbolic without clutter,
- slightly ritualized without feeling theatrical.

First-screen visual concept:

- Full app surface, not a marketing landing page.
- A prominent "Draw Cards" reading area with the selected deck visible.
- The active deck's card back is a major visual element.
- Daily card or recent reading can sit below, giving a hint of the next content.
- Use subtle motion for shuffle/reveal, with reduced-motion support.

Card experience:

- Card art should be large enough to inspect.
- Each drawn card should have a satisfying reveal interaction.
- Users should be able to tap a card to zoom into the artwork.
- Reading layouts should preserve spread geometry where possible, not just list cards vertically.
- Card backs should be designed or selected with the same care as faces.

Interface style:

- Dark and light themes are both acceptable, but avoid a one-note purple/dark-blue mystical palette.
- Prefer deep ink, warm parchment, muted jewel accents, and clean neutral surfaces.
- Keep controls compact and familiar: icon buttons, segmented spread selectors, toggles for reversals, and clear deck swatches/previews.
- Avoid large blocks of explanatory UI text on the main reading screen.
- Typography should be calm and literary, but body text must remain highly legible.

Artwork sourcing strategy:

- MVP should use two strong, legally clear historical/public-domain decks if possible.
- Use restored public-domain scans only when source and reuse terms are documented.
- Keep a `deck-license` record for every deck with title, artist/source, year, source URL, license, and notes.
- If the public-domain artwork is too inconsistent or low quality, use it for prototype only and plan a commissioned original deck for launch.
- A commissioned deck should prioritize 78-card completeness, visual coherence, accessible contrast, symbolic readability, and a gothic/occult/fantasy tone that still respects traditional tarot structure.

Avoid:

- generic purple gradients,
- fake mystical excess,
- heavy marketing copy,
- AI-generated deck art unless intentionally labeled and licensed,
- fuzzy, low-resolution, or mismatched card images,
- decorative backgrounds that compete with the card art,
- subscription prompts in the core reading flow.

The two initial deck styles should carry visual variety:

- Rider-Waite-Smith: detailed, illustrative, beginner-recognizable.
- Marseille: historical, geometric, more interpretive.

Future visual direction:

- Gothic, occult, and fantasy decks should come after the historical deck foundation.
- Any original deck should still map clearly to traditional card meanings and symbols.
- Avoid novelty art that makes the app feel detached from tarot lineage.

Visual MVP deliverables:

- deck preview screen with large sample cards,
- polished card backs for both decks,
- card reveal animation,
- card zoom modal,
- consistent crop/frame treatment for all 156 initial card faces,
- app icon based on original brand art or a legally safe symbolic mark,
- 192px and 512px PWA icons plus maskable versions.

## Technical Plan

Recommended stack:

- Vite + React or SvelteKit static app.
- TypeScript.
- Local storage via IndexedDB.
- Service worker via Workbox or framework PWA plugin.
- Static JSON card/deck/spread data.
- Responsive layout designed mobile-first.

PWA files:

- `manifest.webmanifest`
- service worker
- app icons: 192, 512, maskable
- offline fallback route
- cache versioning

Testing:

- Lighthouse PWA audit.
- Offline mode test in Chrome/Edge DevTools.
- Install test on Android Chrome and desktop Chrome/Edge.
- iOS Safari add-to-home-screen smoke test.
- Reduced-motion check.
- Keyboard navigation check.
- Screen reader labels for cards, buttons, and spread positions.

## Roadmap

### Phase 1: Research and Content

- Validate the name **Arcana Veritas** for tone and basic domain/app-name availability.
- Confirm deck image licensing.
- Shortlist artwork sources for Rider-Waite-Smith and Tarot de Marseille.
- Download prototype deck assets only from sources with clear reuse terms.
- Create a visual moodboard and card treatment prototype.
- Build canonical 78-card data set.
- Write beginner-friendly meanings.
- Write authored interpretations for the four MVP reading styles: Traditional, Reflective, Spiritual Guidance, and Practical.
- Define MVP spreads.
- Define deck metadata and license records.

### Phase 2: MVP Build

- Home screen.
- Deck picker with two decks.
- Spread picker.
- Reading style picker.
- Shuffle/draw/reveal flow.
- Reading interpretation screen.
- Card library.
- Short lessons.
- Symbolism deep dives.
- Card of the day.
- Local journal with mood tags, categories, and import/export.
- Card zoom modal.
- Card reveal animation with reduced-motion fallback.
- PWA app icons and install visuals.
- PWA install/offline support.

### Phase 3: Polish

- Reading history filters.
- Practice mode.
- Card zoom.
- Artwork QA across all cards.
- Improved deck preview and sample-card browsing.
- Reduced-motion setting.
- Accessibility pass.

### Phase 4: Advanced Features

- Custom spreads.
- Pattern insights across saved readings.
- User-created meanings.
- Optional cloud sync.
- Optional AI-assisted interpretation, clearly labeled and never required.
- Additional licensed decks.
- Commission or produce an original signature deck.

## MVP Acceptance Criteria

- User can install the app as a PWA.
- User can choose between at least two decks.
- Both MVP decks have complete 78-card artwork with documented source/license metadata.
- Card artwork is visually consistent enough for full-screen mobile display.
- User can perform a one-card reading.
- User can perform a three-card reading.
- User can choose a reading style from Traditional, Reflective, Spiritual Guidance, and Practical.
- Reading interpretations are authored/fixed for MVP, not AI-generated.
- User can read card meanings from the result screen.
- User can zoom into a card image from a reading or the card library.
- User can browse a full 78-card library.
- User can complete at least five short lessons.
- User can open symbolism deep dives from relevant cards.
- User can draw a card of the day.
- User can save and reopen a reading.
- User can tag journal entries with mood and category.
- User can export and import journal data.
- App works offline after first load.
- App includes polished PWA icons and an installable visual identity.
- App clearly includes a reflection/entertainment disclaimer.

## Decisions From User Interview

- Vibe: mystical but rooted in tradition, authentic, and respectful to tarot lineage.
- Audience: spiritual users who want to learn more.
- Reading style: selectable, both as a default setting and per-reading choice.
- Artwork: historical scans first, with gothic, occult, and fantasy influence for later decks.
- Initial decks: Rider-Waite-Smith and Tarot de Marseille.
- AI: fixed authored meanings for MVP, no AI interpretations at launch.
- Learning: symbolism deep dives, card of the day, and short lessons.
- Journal: private/local-first with mood tags, categories, and import/export.
- Monetization: free.
- Working name: Arcana Veritas.

## Open Questions

- Should the app require accounts later, or remain fully local-first forever?
- If public-domain deck scans are used, what level of restoration is acceptable before the deck feels altered?
- Should launch include a custom brand/card-back design even if card faces are historical?
- Should the future gothic/occult/fantasy deck be commissioned, generated with careful labeling, or created as a hybrid human-led art project?

## Source Notes

- Labyrinthos App Store page: deck choice, 70+ spreads, journaling, learning, reminders, ad-free model, AI readings.
- Golden Thread Tarot site: lessons, card database, guided readings, saved readings, self-knowledge/pattern reflection.
- Trusted Tarot app page: daily/weekly/Celtic Cross/topic readings and meaning library.
- Galaxy Tarot site: shuffle/select-card flow, three-card reading, card-of-the-day beginner appeal.
- The Fool's Dog App Store page: deck library, zoomable cards, free-form spreads, journal, reversals, advanced reader controls.
- Mystic Mondays App Store page: daily ritual, deck choice, journal categories, reversals, insights, subscription pattern.
- Lo Scarabeo Tarot Collection App Store page: two interactive decks, one-card and three-card readings, reversals toggle, multilingual meanings.
- Wikimedia Commons Rider-Waite tarot deck category: original Rider-Waite deck public-domain note and caution about modern colorized versions.
- British Museum Tarot de Marseille object record: example source for historical Marseille deck imagery and metadata.
- PICRYL tarot collections: public-domain historical tarot image discovery route.
- MDN PWA docs: installability and manifest guidance.
- web.dev PWA docs: service worker offline/cache guidance.
