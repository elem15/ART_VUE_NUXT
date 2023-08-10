<template>
  <main>
    <div v-if="loading" class="swiper-lazy-preloader" />
    <div v-if="galleries.length" class="gallery-wrapper-styles">
      <ul class="box-container three-cols gallery gallery-styles">
        <li v-for="gallery in galleries" :key="gallery.id" class="box">
          <div class="inner">
            <RouterLink :to="`/gallery/${gallery.title}`" class="glightbox">
              <nuxt-img
                :src="gallery.src"
                :alt="gallery.alt"
                loading="lazy"
                preload
                class="art-styles"
                @load="loading = false"
              />
              <h4 class="picture-styles">
                {{ gallery.alt }}
              </h4>
            </RouterLink>
          </div>
        </li>
      </ul>
      <hr>
      <div class="picture-right">
        <div>
          <RouterLink to="/about">
            <img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/artist/vadiy.jpg" alt="Vadiy">
          </RouterLink>
        </div>
        <div class="picture-description">
          <h3 class="picture-description-header">
            <a href="about-artist.html">о художнике</a>
          </h3>
          <p class="picture-description-article">
            Описание работ
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { GalleryDB } from '../../supabase/database.types'

const client = useSupabaseClient<GalleryDB>()
const galleries = ref<Gallery[]>([])
const loading = ref(true)

const { data, error } = await client
  .from('galleries')
  .select('alt, src, id, title')

if (data?.length) {
  galleries.value = data
} else if (error) {
  showError({ statusCode: 404, statusMessage: error.message })
}
</script>
