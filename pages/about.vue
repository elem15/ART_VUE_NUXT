<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/html-closing-bracket-spacing -->
<template>
  <main>
    <SpinnerView v-if="pending || loading" />
    <div v-else class="gallery-wrapper-styles" >
      <div class="picture-left">
        <div>
          <nuxt-img
            loading="lazy"
            src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/artist/vadiy.jpg"
            alt="Vadiy"
            @load="loading = false"
          />
        </div>
        <div class="picture-description">
          <h3 class="picture-description-header">
            о художнике
          </h3>
          <p class="picture-description-article" />
        </div>
      </div>
      <SpinnerView v-if="pending || loading"/>
      <article v-else class="article">
        <div v-for="(about, idx) in aboutInfo" :key="about.id" class="accordion">
          <input type="radio" name="select" class="accordion-select" :checked="idx === 0">
          <div class="accordion-title">
            <h3>{{ about.title }}</h3>
          </div>
          <div class="accordion-content" v-html="about.content" />
        </div>
      </article>
    </div>
    <FooterView :loading="pending" />
  </main>
</template>

<script setup lang="ts">
import { ArticlesDB } from '~/supabase/database.types'
useSeoMeta({
  title: 'Artist / Художник / Биография',
  ogTitle: 'Artist / Художник / Биография',
  description: 'Oil painting / Картины маслом / Академия Художеств / Биография',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств / Биография'
})

const client = useSupabaseClient<ArticlesDB>()

const aboutInfo: Ref<Article[]> = ref([])

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
const { data, pending, error } = await useAsyncData(
  'about',
  async () => await client
    .from('about')
    .select('title, content, id'))

if (data?.value?.data?.length) {
  aboutInfo.value = data.value?.data
} else if (error) {
  showError({ statusCode: 404, statusMessage: 'Data is unavailable' })
}
</script>
