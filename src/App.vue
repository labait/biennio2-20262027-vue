<script setup>

import { ref, provide } from 'vue'


import Headline from './components/Headline.vue'

const items = [
  { id: 1, favorite: true, title: 'Project 1', description: 'Description of Project 1', image: 'https://picsum.photos/800/600?v=1' },
  { id: 2, favorite: false, title: 'Project 2', description: 'Description of Project 2', image: 'https://picsum.photos/800/600?v=2' },
  { id: 3, favorite: true, title: 'Project 3', description: 'Description of Project 3', image: 'https://picsum.photos/800/600?v=3' },
  { id: 4, favorite: false, title: 'Project 4', description: 'Description of Project 4', image: 'https://picsum.photos/800/600' }
]
provide('items', items)

</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-4">
    <RouterLink to="/">
      <Headline />
    </RouterLink>
    <nav class="mb-8">
      <RouterLink to="/portfolio" class="underline hover:no-underline">Portfolio</RouterLink>
    </nav>
    <RouterView />
  </main>
</template>
