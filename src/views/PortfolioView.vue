<script setup>
import { inject } from 'vue'
import Item from '../components/Item.vue'

const items = inject('items')
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-8">Portfolio</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </main>
</template>