<template>
  <v-sheet max-width="1218px" class="mx-auto">
    <v-row>
      <v-col v-for="(content, i) in contents" :key="i" cols="12" md="6">
        <v-card class="CTA" tile flat :img="content.img">
          <div class="CTA__overlay">
            <h2 class="mb-4 CTA__title">{{ content.title }}</h2>
            <v-btn large class="CTA__button" :to="content.link" rounded>
              Kunjungi
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [
        {
          link: 'umkm',
          img: '/assets/umkm.jpeg',
          title: 'UMKM',
        },
        {
          link: 'media',
          img: '/assets/belajar.jpeg',
          title: 'Media Pembelajaran',
        },
      ],
    },
  },
};
</script>

<style>
.CTA {
  position: relative;
  overflow: hidden;
  background-position: center !important;
  transition: background-position 1s ease-in-out;
}

.CTA:hover {
  background-position: top right !important;
}

.CTA__overlay {
  height: 100%;
  background: rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 1rem;
  min-height: 400px;
}

.CTA__title {
  font-size: 2rem;
  font-weight: 700;
}
</style>
