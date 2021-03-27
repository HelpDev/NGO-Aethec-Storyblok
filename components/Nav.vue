<template>
  <ul v-editable="blok" class="nav" :class="blok.style.join(' ')">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="componentName"
    ></component>
  </ul>
</template>

<script>
import dashify from "dashify";

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    componentName: ""
  }),
  setup() {
    const { block } = props;

    return {
      block,
      componentName: dashify(block.component)
    };
  }
};
</script>
