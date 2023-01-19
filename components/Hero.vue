<template>
  <section
    class="hero"
    :style="{
      'background-image': 'url(' + backgroundImage + ')',
      'min-height': height,
    }"
  >
    <v-overlay opacity="0.4" absolute z-index="1" class="hero__overlay pa-16">
      <v-row v-if="showCaption" align="center" justify="center">
        <v-col cols="12" class="d-flex">
          <slot></slot>
        </v-col>
      </v-row>
    </v-overlay>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
  props: {
    backgroundImage: {
      type: String,
      default: '/banner.jpeg',
    },
    height: {
      type: String,
      default: '100vh',
    },
    showCaption: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.hero {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  position: relative;
  margin: -12px;
}

.hero__overlay .v-overlay__content,
.row {
  width: 100%;
  height: 100%;
}
</style>
