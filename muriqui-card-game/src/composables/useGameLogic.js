import { ref, computed } from 'vue';
import { createDeck, shuffleDeck, drawCards } from '../utils/deck';

export const useGameLogic = () => {
  const deck = ref(shuffleDeck(createDeck()));
  const hand = ref(drawCards(deck.value, 10));
  const score = ref(0);
  const scoringChances = ref(4);
  const discards = ref(4);
  const targetScore = 10;

  const evaluateHand = (cards) => {
    // Implement poker hand evaluation logic here
    // For now, return a random score for testing
    return Math.floor(Math.random() * 9) + 1;
  };

  const scoreHand = () => {
    if (scoringChances.value > 0) {
      const points = evaluateHand(hand.value);
      score.value += points;
      scoringChances.value--;
      if (score.value >= targetScore) {
        alert('Congratulations! You won!');
        score.value = 0;
        scoringChances.value = 4;
        discards.value = 4;
      }
    }
  };

  const discardCards = (indices) => {
    if (discards.value > 0) {
      indices.forEach(index => {
        hand.value.splice(index, 1);
      });
      hand.value.push(...drawCards(deck.value, indices.length));
      discards.value--;
    }
  };

  return {
    hand,
    score,
    scoringChances,
    discards,
    scoreHand,
    discardCards,
  };
};