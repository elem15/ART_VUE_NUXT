<template>
  <main class="modal">
    <SpinnerView v-if="loading" />
    <div :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none', transition: 'all 0.7s'}">
      <div>
        <button class="back" @click="router.back()">
          ↩
        </button>
      </div>
      <Carousel
        id="gallery"
        v-model="currentSlide"
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="5000"
        :transition="1000"
        :pause-autoplay-on-hover="true"
        :style="{cursor: draggable ? 'grab' : ''}"
        @click="draggable = true"
        @mousedown="draggable = true"
        @mouseup="draggable = false"
      >
        <Slide v-for="(slide, index) in data" :key="slide.id">
          <figure class="carousel__item__large">
            <nuxt-img
              :src="slide.href"
              class="carousel__item__img-large"
              :alt="slide.title"
              :quality="70"
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
        :style="{cursor: draggable ? 'grabbing' : 'grab'}"
        @click="draggable = true"
        @mousedown="draggable = true"
        @mouseup="draggable = false"
      >
        <Slide v-for="slide in data" :key="slide.id">
          <div class="carousel__item" @click="slideTo(currentSlide - 1)">
            <nuxt-img :src="slide.src" class="carousel__item__img-small" :alt="slide.title" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import { GalleryItemDB } from '~/supabase/database.types'

import 'vue3-carousel/dist/carousel.css'

const router = useRouter()
const route = useRoute()

const { slug, idx } = route.params as { slug: GalleryName, idx: string; }

useSeoMeta({
  title: 'Artist / Художник / ' + slug.toUpperCase(),
  ogTitle: 'Artist / Художник / ' + slug.toUpperCase(),
  description: 'Oil painting / Картины маслом / Академия Художеств / ' + slug.toUpperCase(),
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств / ' + slug.toUpperCase()
})
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

const draggable = ref(false)

</script>

<style>
.modal {
  background-color: #cecece;
  z-index: 100;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.carousel {
  cursor: url("/img/pause-button.png"), auto;
}

.carousel__item__large {
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

.back {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  font-size: 2.3rem;
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

</style>
