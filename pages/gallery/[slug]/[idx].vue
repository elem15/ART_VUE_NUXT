<template>
  <main>
    <Carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="false">
      <Slide v-for="slide in data" :key="slide.id">
        <div class="carousel__item">
          <nuxt-img :src="slide.href" />
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
          <nuxt-img :src="slide.src" :height="100" />
        </div>
      </Slide>
    </Carousel>
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

// const currentImg = computed(() => galleryItems.value[+idx].href)

const currentSlide = ref(+idx)
const slideTo = (val: number) => {
  currentSlide.value = val
}

const { data, error } = await clientGallery
  .from(slug)
  .select('src, id, title, href, description')

if (data?.length) {
  galleryItems.value = data
} else if (error) {
  showError({ statusCode: 404, statusMessage: error?.message })
}
</script>
