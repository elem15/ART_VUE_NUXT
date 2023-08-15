<template>
  <main>
    <SpinnerView v-if="loading || pending" />
    <div class="gallery-wrapper" :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none'}">
      <div class="picture">
        <div class="gallery-wrapper-picture">
          <nuxt-img :src="collection?.src" alt="Дорога в лесу" :quality="50" />
        </div>
        <div class="picture-description">
          <h2 class="picture-description-header">
            {{ collection?.alt }}
          </h2>
          <p class="picture-description-article">
            {{ collection?.description }}
          </p>
        </div>
      </div>
      <ul v-if="galleryItems.length" class="box-container gallery">
        <li v-for="(item, idx) in galleryItems" :key="item.id" class="box">
          <div class="inner">
            <NuxtLink
              :to="`/gallery/${params}/${idx}`"
              class="glightbox2"
            >
              <nuxt-img
                :src="item.src"
                :alt="item.description"
                class="preview"
                @load="() => { if(idx === galleryItems.length -1) onLoadEvent() }"
              />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
    <FooterView :loading="loading" />
  </main>
</template>

<script setup lang="ts">
import { GalleryDB, GalleryItemDB } from 'supabase/database.types'

const route = useRoute()
const params = route.params.slug as GalleryName

const loading = ref(true)

const onLoadEvent = () => {
  setTimeout(() => { loading.value = false }, 500)
}
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000)
})

const client = useSupabaseClient<GalleryDB>()

const collection = ref<Gallery>()
const { data, pending, error } = await useAsyncData(
  'galleries',
  async () => await client
    .from('galleries')
    .select('src, alt, id, title, description')
    .eq('title', params)
)
if (data?.value?.data?.length) {
  collection.value = data.value?.data[0]
} else if (error) {
  showError({ statusCode: 404, statusMessage: 'Data is unavailable' })
}

const clientGallery = useSupabaseClient<GalleryItemDB>()
const galleryItems = ref<GalleryItem[]>([])

const { data: items, error: galleryError } = await clientGallery
  .from(params)
  .select('src, id, title, href, description')
if (items?.length) {
  galleryItems.value = items
} else if (galleryError) {
  showError({ statusCode: 404, statusMessage: galleryError?.message })
}

</script>
