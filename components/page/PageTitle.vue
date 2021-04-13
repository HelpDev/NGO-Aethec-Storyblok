<template>
  <div>
    <h1>{{ blok.text }}</h1>
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
