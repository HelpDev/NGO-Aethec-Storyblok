<template>
  <div class="row text-center justify-content-center pt-5" v-editable="blok">
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
