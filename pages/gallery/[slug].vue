<template>
  <main>
    <SpinnerView v-if="loading" />
    <div class="gallery-wrapper" :style="{opacity: loading ? 0 : 1, filter: loading ? 'blur(1rem)' : 'none'}">
      <div>{{ params }}</div>
      <div class="picture">
        <div class="gallery-wrapper-picture">
          <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/spring-alley.jpg" alt="Дорога в лесу" :quality="50" />
        </div>
        <div class="picture-description">
          <h2 class="picture-description-header">
            ПЕЙЗАЖИ
          </h2>
          <p class="picture-description-article">
            Пейзажи выполняются разными материалами с натуры на плэнерах. С небольшого этюда по впечатлениям создается большое произведение.
          </p>
        </div>
      </div>
      <ul class="box-container gallery">
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/birch-by-water.jpg"
              class="glightbox2"
              data-glightbox="title: Birch trees by the water; description: Березы у воды. Кавголовское озеро. Birch trees by the water. Lake Kavgolovskoe/ 21x21 cm, сухая пастель, пастельная бумага /Dry pastel, pastel paper/ 2020; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/birch-by-water.jpg" alt="Березы у воды. Кавголовское озеро. Birch trees by the water. Lake Kavgolovskoe/ 21x21 cm, сухая пастель, пастельная бумага /Dry pastel, pastel paper/ 2020" class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/spring-alley.jpg"
              class="glightbox2"
              data-glightbox="title: Spring alley; description: Весенняя аллея. Санкт-Петербург. Полежаевский парк, 21х29,7 см. /Spring alley. St. Petersburg. Polezhaevsky park/, 21x29.7 cm, сухая пастель, картон; /dry paste, cardboard/, 2015; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/spring-alley.jpg" alt="Весенняя аллея. Санкт-Петербург. Полежаевский парк, 21х29,7 см. /Spring alley. St. Petersburg. Polezhaevsky park/, 21x29.7 cm, сухая пастель, картон; /dry paste, cardboard/, 2015" class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/water-lilies.jpg"
              class="glightbox2"
              data-glightbox="title: Water lilies and reflected reality; description: Кувшинки и отраженная реальность / Water lilies and reflected reality./ 21x21 cm, сухая пастель, пастельная бумага /Dry pastel, pastel paper/, 2020; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/water-lilies.jpg" alt="Кувшинки и отраженная реальность / Water lilies and reflected reality./ 21x21 cm, сухая пастель, пастельная бумага /Dry pastel, pastel paper/, 2020" class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/moonlight.jpg"
              class="glightbox2"
              data-glightbox="title: Moonlight; description: Лунный свет /Moonlight/, 21x21 cm, сухая пастель, пастельная бумага / Dry pastel, pastel paper/, 2020; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/moonlight.jpg" alt="Лунный свет /Moonlight/, 21x21 cm, сухая пастель, пастельная бумага / Dry pastel, pastel paper/, 2020" class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/well-of-life.jpg"
              class="glightbox2"
              data-glightbox="title: Well of life; description: Колодец жизни. Well of life. Материалы: сухая пастель, пастельная бумага.  Materials: dry pastel, pastel paper. Размеры : 21x21 см. Sizes: 21x21 cm. 2020 г.; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/well-of-life.jpg" alt="Колодец жизни. Well of life. Материалы: сухая пастель, пастельная бумага.  Materials: dry pastel, pastel paper. Размеры : 21x21 см. Sizes: 21x21 cm. 2020 г." class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/gazprom-tower.jpg"
              class="glightbox2"
              data-glightbox="title: Gazprom tower; description:  Вид на воду и башню Газпрома со стороны парка 300-летия Санкт-Петербурга /View of the water and the Gazprom tower from the park of the 300th anniversary of St. Petersburg/ 21x21 cm,темпера, пастельная бумага, tempera, pastel paper 2020; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/gazprom-tower.jpg" alt="Башня Газпрома" class="preview" /></a>
          </div>
        </li>
        <li class="box">
          <div class="inner">
            <a
              href="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/large/appeasement.jpg"
              class="glightbox2"
              data-glightbox="title: Appeasement; description:  Умиротворение / Appeasement / 30x20,5 cm, сухая пастель, пастельная бумага, dry pastel, pastel paper 2019; descPosition: bottom;"
            >
              <nuxt-img src="https://umlxyrmekufynqaatflf.supabase.co/storage/v1/object/public/landscape/small/appeasement.jpg" alt="Умиротворение" class="preview" /></a>
          </div>
        </li>
      </ul>
    </div>
    <FooterView :loading="loading" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const params = route.params.slug

const loading = ref(true)

// const onLoadEvent = () => {
//   setTimeout(() => { loading.value = false }, 500)
// }
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})

</script>
