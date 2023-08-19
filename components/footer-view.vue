<template>
  <footer class="section-footer sticky" :class="loadFooter && 'hidden'">
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
    <div class="copyright">
      Website created by  <a href="https://github.com/elem15" target="_blank">
        Mikhail Dvorkin<nuxt-img
          class="github"
          src="/img/github.svg"
          alt="elem15 github"
          :height="15"
        /></a><br>
      <a href="https://artwalter.netlify.app/" target="_blank">Old site version</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import VkIcon from './svg-icons/vk-icon.vue'
import FacebookIcon from './svg-icons/facebook-icon.vue'
import PinterestIcon from './svg-icons/pinterest-icon.vue'
import InstagramIcon from './svg-icons/instagram-icon.vue'

const props = defineProps({
  loading: Boolean
})

const pending = ref(true)

onMounted(() => {
  setTimeout(() => { pending.value = false }, 500)
})

const loadFooter = computed(() => !(!props.loading || !pending))

</script>

<style scoped>
footer {
  transition: all 0.7s;
}
.dark-mode {
  & .github {
    background-color: rgb(181, 255, 255);
    border-radius: 50%;
  }

}
</style>
