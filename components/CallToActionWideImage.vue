<template>
  <section class="fdb-block pb-0" v-editable="blok">
    <div class="container">
      <div class="row align-items-center text-left">
        <div class="col-12 col-md-8">
          <h1>{{ blok.headline }}</h1>
          <p class="text-h3">
            {{ blok.text }}
          </p>
        </div>
        <div class="col-12 col-md-3 ml-auto text-left text-md-right">
          <component
            :key="blok._uid"
            v-for="blok in blok.buttons"
            :blok="blok"
            :is="componentName"
          ></component>
        </div>
      </div>

      <div class="row pt-5" v-if="blok.image">
        <div class="col-12">
          <img alt="image" class="img-fluid" :src="blok.image" />
        </div>
      </div>
    </div>
  </section>
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
