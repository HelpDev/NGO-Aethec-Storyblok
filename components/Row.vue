<template>
  <div v-editable="blok" class="row" :class="blok.style.join(' ')">
    <component
      :key="blok._uid"
      v-for="blok in blok.body"
      :blok="blok"
      :is="componentName"
    ></component>
  </div>
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
