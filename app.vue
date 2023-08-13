<template>
  <NuxtLayout>
    <BackgroundView />
    <NuxtLoadingIndicator />
    <HeaderView />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Artist / Художник',
  ogTitle: 'Artist / Художник',
  description: 'Oil painting / Картины маслом / Академия Художеств',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.7s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
