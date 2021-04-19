<template>
  <div class="w-full h-4/5">
    <div>
      <h2>{{blok.title}}</h2>
    </div>
    <div
      v-if="blok.image"
      class="h-full"
      :style="{backgroundImage: `url(${blok.image.filename})`}"
    ></div>
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
  setup(props) {
    console.log(props.blok);
  }
};
</script>
