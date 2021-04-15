 <template>
  <div class="flex flex-col text-center w-full mb-20">
    <h1 class="text-2xl font-bold title-font mb-4 text-gray-900">{{ blok.text }}</h1>
    <h2
      v-if="blok.subtitle"
      class="lg:w-2/3 mx-auto leading-relaxed text-base"
    >{{ blok.subtitle }}</h2>
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
