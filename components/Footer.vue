<template>
  <footer class="fdb-block" :class="blok.style.join(' ')" v-editable="blok">
    <div class="container">
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="componentName"
      ></component>
    </div>
  </footer>
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
