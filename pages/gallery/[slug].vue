<template>
  <main>
    <SpinnerView v-if="loading || pending" />
    <div class="gallery-wrapper" :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none'}">
      <div class="picture">
        <div class="gallery-wrapper-picture">
          <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/spring-alley.jpg" alt="Дорога в лесу" :quality="50" />
        </div>
        <div class="picture-description">
          <h2 class="picture-description-header">
            ПЕЙЗАЖИ
          </h2>
          <p class="picture-description-article">
            {{ collectionDescription }}
          </p>
        </div>
      </div>
      <ul v-if="galleryItems.length" class="box-container gallery">
        <li v-for="(item, idx) in galleryItems" :key="item.id" class="box">
          <div class="inner">
            <a
              :href="item.href"
              class="glightbox2"
            >
              <nuxt-img
                :src="item.src"
                :alt="item.title"
                class="preview"
                @load="() => { if(idx === galleries.length -1) loading = false }"
              /></a>
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
const params = route.params.slug as Params

const loading = ref(true)

// onMounted(() => {
//   setTimeout(() => {
//     loading.value = false
//   }, 500)
// })

const client = useSupabaseClient<GalleryDB>()

const galleries: Ref<Gallery[]> = ref([])
const collectionDescription = ref('')
const { data, pending, error } = await useAsyncData(
  'galleries',
  async () => await client
    .from('galleries')
    .select('src, alt, id, title, description')
    .eq('title', params)
)
if (data?.value?.data?.length) {
  galleries.value = data.value?.data
  collectionDescription.value = galleries.value[0].description as string
} else if (error) {
  showError({ statusCode: 404, statusMessage: 'Data is unavailable' })
}

const clientGallery = useSupabaseClient<GalleryItemDB>()
const galleryItems = ref<GalleryItem[]>([])

const { data: items, error: galleryError } = await clientGallery
  .from(params)
  .select('src, id, title, href, description')
console.log(items)

if (items?.length) {
  galleryItems.value = items
} else if (error) {
  showError({ statusCode: 404, statusMessage: galleryError?.message })
}

</script>
