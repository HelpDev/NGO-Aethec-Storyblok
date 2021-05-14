<template>
  <div
    class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl"
  >
    <div class="p-3 text-white bg-primary-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 "
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 8a3 3 0 0 1 0 6"></path>
        <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
        <path
          d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"
        ></path>
      </svg>
    </div>
    <h4 class="text-xl font-medium text-gray-700">{{ blok.title }}</h4>
    <p class="text-base text-center text-gray-500">
      {{ blok.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { blok } = props;

    return {
      image: blok.image?.filename || 'https://dummyimage.com/200x200'
    };
  }
};
</script>
