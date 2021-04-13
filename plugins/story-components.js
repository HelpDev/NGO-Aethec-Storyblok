import Vue from 'vue';
import ArticleTeaser from '~/components/ArticleTeaser.vue';
import Feature from '~/components/Feature.vue';
import FeaturedArticles from '~/components/FeaturedArticles.vue';
import Grid from '~/components/Grid.vue';
import Page from '~/components/Page.vue';
import PageTitle from '~/components/page/PageTitle.vue';
import Teaser from '~/components/Teaser.vue';

Vue.component('page', Page);
Vue.component('page-title', PageTitle);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('featured-articles', FeaturedArticles);
Vue.component('article-teaser', ArticleTeaser);
