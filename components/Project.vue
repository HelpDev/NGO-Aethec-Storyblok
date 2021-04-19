<template>
  <div class="flex-grow">
    <component
      v-for="hero in blok.hero"
      :key="hero._uid"
      :blok="hero"
      :is="hero.component"
    />

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
