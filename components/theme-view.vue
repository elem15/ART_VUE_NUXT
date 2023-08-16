<template>
  <div class="theme-toggle">
    <button v-if="colorMode.preference !== 'light'" @click="colorMode.preference = 'light'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="icon"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        data-v-389e99a3=""
        data-v-97ee44f7=""
      ><path fill="currentColor" d="M21.64 13a1 1 0 0 0-1.05-.14a8.05 8.05 0 0 1-3.37.73a8.15 8.15 0 0 1-8.14-8.1a8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69a1 1 0 0 0-.36-1.05Zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14a9.79 9.79 0 0 0 2.1-.22a8.11 8.11 0 0 1-7.18 4.32Z" /></svg>
    </button>
    <button v-else @click="colorMode.preference = 'dark'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="icon"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        data-v-389e99a3=""
        data-v-97ee44f7=""
      ><path fill="currentColor" d="m5.64 17l-.71.71a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5Zm0 9a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5Z" /></svg>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>

<style>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  & button {
    outline: none;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
  }
}
@media screen and (max-width: 480px) {
    .theme-toggle {
    position: absolute;
    top: -1.2rem;
    right: 0rem;
  }
}

.light-mode body {
  background-color: aquamarine;
  color: black;
}
.dark-mode {
  & body {
    background-color: #091a28;
    color: #abffe3;
  }
  & header * {
    color: rgb(134 255 242);
  }
  & a:hover {
    color: rgb(233, 191, 255);
  }
  & a {
    color: rgb(119, 191, 255);
  }
  & .nav-wrapper__item-link {
    color: rgb(243, 246, 249);
  }
  & h4 {
    color: rgb(243, 246, 249);
  }
  & .picture-styles:hover {
    color: rgb(194, 222, 250);
  }
  & .router-link-active.router-link-exact-active {
    color: rgb(119, 191, 255);
  }
  & .accordion-content {
    background-color: #091a28;
    & p {
      color: aliceblue;
    }
  }
  & .picture-description-header {
    color: aqua;
  }
}
</style>
