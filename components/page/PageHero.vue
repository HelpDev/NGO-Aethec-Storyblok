<template>
  <div :class="`flex w-full mb-20 ${blok.side ? 'flex-row-reverse' : 'flex-row'}`">
    <div>
      <p>{{blok.text}}</p>
    </div>
    <div
      v-if="blok.image"
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
  }
};
</script>
