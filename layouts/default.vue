<template>
  <div class="min-h-screen flex flex-col font-sans">
    <Header />
    <section class="min-h-screenx1.5">
      <Nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layout/Header.vue';
import Footer from '~/components/layout/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>
