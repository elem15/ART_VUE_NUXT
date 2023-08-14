<template>
  <main>
    <SpinnerView v-if="loading" />
    <div :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none', transition: 'all 0.7s'}">
      <Carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="true">
        <Slide v-for="(slide, index) in data" :key="slide.id">
          <div class="carousel__item">
            <nuxt-img
              :src="slide.href"
              class="carousel__item-large"
              @load="() => {
                if(data && index === data.length - 1)
                  onLoadEvent()
              }"
            />
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        ref="carousel"
        v-model="currentSlide"
        :items-to-show="7"
        :wrap-around="true"
      >
        <Slide v-for="slide in data" :key="slide.id">
          <div class="carousel__item" @click="slideTo(currentSlide - 1)">
            <nuxt-img :src="slide.src" class="carousel__item-small" />
          </div>
        </Slide>
      </Carousel>
      <FooterView :loading="loading" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { GalleryItemDB } from '~/supabase/database.types'

import 'vue3-carousel/dist/carousel.css'

const route = useRoute()

const { slug, idx } = route.params as {slug: GalleryName, idx: string}
const clientGallery = useSupabaseClient<GalleryItemDB>()
const galleryItems = ref<GalleryItem[]>([])

const currentSlide = ref(+idx)
const slideTo = (val: number) => {
  currentSlide.value = val
}

const loading = ref(true)

const onLoadEvent = () => {
  setTimeout(() => { loading.value = false }, 500)
}
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})
const { data, error } = await clientGallery
  .from(slug)
  .select('src, id, title, href, description')

if (data?.length) {
  galleryItems.value = data
} else if (error) {
  showError({ statusCode: 404, statusMessage: error?.message })
}

</script>

<style scoped>
.carousel__item-large {
  height: 70vh;
}
.carousel__item-small {
  max-width: 12vw;
  max-height: 100px;
}
@media screen and (max-width: 1024px) {
  .carousel__item-large {
    width: 95vw;
    height: auto;
  }
  .carousel__slide {

  }
}
</style>
