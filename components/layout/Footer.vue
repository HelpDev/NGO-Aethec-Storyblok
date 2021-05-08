<template>
  <footer class="relative bg-primary-500 pt-8 pb-6 mt-20">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px;"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-primary-500 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold text-white">
            {{ $t('footer.title') }}
          </h4>
          <h5 class="text-lg mt-1 mb-2 text-primary-100">
            {{ $t('footer.subtitle') }}
          </h5>
          <div class="mt-6">
            <a
              class="bg-white  shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 inline-block hover:bg-social-twitter hover:fill-child-white"
              target="_blank"
              href="https://twitter.com/????"
            >
              <social-icon icon-name="twitter"/></a
            ><a
              class="bg-white shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 inline-block hover:bg-social-facebook hover:fill-child-white"
              target="_blank"
              href="https://facebook.com/????"
            >
              <social-icon icon-name="facebook"/></a
            ><a
              class="bg-white shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 inline-block hover:bg-social-instagram hover:fill-child-white"
              target="_blank"
              href="https://instagram.com/????"
            >
              <social-icon icon-name="instagram"/></a
            ><nuxt-link
              class="bg-white shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3 inline-block hover:bg-social-mail hover:fill-child-white"
              :to="localePath('contact')"
            >
              <social-icon icon-name="mail-dot-ru" />
            </nuxt-link>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free"
                    >Free Products</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Other Resources</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >MIT License</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} Tailwind Starter Kit by
            <a
              href="https://www.creative-tim.com"
              class="text-gray-600 hover:text-gray-900"
              >Creative Tim</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup(props, context) {}
};
</script>
