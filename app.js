const decks = [
  {
    id: "rws",
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
  {
    id: "marseille",
    name: "Tarot de Marseille",
    system: "marseille",
    description:
      "Historic Jean Dodal-inspired Marseille system, geometric and more austere for learning suit, number, and archetype.",
    source:
      "Artwork: Jean Dodal Tarot de Marseille, Lyon, ca. 1701-1715. Historical scan support is used where Commons filenames are available; generated study fallback remains for missing cards.",
    artist: "Jean Dodal",
    year: "ca. 1701-1715",
    license: "Public domain historical work; individual hosted files retain their own source metadata.",
    sourceUrl: "https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal",
  },
  {
    id: "contrast",
    name: "High-Contrast Study",
    system: "accessibility",
    description:
      "A stark accessibility deck with large labels, strong outlines, and simplified symbolism for low-vision study.",
    source: "Original app-generated accessibility deck treatment for Arcana Veritas.",
    artist: "Arcana Veritas system",
    year: "2026",
    license: "Generated study artwork; no historical artwork claim.",
    sourceUrl: "https://github.com/ChrisBrooksbank/arcana-veritas",
  },
  {
    id: "noctis",
    name: "Arcana Noctis",
    system: "gothic",
    description:
      "A gothic occult/fantasy study deck: moonlit frames, sigils, and symbolic figures mapped to traditional meanings.",
    source: "Original app-generated gothic/occult/fantasy study deck treatment for Arcana Veritas.",
    artist: "Arcana Veritas system",
    year: "2026",
    license: "Generated study artwork; intentionally separate from historical scan decks.",
    sourceUrl: "https://github.com/ChrisBrooksbank/arcana-veritas",
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
    id: "spiritual",
    name: "Spiritual Guidance",
    description: "Intuitive language grounded in the card's traditional symbolism.",
  },
  {
    id: "practical",
    name: "Practical",
    description: "Action-oriented guidance and grounded next steps.",
  },
];

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
const state = {
  deckId: localStorage.getItem("av.deck") || "rws",
  spreadId: localStorage.getItem("av.spread") || "one",
  styleId: localStorage.getItem("av.style") || "traditional",
  reversals: localStorage.getItem("av.reversals") === "true",
  currentReading: null,
  journal: JSON.parse(localStorage.getItem("av.journal") || "[]"),
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function init() {
  populateControls();
  bindEvents();
  renderDeckStage();
  renderLessons();
  renderLibrary();
  renderJournal();
  setupPwa();
}

function populateControls() {
  $("#deckSelect").innerHTML = decks.map((d) => `<option value="${d.id}">${d.name}</option>`).join("");
  $("#spreadSelect").innerHTML = spreads.map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
  $("#styleSelect").innerHTML = styles.map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
  $("#deckSelect").value = state.deckId;
  $("#spreadSelect").value = state.spreadId;
  $("#styleSelect").value = state.styleId;
  $("#reversalToggle").checked = state.reversals;
  $("#journalCategoryFilter").innerHTML =
    `<option value="all">All categories</option>` + categories.map((c) => `<option>${c}</option>`).join("");
  $("#journalMoodFilter").innerHTML =
    `<option value="all">All moods</option>` + moods.map((m) => `<option>${m}</option>`).join("");
}

function bindEvents() {
  $$("[data-nav]").forEach((button) => button.addEventListener("click", () => showView(button.dataset.nav)));
  $("#deckSelect").addEventListener("change", (event) => setPreference("deckId", event.target.value, "av.deck"));
  $("#spreadSelect").addEventListener("change", (event) => setPreference("spreadId", event.target.value, "av.spread"));
  $("#styleSelect").addEventListener("change", (event) => setPreference("styleId", event.target.value, "av.style"));
  $("#reversalToggle").addEventListener("change", (event) => {
    state.reversals = event.target.checked;
    localStorage.setItem("av.reversals", String(state.reversals));
  });
  $("#drawButton").addEventListener("click", () => drawReading(false));
  $("#dailyButton").addEventListener("click", () => drawReading(true));
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
}

function showView(name) {
  const id = name === "home" ? "homeView" : `${name}View`;
  $$(".view").forEach((view) => view.classList.toggle("is-active", view.id === id));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.nav === name));
}

function setPreference(key, value, storageKey) {
  state[key] = value;
  localStorage.setItem(storageKey, value);
  renderDeckStage();
}

function renderDeckStage() {
  const deck = getDeck();
  $("#deckName").textContent = deck.name;
  $("#deckCopy").textContent = deck.description;
  $("#deckCredit").textContent = deck.source;
  $("#deckProvenance").innerHTML = `
    <dt>Artist/source</dt><dd>${escapeHtml(deck.artist)}</dd>
    <dt>Date</dt><dd>${escapeHtml(deck.year)}</dd>
    <dt>License</dt><dd>${escapeHtml(deck.license)}</dd>
    <dt>Reference</dt><dd><a href="${escapeHtml(deck.sourceUrl)}" target="_blank" rel="noreferrer">Open source notes</a></dd>
  `;
  document.body.dataset.deck = deck.id;
}

function drawReading(isDaily) {
  const spread = isDaily ? spreads[0] : getSpread();
  const deck = getDeck();
  const style = getStyle();
  const question = isDaily ? "Card of the day" : $("#questionInput").value.trim();
  const drawn = drawUniqueCards(spread.positions.length, isDaily);
  const reading = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    deckId: deck.id,
    spreadId: spread.id,
    styleId: style.id,
    question,
    cards: drawn.map((card, index) => ({
      cardId: card.id,
      position: spread.positions[index],
      orientation: state.reversals && Math.random() > 0.72 ? "reversed" : "upright",
    })),
  };
  state.currentReading = reading;
  renderReading(reading);
  $("#readingResult").scrollIntoView({ behavior: "smooth", block: "start" });
}

function drawUniqueCards(count, stable) {
  const source = [...cards];
  const result = [];
  let seed = stable ? daySeed() : Math.floor(Math.random() * 999999);
  while (result.length < count && source.length) {
    seed = (seed * 9301 + 49297) % 233280;
    const index = seed % source.length;
    result.push(source.splice(index, 1)[0]);
  }
  return result;
}

function daySeed() {
  const today = new Date();
  return Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`);
}

function renderReading(reading) {
  const deck = decks.find((d) => d.id === reading.deckId);
  const style = styles.find((s) => s.id === reading.styleId);
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

function renderCard(card, deckId = state.deckId, reversed = false) {
  const palette = getCardPalette(card, deckId);
  const imageUrl = getHistoricalImageUrl(card, deckId);
  return `
    <article class="tarot-card ${reversed ? "reversed" : ""}" data-card-id="${card.id}" data-deck="${deckId}" data-arcana="${card.arcana}" data-suit="${card.suitId || "major"}" style="--card-tone: ${palette.tone}; --card-accent: ${palette.accent}; --card-ink: ${palette.ink};" tabindex="0">
      <div class="card-art ${imageUrl ? "has-historical-scan" : ""}">
        ${
          imageUrl
            ? `<img class="historical-card-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(card.name)} historical tarot scan" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.closest('.card-art').classList.add('image-failed')" />`
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
  const fileName = deckId === "rws" ? getRwsCommonsFileName(card) : getMarseilleCommonsFileName(card, deckId);
  if (!fileName) return "";
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=700`;
}

function getMarseilleCommonsFileName(card, deckId) {
  if (deckId !== "marseille" || card.arcana !== "major") return "";
  const majorNumbers = {
    fool: "00",
    magician: "01",
    priestess: "02",
    empress: "03",
    emperor: "04",
    hierophant: "05",
    lovers: "06",
    chariot: "07",
    justice: "08",
    hermit: "09",
    wheel: "10",
    strength: "11",
    hanged: "12",
    death: "13",
    temperance: "14",
    devil: "15",
    tower: "16",
    star: "17",
    moon: "18",
    sun: "19",
    judgement: "20",
    world: "21",
  };
  const number = majorNumbers[card.id];
  return number ? `Jean Dodal Tarot trump ${number}.jpg` : "";
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
  if (deckId === "contrast") {
    return { tone: "#ffffff", accent: "#ffd400", ink: "#000000" };
  }
  if (deckId === "noctis") {
    return { tone: "#46205f", accent: "#d8b15e", ink: "#f5ead2" };
  }
  const marseille = deckId === "marseille";
  const suitPalettes = {
    wands: { tone: marseille ? "#d99b4a" : "#9d433a", accent: "#6b2b22", ink: "#28160f" },
    cups: { tone: marseille ? "#3f80a8" : "#445e78", accent: "#233d5e", ink: "#101923" },
    swords: { tone: marseille ? "#d7c8a1" : "#7b8790", accent: "#33434d", ink: "#15191b" },
    pentacles: { tone: marseille ? "#5e9a66" : "#53745b", accent: "#254b34", ink: "#101b13" },
    major: { tone: marseille ? "#c9483f" : "#6f5576", accent: "#2e2036", ink: "#1e1422" },
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
  const isMarseille = deckId === "marseille";
  const isNoctis = deckId === "noctis";
  const skyMark = moonCards.has(card.id) ? "☾" : sunCards.has(card.id) ? "☀" : "✦";
  const towers = towerCards.has(card.id)
    ? `<span class="scene-tower left"></span><span class="scene-tower right"></span>`
    : `<span class="scene-pillar left"></span><span class="scene-pillar right"></span>`;
  const landscape = isMarseille
    ? `<span class="marseille-vine vine-a"></span><span class="marseille-vine vine-b"></span>`
    : `<span class="scene-mountain mountain-a"></span><span class="scene-mountain mountain-b"></span>`;
  return `
    <div class="major-scene scene-${card.id}">
      <span class="scene-sky">${escapeHtml(isNoctis ? "✶" : skyMark)}</span>
      ${landscape}
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
      <div class="court-scene ${deckId === "marseille" ? "is-marseille" : ""}">
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
    <div class="pip-scene pip-count-${pipNumber} ${deckId === "marseille" ? "is-marseille" : ""}">
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
    spiritual: `${card.name} appears as guidance around ${card.keyword}. In ${position}, listen for the sacred lesson beneath the surface. ${meaning}`,
    practical: `${card.name} points to ${card.keyword}. For ${position}, turn this into one grounded choice: ${meaning}`,
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

function getDeckNote(card, deck) {
  const notes = {
    rws: "Rider-Waite-Smith emphasizes pictorial symbolism, scenic detail, and Pamela Colman Smith's narrative compositions.",
    marseille: "Marseille asks you to read number, suit, color, and arrangement directly; trumps preserve older French titles and visual grammar.",
    contrast: "The high-contrast deck reduces ornament so rank, suit, and keyword stay readable at small sizes.",
    noctis: "Arcana Noctis is a generated gothic study treatment that keeps traditional meanings while using moonlit occult/fantasy styling.",
  };
  return notes[deck.id] || notes.rws;
}

function saveCurrentReading(event) {
  event.preventDefault();
  if (!state.currentReading) return;
  const saved = {
    ...state.currentReading,
    category: $("#journalCategory").value,
    mood: $("#journalMood").value,
    note: $("#journalNote").value.trim(),
  };
  state.journal.unshift(saved);
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
      const spread = spreads.find((s) => s.id === entry.spreadId);
      const deck = decks.find((d) => d.id === entry.deckId);
      const style = styles.find((s) => s.id === entry.styleId);
      return `
        <article class="journal-entry">
          <span class="tag">${escapeHtml(entry.category || "self")} · ${escapeHtml(entry.mood || "clear")}</span>
          <h3>${escapeHtml(entry.question || spread.name)}</h3>
          <p>${new Date(entry.createdAt).toLocaleString()} · ${escapeHtml(deck.name)} · ${escapeHtml(style.name)}</p>
          <div class="mini-cards">
            ${entry.cards
              .map((cardEntry) => {
                const card = cards.find((item) => item.id === cardEntry.cardId);
                return `<span class="mini-card">${escapeHtml(cardEntry.position)}: ${escapeHtml(card.name)}</span>`;
              })
              .join("")}
          </div>
          ${entry.note ? `<p>${escapeHtml(entry.note)}</p>` : ""}
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
    state.journal = [...imported, ...state.journal];
    persistJournal();
    renderJournal();
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
  localStorage.setItem("av.journal", JSON.stringify(state.journal));
}

function getDeck() {
  return decks.find((deck) => deck.id === state.deckId) || decks[0];
}

function getSpread() {
  return spreads.find((spread) => spread.id === state.spreadId) || spreads[0];
}

function getStyle() {
  return styles.find((style) => style.id === state.styleId) || styles[0];
}

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
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
  let installPrompt;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    $("#installButton").hidden = false;
  });
  $("#installButton").addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    $("#installButton").hidden = true;
  });
}

init();
