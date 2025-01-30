<template>
    <div>
      <button @click="scoreHand" :disabled="scoringChances === 0">Score Hand</button>
      <button @click="discardSelected" :disabled="discards === 0">Discard Selected</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    scoringChances: {
      type: Number,
      required: true,
    },
    discards: {
      type: Number,
      required: true,
    },
  });
  
  const emit = defineEmits(['score-hand', 'discard-cards']);
  
  const selectedCards = ref([]);
  
  const scoreHand = () => {
    emit('score-hand');
  };
  
  const discardSelected = () => {
    emit('discard-cards', selectedCards.value);
    selectedCards.value = [];
  };
  </script>