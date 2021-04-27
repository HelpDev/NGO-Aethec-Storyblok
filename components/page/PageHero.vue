<template>
  <div class="w-full h-80v max-h-screen">
    <div
      class="absolute text-right pr-3 py-2 rounded-br-xl bg-primary-500 text-white w-80 text-3xl z-20"
    >
      <h2>{{ blok.title }}</h2>
    </div>
    <div
      v-if="blok.image"
      class="h-full bg-cover bg-bottom relative"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    >
      <div
        class="absolute bottom-0 py-6 w-full text-center text-5xl bg-gray-900  text-white bg-opacity-90 z-20"
      >
        <h2>{{ blok.subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
