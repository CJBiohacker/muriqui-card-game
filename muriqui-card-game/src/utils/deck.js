export const createDeck = () => {
  const suits = ["♠️", "♣️", "♦️", "♥️"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const deck = [];

  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ suit, rank });
    });
  });

  return deck;
};

export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const drawCards = (deck, numCards) => {
  return deck.splice(0, numCards);
};

export const createApeCard = () => {
  const apes = [
    "Muriqui",
    "Gorilla",
    "Chimpanzee",
    "Orangutan",
    "Gibbon",
    "Bonobo",
  ];

  const ape = () => apes[Math.floor(Math.random() * apes.length)];

  return ape;
};
