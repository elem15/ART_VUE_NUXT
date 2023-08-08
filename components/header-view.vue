<template>
  <header class="section-header">
    <h1 class="section-header-head">
      Artist Vladiy Zart
    </h1>
    <div id="main-navigation" class="main-navigation">
      <nav class="nav">
        <ul class="nav-wrapper">
          <li class="nav-wrapper__item">
            <RouterLink to="/" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Главная
            </RouterLink>
          </li>
          <li class="nav-wrapper__item">
            <a href="gallery.html" class="nav-wrapper__item-link nav-wrapper__item-link--active">Галерея</a>
          </li>
          <li class="nav-wrapper__item">
            <RouterLink to="/about" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              О
              художнике
            </RouterLink>
          </li>
          <li class="nav-wrapper__item">
            <RouterLink to="/articles" class="nav-wrapper__item-link nav-wrapper__item-link--active">
              Статьи
            </RouterLink>
          </li>
          <li class="nav-wrapper__item">
            <RouterLink
              to="/contacts"
              class="nav-wrapper__item-link nav-wrapper__item-link--active"
            >
              Контакты
            </RouterLink>
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
