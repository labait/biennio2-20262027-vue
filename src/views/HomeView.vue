<script setup>
import Item from '../components/Item.vue'
const items = [
  { id: 1, favorite: true, title: 'Project 1', description: 'Description of Project 1', image: 'https://picsum.photos/800/600?v=1' },
  { id: 2, favorite: false, title: 'Project 2', description: 'Description of Project 2', image: 'https://picsum.photos/800/600?v=2' },
  { id: 3, favorite: true, title: 'Project 3', description: 'Description of Project 3', image: 'https://picsum.photos/800/600?v=3' },
  { id: 4, favorite: false, title: 'Project 4', description: 'Description of Project 4', image: 'https://picsum.photos/800/600' }
]
</script>


<template>
  <h1 class="text-4xl font-bold mb-8">Home</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </div>

</template>