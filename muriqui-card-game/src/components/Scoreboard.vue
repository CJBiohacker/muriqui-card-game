<template>
    <div>
      <p>Score: {{ score }}</p>
      <p>Scoring Chances: {{ scoringChances }}</p>
      <p>Discards: {{ discards }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    score: {
      type: Number,
      required: true,
    },
    scoringChances: {
      type: Number,
      required: true,
    },
    discards: {
      type: Number,
      required: true,
    },
  });
  </script>