<!-- eslint-disable vue/html-self-closing -->
<template>
  <div v-if="loading" class="swiper-lazy-preloader"></div>
  <Swiper
    v-else
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
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <nuxt-img :src="slide.src" :alt="slide.alt" loading="lazy" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const slides = [
  { id: '1', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/museum.jpg', alt: 'Музей' },
  { id: '2', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/water-lilies.jpg', alt: 'Кувшинки' },
  { id: '3', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/water-lilies.jpg', alt: 'Колодец' },
  { id: '4', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/well-of-life.jpg', alt: 'Дорога в лесу' },
  { id: '5', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/rescuers.jpg', alt: 'Спасение' },
  { id: '6', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/old-friend.jpg', alt: 'Старый друг' },
  { id: '7', src: 'https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/slider/stil-life-with-th-head-o-a-plaste-horse.jpg', alt: 'Гипсовая голова лошади' }
]
const loading = ref(true)
onMounted(() => setTimeout(() => { loading.value = false }, 200))
</script>
<style>
@keyframes moving {
    100% {transform: rotate(-360deg);}
}
.swiper-lazy-preloader {
  animation: moving 1s infinite linear;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 70vh;
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

.swiper {
  width: 600px;
}

.swiper-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

@media (max-width: 575px) {
  .swiper-container {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .swiper {
    width: 350px;
  }

  .swiper-slide {
    width: 350px;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 600px;
}

.swiper-slide img {
  display: block;
  width: 80%;
  margin: 0 auto
}

@media (max-width: 575px) {
  .swiper-slide img {
    width: 100%;

  }
}

div.swiper-button-prev,
div.swiper-button-next {
  top: 40%;
  color: teal;
}

@media (max-width: 575px) {

  div.swiper-button-prev,
  div.swiper-button-next {
    display: none;
  }
}
</style>
