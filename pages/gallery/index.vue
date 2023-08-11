<template>
  <main>
    <div v-if="loading" class="fog">
      <SpinnerView />
    </div>
    <div v-if="galleries.length" class="gallery-wrapper-styles" :class="loading && 'hidden'">
      <ul class="box-container three-cols gallery gallery-styles">
        <li v-for="(gallery, idx) in galleries" :key="gallery.id" class="box">
          <div class="inner">
            <NuxtLink :to="`/gallery/${gallery.title}`" class="glightbox">
              <nuxt-img
                :src="gallery.src"
                :alt="gallery.alt"
                width="250"
                height="auto"
                loading="lazy"
                preload
                class="art-styles"
                @load="() => { if(idx === galleries.length -1) loading = false }"
              />
              <h4 class="picture-styles">
                {{ gallery.alt }}
              </h4>
            </NuxtLink>
          </div>
        </li>
      </ul>
      <hr>
      <div class="picture-right">
        <div>
          <NuxtLink to="/about">
            <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/artist/vadiy.jpg" alt="Vadiy" />
          </NuxtLink>
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
    <FooterView />
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

<style scoped>
.fog {
  z-index: 10;
}

</style>
