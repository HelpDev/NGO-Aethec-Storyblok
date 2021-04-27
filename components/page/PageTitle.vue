<template>
  <div class="flex flex-col text-center w-full mb-20">
    <div class="py-8 w-full text-center text-5xl bg-opacity-90 z-20">
      <h1>{{ blok.text }}</h1>
    </div>

    <h2 v-if="blok.subtitle" class="lg:w-2/3 mx-auto leading-relaxed text-base">
      {{ blok.subtitle }}
    </h2>
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
