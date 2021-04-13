<template>
  <div
    class="relative"
    style="padding-top: 56.25%"
  >
    <iframe
      class="absolute inset-0 w-full h-full"
      :src="blok.url"
      gesture="media"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
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
