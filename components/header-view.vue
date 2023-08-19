<template>
  <header class="section-header">
    <h1 class="section-header-head">
      Artist Vladiy Zart
    </h1>
    <div id="main-navigation" class="main-navigation">
      <nav class="nav">
        <ul class="nav-wrapper" @click="isGalleryActive=false">
          <li class="nav-wrapper__item">
            <NuxtLink to="/" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Главная
            </NuxtLink>
          </li>
          <li class="nav-wrapper__item" @click.stop="isGalleryActive=true" @mouseover="isGalleryMenu=true" @mouseleave="isGalleryMenu=false">
            <NuxtLink to="/gallery" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Галерея
            </NuxtLink>
          </li>
          <li class="nav-wrapper__item">
            <NuxtLink to="/about" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              О
              художнике
            </NuxtLink>
          </li>
          <li class="nav-wrapper__item">
            <NuxtLink to="/articles" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Статьи
            </NuxtLink>
          </li>
          <li class="nav-wrapper__item">
            <NuxtLink
              to="/contacts"
              class="nav-wrapper__item-link nav-wrapper__item-link--active"
            >
              Контакты
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div :class="!(isGalleryMenu || isGalleryActive) && 'hidden'" class="gallery-menu nav-wrapper" @mouseover="isGalleryMenu=true" @mouseleave="isGalleryMenu=false">
        <NuxtLink to="/gallery/painting" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Живопись
        </NuxtLink>
        <NuxtLink to="/gallery/still-life" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Натюрморт
        </NuxtLink>
        <NuxtLink to="/gallery/sketches" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Скетчи
        </NuxtLink>
        <NuxtLink to="/gallery/graphic" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Графика
        </NuxtLink>
        <NuxtLink to="/gallery/portrait" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Портреты
        </NuxtLink>
        <NuxtLink to="/gallery/landscape" class="nav-wrapper__item-link nav-wrapper__item-link--active">
          Пейзажи
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const isGalleryMenu = ref(false)
const isGalleryActive = ref(false)

</script>

<style>
.router-link-active.router-link-exact-active {
  color: blueviolet;
}
.gallery-menu {
  display: none;
}
@media screen and (min-width: 576px) {
  .gallery-menu {
    transition: all 0.7s;
    display: flex;
  }
}
</style>
