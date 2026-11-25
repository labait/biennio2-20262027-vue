<script setup>
import { inject } from 'vue'
import Item from '../components/Item.vue'
const items = inject('items').filter(item => item.favorite)
</script>


<template>
  <h1 class="text-4xl font-bold mb-8">Home</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Item v-for="item in items" :key="item.id" :item="item" />
  </div>

</template>