<template>
  <div class="flex flex-row-reverse bg-gray-800 p-4 rounded-lg shadow-lg items-center gap-x-2">
    <svg :d="iconPath" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14"></svg>
    <div class="flex-1 flex flex-col">
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <p class="text-3xl font-bold">${{ amount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalCard',
  props: {
    title: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    iconPath: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
