<script setup>
  const items = [
    { title: 'Project 1', img: 'https://picsum.photos/400/300?v=1' },
    { title: 'Project 2', img: 'https://picsum.photos/400/300?v=2' },
    { title: 'Project 4', img: 'https://picsum.photos/400/300?v=3' },
    { title: 'Project 5', img: 'https://picsum.photos/400/300?v=4' }
  ]
</script>


<template>
  <section id="portfolio" class="flex flex-col mt-4">
    <h2 class="text-xl font-bold mb-2">
      Portfolio
    </h2>
    <p class="mb-2">
      Here are some of my recent projects.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="item in items" :key="item.title" class="bg-gray-200 p-4 rounded">
        {{ item.title }}
        <img :src="item.img" :alt="item.title" class="mt-2">
      </div>

    </div>
  </section>
</template>

<style scoped>
h2 {
  color: red;
}
</style>