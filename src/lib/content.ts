/* ============================================================
   MIRZAVA — Content & copy
   ============================================================ */

export const BRAND = {
  name: "Mirzava",
  tagline: "The Sovereign Biryani",
  meaning:
    "From Mirza — the title of princes. A name worn only by what is born of royal kitchens.",
  est: "Est. in the age of emperors",
  promise: "Reigning since the age of emperors",
};

export const NAV = [
  { label: "Heritage", href: "/heritage" },
  { label: "The Craft", href: "/craft" },
  { label: "Collection", href: "/collection" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const HERO_WORDS = ["Royal", "Rare", "Refined", "Revered"];

export const MARQUEE = [
  "Aged Saffron",
  "Sealed Dum",
  "Royal Lineage",
  "Single-Origin Rice",
  "Hand-Pounded Spice",
  "Twenty-One Hours",
  "Silver-Leafed",
  "Slow Fire",
];

export const STATS = [
  { value: "21", label: "Hours of slow craft", suffix: "h" },
  { value: "37", label: "Spices in the royal masala", suffix: "" },
  { value: "1", label: "Pot. One sealing. One reveal.", suffix: "" },
  { value: "0", label: "Compromises ever made", suffix: "" },
];

export const PILLARS = [
  {
    no: "I",
    title: "Of Royal Descent",
    body: "Each grain answers to a recipe guarded through generations of the shahi bawarchikhana — the imperial kitchen — never written, only entrusted.",
  },
  {
    no: "II",
    title: "Sealed in Silence",
    body: "Mirzava is finished under dum — sealed beneath dough and rested over a whisper of fire, so the perfume cannot escape until the crown is broken at your table.",
  },
  {
    no: "III",
    title: "Rarer Than Gold",
    body: "We measure saffron by the gram and patience by the day. Nothing here is made in quantity. It is made in reverence.",
  },
];

export type Variety = {
  name: string;
  title: string;
  origin: string;
  note: string;
  body: string;
  accent: string; // tailwind gradient classes
};

export const COLLECTION: Variety[] = [
  {
    name: "Noor-e-Zaffran",
    title: "The Light of Saffron",
    origin: "Kashmir · Persia",
    note: "Saffron · Rose · Gold Leaf",
    body: "Our sovereign expression. Strands of late-harvest Kashmiri saffron bloom in warm milk, gilding each grain the colour of dawn over a palace dome.",
    accent: "from-saffron/30 via-gold/10 to-transparent",
  },
  {
    name: "Shahi Dum Gosht",
    title: "The Emperor's Reserve",
    origin: "Hyderabad · Awadh",
    note: "Heritage Mutton · Mace · Smoked Ghee",
    body: "Meat aged to surrender, layered between long rice and sealed for the night. A single inhalation tells the whole story of the fire it slept upon.",
    accent: "from-maroon/40 via-gold/10 to-transparent",
  },
  {
    name: "Murgh Mussallam Royale",
    title: "The Crowned Bird",
    origin: "Lucknow",
    note: "Whole Fowl · Almond · Silver Varak",
    body: "A celebration laid whole upon the rice, draped in beaten silver and a gravy enriched until it shines. Ceremony rendered edible.",
    accent: "from-gold/30 via-gold/5 to-transparent",
  },
  {
    name: "Subz Bahaar",
    title: "The Garden in Spring",
    origin: "The Royal Gardens",
    note: "Heirloom Vegetables · Saffron · Kewra",
    body: "Proof that restraint is its own luxury. Garden treasures and dried fruit, perfumed with kewra, for those who reign without crown.",
    accent: "from-emerald-royal/40 via-gold/10 to-transparent",
  },
  {
    name: "Moti Pulao",
    title: "A String of Pearls",
    origin: "The Mughal Court",
    note: "Pearl Dumplings · Cardamom · Cream",
    body: "The court's most theatrical dish, reborn — delicate pearls nestled in rice scented with green cardamom and a breath of cream.",
    accent: "from-cream/20 via-gold/10 to-transparent",
  },
  {
    name: "Sikandari Raan",
    title: "The Conqueror's Leg",
    origin: "The Frontier",
    note: "Slow Roast · Hung Yoghurt · Coal",
    body: "A whole leg marinated for two days, charred over coal and crowned upon the rice. Named for a conqueror, fit for one.",
    accent: "from-saffron/30 via-maroon/20 to-transparent",
  },
];

export const TIMELINE = [
  {
    era: "The Origin",
    title: "Born of the Imperial Kitchen",
    body: "In the shahi bawarchikhana, biryani was not a meal but a measure of a court's grandeur. Mirzava carries that exacting lineage.",
  },
  {
    era: "The Inheritance",
    title: "A Recipe Never Written",
    body: "Entrusted from master to disciple across generations — held in the hands, never the ledger. We keep it the same way.",
  },
  {
    era: "The Revival",
    title: "Saffron, Reawakened",
    body: "We sought the last keepers of the royal method and rebuilt the kitchen around their patience, not our impatience.",
  },
  {
    era: "The Present",
    title: "A Sovereign, Restored",
    body: "Today Mirzava is served as it always should have been — rarely, reverently, and only when it is perfect.",
  },
];

export const CRAFT_STEPS = [
  {
    step: "01",
    title: "The Selection",
    body: "Single-origin long-grain rice, aged a full year so each grain stays sovereign and separate. Saffron weighed by the gram.",
  },
  {
    step: "02",
    title: "The Pounding",
    body: "Thirty-seven spices, whole and hand-pounded at dawn on stone. We grind nothing we cannot smell awaken.",
  },
  {
    step: "03",
    title: "The Marination",
    body: "Meat rests in hung yoghurt and royal masala for a day and a night, until tenderness is no longer a question.",
  },
  {
    step: "04",
    title: "The Layering",
    body: "Rice and meat are layered like the stones of a fort — saffron milk, fried onion, mint, ghee — each stratum deliberate.",
  },
  {
    step: "05",
    title: "The Sealing",
    body: "The pot is closed with dough and set under dum. For hours nothing is seen, only trusted. The fire is kept a whisper.",
  },
  {
    step: "06",
    title: "The Reveal",
    body: "The seal is broken only at your table. The first rising of perfume is the dish announcing itself. This moment is the point of all of it.",
  },
];

export const EXPERIENCE = [
  {
    title: "The Arrival",
    body: "You are not seated. You are received. Brass, candle and the low gleam of gold set the register before a word is spoken.",
  },
  {
    title: "The Procession",
    body: "The sealed pot is carried, not wheeled — crown intact — and set before you still asleep beneath its dough.",
  },
  {
    title: "The Breaking",
    body: "At a nod, the seal is broken tableside. The perfume rises first, the steam second, the silence third.",
  },
  {
    title: "The Reign",
    body: "What follows is unhurried. Mirzava is not consumed. It is presided over.",
  },
];

export const TESTIMONIES = [
  {
    quote:
      "I have eaten in the houses of kings. I had forgotten food could still feel like an audience with one.",
    by: "A Patron of Forty Years",
  },
  {
    quote:
      "They broke the seal and the entire room went quiet. I understood, finally, what restraint tastes like.",
    by: "Guest at the First Table",
  },
  {
    quote:
      "It does not ask to be liked. It expects to be remembered. It is.",
    by: "A Visiting Chronicler",
  },
];

export const CONTACT = {
  invite:
    "Mirzava keeps a single pavilion in the old quarter, beside the Charminar. No menu to browse, no ledger to sign — only a door opened at dusk for those who come seeking the sovereign.",
  pavilion: "The Pavilion",
  address: ["The Gilded Courtyard", "Old Quarter · By the Charminar", "Hyderabad, India"],
  hours: ["Tuesday — Sunday", "From sundown, late into the night", "No reservations — only arrivals"],
  phone: "+91 00000 00000",
  email: "table@mirzava.royal",
};

export const FOOTER_NOTE =
  "Mirzava is a work of devotion, prepared in limited number. We do not sell convenience. We keep a standard.";
