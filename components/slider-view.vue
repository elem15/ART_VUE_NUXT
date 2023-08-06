<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectFade]"
    :slides-per-view="1"
    :loop="true"
    :effect="'fade'"
    :speed="2000"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
    :fade-effect="{
      crossFade:
        true,
    }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide">
      <nuxt-img :src="slide.src" :alt="slide.alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const slides = [
  { id: 1, src: '/painting/large/museum.jpg', alt: 'Музей' },
  { id: 2, src: '/landscape/large/water-lilies.jpg', alt: 'Кувшинки' },
  { id: 3, src: '/landscape/large/well-of-life.jpg', alt: 'Колодец' },
  { id: 4, src: '/landscape/large/spring-alley.jpg', alt: 'Дорога в лесу' },
  { id: 5, src: '/painting/large/rescuers.jpg', alt: 'Спасение' },
  { id: 6, src: '/painting/large/old-friend.jpg', alt: 'Старый друг' },
  { id: 7, src: '/still-life/large/stil-life-with-th-head-o-a-plaste-horse.jpg', alt: 'Гипсовая голова лошади' }
]
</script>
<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 70vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 70vh;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
