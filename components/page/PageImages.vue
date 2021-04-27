<template>
  <div class="flex w-full mb-20">
    <div>
      <p>{{ blok.images }}</p>
    </div>
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
