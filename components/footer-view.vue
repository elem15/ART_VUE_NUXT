<template>
  <footer class="section-footer sticky" :class="hidden && 'hidden'">
    <div class="socials">
      <ul class="socials-wrapper">
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://m.facebook.com/w.walter.heis/?ref=bookmarks"
            class="socials-wrapper__item-link"
            aria-label="Facebook"
          ><FacebookIcon />
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://www.instagram.com/vladiy_zart/"
            class="socials-wrapper__item-link"
            aria-label="Instagram"
          ><InstagramIcon />
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://vk.com/walter_heis"
            class="socials-wrapper__item-link"
            aria-label="VK"
          >
            <VkIcon />
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://www.saatchiart.com/vladiyzart"
            class="socials-wrapper__item-link"
            aria-label="saatchi"
          >
            <img src="/img/saatchi-min.png" alt="saatchi">
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://www.pinterest.ru/Vladiy_zart"
            class="socials-wrapper__item-link pinterest"
            aria-label="pinterest"
          ><PinterestIcon />
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://www.artmajeur.com/vladiy-zart"
            class="socials-wrapper__item-link"
            aria-label="artmajeur"
          >
            <img src="/img/artmajeur_logo_22.png" alt="artmajeur">
          </a>
        </li>
        <li class="socials-wrapper__item">
          <a
            target="_blank"
            href="https://www.singulart.com/en/artist/vladiy-zart-31723"
            class="socials-wrapper__item-link singulart"
            aria-label="singulart"
          >
            <img src="/img/singulart.png" alt="singulart">
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      Copyright © 2023 by Vlad Berezin
    </div>
  </footer>
</template>

<script setup lang="ts">
import VkIcon from './svg-icons/vk-icon.vue'
import FacebookIcon from './svg-icons/facebook-icon.vue'
import PinterestIcon from './svg-icons/pinterest-icon.vue'
import InstagramIcon from './svg-icons/instagram-icon.vue'

const hidden = ref(true)

onMounted(() => {
  setTimeout(() => { hidden.value = false }, 500)
})
</script>

<style scoped>
footer {
  transition: all 0.7s;
}
footer.hidden {
  opacity: 0;
  filter: blur(1rem);
}
</style>
