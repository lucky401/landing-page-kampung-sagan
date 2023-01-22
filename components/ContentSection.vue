<template>
  <v-sheet max-width="1218px" class="mx-auto">
    <v-row class="mx-0">
      <v-col order="2" cols="12" md="6">
        <v-card class="pa-2" tile flat>
          <v-card-title> {{ title }} </v-card-title>
          <v-card-text>
            <slot></slot>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        :order="responsiveContentPosition === 'left' ? '3' : '1'"
        cols="12"
        md="6"
      >
        <v-card
          tile
          flat
          height="100%"
          min-height="300px"
          class="pa-2"
          :img="img"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    contentPosition: {
      type: String,
      default: 'left',
    },
    img: {
      type: String,
      default: '/assets/sosialisasi_qris.jpeg',
    },
    title: {
      type: String,
      default: 'How do we regenerate for a better life?',
    },
  },
  computed: {
    responsiveContentPosition() {
      if (this.$vuetify.breakpoint.name === 'xs') {
        if (this.contentPosition === 'left') {
          return 'right';
        } else {
          return 'left';
        }
      }
      return this.contentPosition;
    },
  },
};
</script>
