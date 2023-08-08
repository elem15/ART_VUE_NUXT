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

const articles = ref<Article[]>([])
const errors = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    const { data, error } = await client
      .from('articles')
      .select('title, content, id')
    if (data?.length) {
      articles.value = data
    } else if (error) {
      errors.value = error.message
      throw new Error(error.message)
    }
  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
@keyframes moving {
    100% {transform: rotate(360deg);}
}
.swiper-lazy-preloader {
  margin-top: 30px;
  animation: moving 1s infinite linear;
}
</style>
