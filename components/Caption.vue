<template>
  <v-sheet tag="section" max-width="800px" class="text-center mx-auto">
    <blockquote class="caption">
      <p class="mb-4 caption__text">
        Mengunjungi Kampung Sagan memiliki keunikan tersendiri, seperti
        rumah-rumah yang berjejer-jejer, jalan-jalan sempit, dan masyarakat yang
        hidup rukun dan damai.
      </p>
      <h3 class="caption__tittle">Kevin – Tim KKN PPM UGM 2022/2023</h3>
    </blockquote>
  </v-sheet>
</template>

<script>
export default {
  name: 'CaptionComponent',
};
</script>

<style>
.caption__text,
.caption__tittle {
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
}

.caption__text {
  font-style: italic;
}

.caption__tittle {
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
</style>
