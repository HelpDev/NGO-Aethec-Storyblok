import '@tailwindcss/forms';
import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import { TDropdown } from 'vue-tailwind/dist/components';
import ArticleTeaser from '~/components/ArticleTeaser.vue';
import Feature from '~/components/Feature.vue';
import FeaturedArticles from '~/components/FeaturedArticles.vue';
import Grid from '~/components/Grid.vue';
import Page from '~/components/Page.vue';
import Teaser from '~/components/Teaser.vue';

const vueTailwindComponents = {
  't-dropdown': {
    component: TDropdown
  }
};
Vue.use(VueTailwind, vueTailwindComponents);

Vue.component('page', Page);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('featured-articles', FeaturedArticles);
Vue.component('article-teaser', ArticleTeaser);
