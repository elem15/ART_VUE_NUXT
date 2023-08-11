<template>
  <main class="about" :class="loading && 'hidden'">
    <div>
      <div class="picture-left">
        <div class="contacts">
          <h3>
            КОНТАКТЫ
          </h3>
          <h2>e-mail: <a href="mailto:walter.tanz.mit.mir@gmail.com">walter.tanz.mit.mir@gmail.com</a></h2>

          <h2>phone: <a href="tel:+7-981-775-37-48">+7-981-775-37-48</a></h2>

          <hr>
          <nuxt-img loading="lazy" src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/artist/vadiy.jpg" alt="Vadiy" />
        </div>
      </div>
      <hr>
      <FooterView />
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Artist / Художник / Контакты',
  ogTitle: 'Artist / Художник / Контакты',
  description: 'Oil painting / Картины маслом / Академия Художеств / Контакты',
  ogDescription: 'Oil painting / Картины маслом / Академия Художеств / Контакты'
})

const loading = ref(true)
onMounted(() => {
  setTimeout(() => { loading.value = false }, 300)
})
</script>

<style>
.about {
  transition: all 0.7s;
}
</style>
