<template>
    <div class="card">
        <span class="rank">{{ card.rank }}</span>
        <span class="suit">{{ card.suit }}</span>
    </div>
</template>

<script setup>
defineProps({
    card: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.card {
    border: 1px solid #000;
    padding: 10px;
    margin: 5px;
    display: inline-block;
    text-align: center;
}
</style>
