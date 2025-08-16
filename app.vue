<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <BackgroundView />
    <ThemeView />
    <HeaderView />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Artist / Художник',
  ogTitle: 'Artist / Художник',
  description: 'Oil painting / Картины маслом / Академия Художеств',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств',
  ogImage: 'https://www.artwalter.site/og-image.jpg', // Add absolute URL to your image
  ogImageWidth: 1200, // Recommended width
  ogImageHeight: 630, // Recommended height
  ogImageAlt: 'Artist Oil Painting Preview', // Optional: alt text for accessibility
  ogType: 'website', // Optional: specify content type
  ogUrl: 'https://www.artwalter.site', // Optional: site URL
  ogLocale: 'en_US', // Optional: adjust for your primary language
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
