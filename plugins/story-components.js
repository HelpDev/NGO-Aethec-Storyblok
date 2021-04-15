import Vue from 'vue';
import Article from '~/components/Article.vue';
import ArticleTeaser from '~/components/ArticleTeaser.vue';
import Feature from '~/components/Feature.vue';
import FeaturedArticles from '~/components/FeaturedArticles.vue';
import Grid from '~/components/Grid.vue';
import Page from '~/components/Page.vue';
import PageForm from '~/components/page/PageForm.vue';
import PageHero from '~/components/page/PageHero.vue';
import PageText from '~/components/page/PageText.vue';
import PageTitle from '~/components/page/PageTitle.vue';
import Project from '~/components/Project.vue';
import SocialIcon from '~/components/shared/SocialIcon';
import TeamContainer from '~/components/team/TeamContainer.vue';
import TeamMember from '~/components/team/TeamMember.vue';
import Teaser from '~/components/Teaser.vue';

Vue.component('page', Page);
Vue.component('content-project', Project);
Vue.component('content-article', Article);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('featured-articles', FeaturedArticles);
Vue.component('article-teaser', ArticleTeaser);
Vue.component('page-title', PageTitle);
Vue.component('page-hero', PageHero);
Vue.component('page-form', PageForm);
Vue.component('page-text', PageText);
Vue.component('team-container', TeamContainer);
Vue.component('team-member', TeamMember);
Vue.component('social-icon', SocialIcon);
