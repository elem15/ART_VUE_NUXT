<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <div v-if="errors">
      Data loading error
    </div>
    <div v-if="loading" class="swiper-lazy-preloader" />
    <article v-else class="article">
      <div v-for="(article, idx) in articles" :key="article.id" class="accordion">
        <input type="radio" name="select" class="accordion-select" :checked="idx === 0">
        <div class="accordion-title">
          <h3>{{ article.title }}</h3>
        </div>
        <div class="accordion-content" v-html="article.content" />
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ArticlesDB } from '~/supabase/database.types'
useSeoMeta({
  title: 'Artist / Художник / Статьи',
  ogTitle: 'Artist / Художник / Статьи',
  description: 'Oil painting / Картины маслом / Академия Художеств / Статьи',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств / Статьи'
})

const client = useSupabaseClient<ArticlesDB>()

const articles: Ref<Article[]> = ref([])
const errors = ref('')
const loading = ref(true)
try {
  const { data, error } = await useAsyncData(
    'articles',
    async () => await client
      .from('articles')
      .select('title, content, id'))
  if (data?.value?.data?.length) {
    articles.value = data.value?.data
  } else if (error && error.value) {
    errors.value = error.value.message
    throw new Error(error.value.message)
  }
} catch (error) {
  alert(error)
} finally {
  loading.value = false
}
</script>
