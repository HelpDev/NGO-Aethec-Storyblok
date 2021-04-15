<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">Projects Overview</h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="project in stories"
        :key="project._uid"
        class="flex-auto px-6"
        style="min-width: 33%"
      >
        {{project}}
      </li>
    </ul>
  </section>
</template>

<script>
import { loadPageContentFromApi } from '~/helpers';

export default {
  data() {
    return {
      stories: []
    };
  },
  asyncData(context) {
    return loadPageContentFromApi(
      context,
      'cdn/stories',
      context.localePath('projects/')
    );
  }
};
</script>
