<!-- eslint-disable vue/html-self-closing -->
<template>
  <main>
    <div class="flex-1">
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
            quality="70"
            @load="() => { if(idx === slides.length - 1) loading = false }"
          />
        </SwiperSlide>
      </Swiper>
    </div>
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
main {
  display: flex;
  flex-direction: column;
  min-height: 87vh;
}
.flex-1 {
  flex-grow: 1;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 60vw;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}

.swiper {
  transition: all 0.7s;
  width: auto;
  height: fit-content;
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

  .swiper-slide {
    width: 95%;
    margin: 1rem auto;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  margin: 0 auto;
  width: 30%;
  box-shadow: -10px 10px 20px -5px rgb(93, 65, 65);
  border-radius: 5px;
}

@media (max-width: 1400px) {
  .swiper-slide img {
    width: 40%;
  }
}

@media (max-width: 1024px) {
  .swiper-slide img {
    width: 50%;
  }
}
@media (max-width: 800px) {
  .swiper-slide img {
    width: 70%;
  }
}
@media (max-width: 575px) {
  .swiper-slide img {
    width: 95%;
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
