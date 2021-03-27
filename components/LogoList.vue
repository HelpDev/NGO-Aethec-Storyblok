<template>
  <div v-editable="blok">
    <div class="row pt-5 pb-3">
      <div class="col-12 text-center">
        <p>
          <strong>{{ blok.logo_headline }}</strong>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <component
          :key="blok._uid"
          v-for="blok in blok.logos"
          :blok="blok"
          :is="componentName"
        ></component>
      </div>
    </div>
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
