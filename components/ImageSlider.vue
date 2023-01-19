<template>
  <v-sheet max-width="1218px" class="mx-auto">
    <v-carousel cycle show-arrows-on-hover hide-delimiters interval="4000">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" />
    </v-carousel>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: '/assets/DSC04163.JPG' },
        { src: '/assets/DSC04241.JPG' },
        { src: '/assets/sosialisasi.jpeg' },
      ],
    };
  },
};
</script>
