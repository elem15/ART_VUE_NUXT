<template>
  <div>
    <Carousel id="gallery" v-model="currentSlide" :items-to-show="1" :wrap-around="false">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          {{ slide }}
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="4"
      :wrap-around="true"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item" @click="slideTo(slide - 1)">
          {{ slide }}
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    currentSlide: 0
  }),
  methods: {
    slideTo (val) {
      this.currentSlide = val
    }
  }
})
</script>
