<template>
  <div
    :class="
      `mx-auto flex justify-between
       ${blok.isTitle ? 'h-screen' : 'py-8 sm:px-6 max-w-6xl '}
       ${
         blok.isSide
           ? 'flex-col md:flex-row'
           : 'flex-col-reverse md:flex-row-reverse'
       }`
    "
  >
    <div
      v-if="blok.isTitle"
      class="h-3/4 md:h-3/4 w-screen md:w-10/12 bg-cover shadow-lg"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    ></div>
    <div
      v-else
      class="mx-4 w-80 h-80 rounded-full bg-cover shadow-lg"
      :style="{ backgroundImage: `url(${blok.image.filename})` }"
    ></div>

    <p
      v-if="blok.isTitle"
      class="h-1/4 md:h-3/4 font-serif px-6 font-extrabold text-5xl flex justify-center items-center content-center"
      v-html="renderText(blok.text)"
    ></p>
    <p
      v-else
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
