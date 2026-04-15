
let currentCharacter = null;

const quotes = {
  komatsu: [
    "I feel like I’m always chasing something I can’t reach…",
    "Today felt warm, like maybe things will be okay.",
    "I wonder if love is supposed to hurt this much.",
    "I keep hoping for a future where we’re all together again.",
    "Even small moments with you feel like treasures."
  ],

  osaki: [
    "I don’t need promises… just someone who stays.",
    "Music is the only place where I don’t feel alone.",
    "I act strong, but I’m always afraid of losing people.",
    "If I disappear, would you even notice?",
    "I sing because words alone aren’t enough."
  ]
};

// 🎀 choose character
function setCharacter(character) {
  currentCharacter = character;

  const quote = document.getElementById("quote");

  if (character === "komatsu") {
    quote.innerText = "🌸 Nana Komatsu diary selected...";
  } else {
    quote.innerText = "🖤 Nana Osaki diary selected...";
  }
}

// 💌 generate quote
function newQuote() {
  const quoteEl = document.getElementById("quote");

  if (!currentCharacter) {
    quoteEl.innerText = "Please select a character first 💖";
    return;
  }

  const pool = quotes[currentCharacter];
  const random = pool[Math.floor(Math.random() * pool.length)];

  quoteEl.innerText = random;
}
