<template>
  <main>
    <SpinnerView v-if="loading" />
    <div :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none', transition: 'all 0.7s'}">
      <Carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="true">
        <Slide v-for="(slide, index) in data" :key="slide.id">
          <figure class="carousel__item__large">
            <nuxt-img
              :src="slide.href"
              class="carousel__item__img-large"
              :alt="slide.title"
              @load="() => {
                if(data && index === data.length - 1)
                  onLoadEvent()
              }"
            />
            <figcaption class="carousel__item__text-large">
              {{ slide.description }}
            </figcaption>
          </figure>
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
            <nuxt-img :src="slide.src" class="carousel__item__img-small" :alt="slide.title" />
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
  .carousel__item__large {
    /* background-color: aliceblue; */
    width: fit-content;
    padding-bottom: 2rem;
  }
.carousel__item__img-large {
  height: 70vh;
}
.carousel__item__img-small {
  max-width: 12vw;
  max-height: 100px;
}
@media screen and (max-width: 1024px) {
  .carousel__item__img-large {
    width: 95vw;
    height: auto;
  }
}
.carousel__item__text-large {
  margin: 0 auto;
  max-width: 60%;
}
@media screen and (max-width: 480px) {
  .carousel__item__text-large {
  margin: 0 auto;
  max-width: 90%;
}
}
</style>
