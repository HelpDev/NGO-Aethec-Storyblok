<template>
  <nuxt-link
    :to="localePath(blok.page)"
    :class="
      `flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-50 sm:rounded-xl transition-all shadow-md ${
        blok.page ? 'hover:shadow-lg hover:bg-gray-100' : ''
      }`
    "
  >
    <div v-if="blok.icon" class="p-3 text-white bg-primary-500 rounded-full">
      <HeroIcon :icon="blok.icon" type="outline" size="2rem" />
    </div>
    <h4 class="text-xl font-medium text-gray-700">{{ blok.title }}</h4>
    <p class="text-base text-center text-gray-500">
      {{ blok.text }}
    </p>
  </nuxt-link>
</template>

<script>
import HeroIcon from '../shared/HeroIcon.vue';

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  components: {
    HeroIcon
  },
  setup(props) {
    const { blok } = props;

    return {
      image: blok.image?.filename || 'https://dummyimage.com/200x200'
    };
  }
};
</script>
