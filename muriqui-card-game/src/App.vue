<template>
  <div>
    <h1>Muriqui Cards</h1>
    <div class="hand">
      <Card
        v-for="(card, index) in hand"
        :key="index"
        :card="card"
        @click="toggleSelect(index)"
        :class="{ selected: selectedCards.includes(index) }"
      />
    </div>
    <Scoreboard :score="score" :scoringChances="scoringChances" :discards="discards" />
    <GameControls
      @score-hand="scoreHand"
      @discard-cards="discardCards"
      :scoringChances="scoringChances"
      :discards="discards"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';
import GameControls from './components/GameControls.vue';
import Scoreboard from './components/Scoreboard.vue';
import { useGameLogic } from './composables/useGameLogic';

const { hand, score, scoringChances, discards, scoreHand, discardCards } = useGameLogic();
const selectedCards = ref([]);

const toggleSelect = (index) => {
  if (selectedCards.value.includes(index)) {
    selectedCards.value = selectedCards.value.filter(i => i !== index);
  } else {
    selectedCards.value.push(index);
  }
};
</script>

<style>
.hand {
  display: flex;
  flex-wrap: wrap;
}
.selected {
  border: 2px solid red;
}
</style>