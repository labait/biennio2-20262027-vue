<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="item">
    <img :src="item.image" :alt="item.title" class="w-full h-auto grayscale hover:grayscale-0 cursor-pointer rounded-lg mb-2" />
    <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
    <p>{{ item.description }}</p>
  </div>
</template> 