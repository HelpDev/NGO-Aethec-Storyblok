<template>
  <div
    :class="
      ` max-w-6xl mx-auto py-8 sm:px-6 ${
        blok.side ? 'flex-row-reverse' : 'flex-row'
      }`
    "
  >
    <div
      v-if="blok.image"
      class="float-right mx-4 w-80 h-80 rounded-full bg-cover shadow-lg"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    ></div>
    <p
      class="leading-8 font-medium max-w-3xl "
      v-html="renderText(blok.text)"
    ></p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  setup() {
    function renderText(text) {
      return text ? this.$storyapi.richTextResolver.render(text) : '';
    }

    return {
      renderText
    };
  }
};
</script>
