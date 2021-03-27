<template>
  <div v-editable="blok" :class="columnStyle">
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
  computed: {
    columnStyle() {
      let style = this.blok.style.join(" ") + " ";
      style += this.blok.width.xsmall ? `col-${this.blok.width.xsmall} ` : "";
      style += this.blok.width.small ? `col-sm-${this.blok.width.small} ` : "";
      style += this.blok.width.medium
        ? `col-md-${this.blok.width.medium} `
        : "";
      style += this.blok.width.large ? `col-lg-${this.blok.width.large} ` : "";
      style += this.blok.width.xlarge
        ? `col-xl-${this.blok.width.xlarge} `
        : "";
      return style;
    }
  },
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
