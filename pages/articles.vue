<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <SpinnerView v-if="pending || loading" />
    <article class="article" :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none'}">
      <div v-for="(article, idx) in articles" :key="article.id" class="accordion">
        <input type="radio" name="select" class="accordion-select" :checked="idx === 0">
        <div class="accordion-title">
          <h3>{{ article.title }}</h3>
        </div>
        <div class="accordion-content" v-html="article.content" />
      </div>
    </article>
    <FooterView :loading="loading" />
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

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 300)
})

const { data, pending, error } = await useAsyncData(
  'articles',
  async () => await client
    .from('articles')
    .select('title, content, id'))

if (data?.value?.data?.length) {
  articles.value = data.value?.data
} else if (error) {
  showError({ statusCode: 404, statusMessage: 'Data is unavailable' })
}
</script>
