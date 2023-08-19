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
                @load="() => { if(idx === galleries.length -1) onLoadEvent() }"
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
    <FooterView :loading="loading" />
  </main>
</template>

<script setup lang="ts">
import { GalleryDB } from '../../supabase/database.types'

useSeoMeta({
  title: 'Artist / Художник / Галерея',
  ogTitle: 'Artist / Художник / Галерея',
  description: 'Oil painting / Картины маслом / Академия Художеств / Галерея',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств / Галерея'
})

const client = useSupabaseClient<GalleryDB>()
const galleries = ref<Gallery[]>([])
const loading = ref(true)

const onLoadEvent = () => {
  setTimeout(() => { loading.value = false }, 500)
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})

const { data, error } = await client
  .from('galleries')
  .select('alt, src, id, title')

if (data?.length) {
  galleries.value = data
} else if (error) {
  showError({ statusCode: 404, statusMessage: error.message })
}
</script>

<style>
.fog {
  z-index: 10;
}

.gallery img {
  box-shadow: -10px 10px 20px -5px rgb(93, 65, 65);
  border-radius: 5px;
}

</style>
