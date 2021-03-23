<template>
  <div v-editable="blok" class="py-2">
    <h1 class="text-lg">{{ blok.headline }}</h1>
    <p>{{ blok.text }}</p>
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
