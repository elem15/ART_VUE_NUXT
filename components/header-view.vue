<template>
  <header class="section-header">
    <ThemeView />
    <h1 class="section-header-head">
      Artist Vladiy Zart
    </h1>
    <div id="main-navigation" class="main-navigation">
      <nav class="nav">
        <ul class="nav-wrapper">
          <li class="nav-wrapper__item">
            <NuxtLink to="/" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Главная
            </NuxtLink>
          </li>
          <li class="nav-wrapper__item">
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
    </div>
  </header>
</template>

<style>
.router-link-active.router-link-exact-active {
  color: blueviolet;
}
</style>
