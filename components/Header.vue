<template>
  <header class="relative bg-primary-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link :to="localePath('/')">
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/images/logo_landscape_white.png"
              alt="Logo"
            />
          </nuxt-link>
        </div>
        <nav class="hidden md:flex space-x-10">
          <nuxt-link
            v-for="menuItem in menu"
            :key="menuItem.text"
            :to="localePath(menuItem.link)"
            class="text-base font-medium text-white hover:text-primary-700"
          >
            {{ $t(menuItem.text) }}
          </nuxt-link>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <t-dropdown>
            <div
              slot="trigger"
              slot-scope="{
                mousedownHandler,
                focusHandler,
                blurHandler,
                keydownHandler
              }"
              class="flex"
            >
              <t-button
                variant="secondary"
                @mousedown="mousedownHandler"
                @focus="focusHandler"
                @blur="blurHandler"
                @keydown="keydownHandler"
              >
                <TranslateIcon class="w-4" />
              </t-button>
            </div>

            <div class="py-1 rounded-md shadow-xs">
              <nuxt-link
                :to="switchLocalePath('en')"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                English
              </nuxt-link>
              <nuxt-link
                :to="switchLocalePath('es')"
                class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                role="menuitem"
              >
                Español
              </nuxt-link>
            </div>
          </t-dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TranslateIcon from 'heroicons/outline/translate.svg?inline';

export default {
  components: {
    TranslateIcon
  },
  setup(props, context) {
    const menu = [
      { link: 'projects', text: 'menu.projects' },
      { link: 'collaborate', text: 'menu.collaborate' },
      { link: 'team', text: 'menu.team' },
      { link: 'articles', text: 'menu.articles' },
      { link: 'contact', text: 'menu.contact' }
    ];

    return { menu };
  }
};
</script>
