<template>
  <div v-if="colorMode.preference === 'light'" class="container">
    <nuxt-img
      v-for="item in [1,2,3,4,5]"
      :key="item"
      src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/assets/background.jpg"
      alt="background"
      lazy="false"
      quality="50"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

</script>

<style scoped>
.dark-mode .container {
  display: none;
}
</style>
