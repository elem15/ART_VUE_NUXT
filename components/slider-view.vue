<!-- eslint-disable vue/html-self-closing -->
<template>
  <main>
    <SpinnerView v-if="loading" />
    <Swiper
      :class="loading && 'hidden'"
      :modules="[SwiperAutoplay, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :speed="4000"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
      :fade-effect="{
        crossFade:
          true,
      }"
    >
      <SwiperSlide v-for="(slide, idx) in slides" :key="slide.id">
        <nuxt-img
          :src="slide.src"
          :alt="slide.alt"
          quality="90"
          @load="() => { if(idx === slides.length - 1) loading = false }"
        />
      </SwiperSlide>
    </Swiper>
    <FooterView :loading="loading" />
  </main>
</template>

<script setup lang="ts">
import { MainDB } from '../supabase/database.types'
const client = useSupabaseClient<MainDB>()
const slides = ref<SliderPicture[]>([])
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const { data, error } = await client
  .from('main')
  .select('alt, src, id')

if (data?.length) {
  slides.value = data
} else if (error) {
  showError({ statusCode: 404, statusMessage: error.message })
}
</script>

<style scoped>
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
  transition: all 0.7s;
  width: 600px;
}

.swiper-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

img {
  box-shadow: -5px 5px 10px lightgray;
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
