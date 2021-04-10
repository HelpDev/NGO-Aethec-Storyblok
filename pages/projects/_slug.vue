<template>
  <section>
    <Article :blok="story.content" />
  </section>
</template>

<script>
import {
  onStoryBridgeInputChangeUpdateContent,
  onStoryBridgeChangedToPublishedRefreshPage,
  loadPageContentFromApi
} from '~/helpers';
import Article from '~/components/Article.vue';

export default {
  components: {
    Article
  },
  data() {
    return {
      story: { content: {} }
    };
  },
  mounted() {
    onStoryBridgeInputChangeUpdateContent(this);
    onStoryBridgeChangedToPublishedRefreshPage(this);
  },
  asyncData(context) {
    return loadPageContentFromApi(
      context,
      `cdn/stories/${context.localePath(`projects/${context.params.slug}`)}`
    );
  }
};
</script>
