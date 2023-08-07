<template>
  <div class="container">
    <NuxtLayout>
      <HeaderView />
      <NuxtPage />
      <FooterView />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Artist / Художник',
  ogTitle: 'Artist / Художник',
  description: 'Oil painting / Картины маслом / Академия Художеств',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств'
})
</script>
