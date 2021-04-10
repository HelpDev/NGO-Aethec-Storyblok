<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} }
    };
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', event => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    });
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], event => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true
      });
    });
  },
  async fetch(context) {
    // Loading reference data - Articles in our case
    if (context.store.state.articles.loaded !== '1') {
      let articlesRefRes = await context.app.$storyapi.get(`cdn/stories/`, {
        starts_with: context.localePath('articles/'),
        version: 'published'
      });
      context.store.commit('articles/setArticles', articlesRefRes.data.stories);
      context.store.commit('articles/setLoaded', '1');
    }
  },
  asyncData(context) {
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi
      .get(`cdn/stories/${context.localePath('home')}`, {
        version: 'published'
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api'
          });
        } else {
          console.error(res.response.data);
          context.error({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  }
};
</script>
