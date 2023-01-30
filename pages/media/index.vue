<template>
  <v-lazy>
    <v-container>
      <v-row class="mx-0">
        <v-col>
          <h1>Artikel Kampung Sagan</h1>
          <p class="mt-2">
            Artikel - artikel yang berhubungan dengan Kampung Sagan Yogyakarta
          </p>
        </v-col>
      </v-row>
      <v-row class="mx-0">
        <v-col v-for="article in articles" :key="article.slug" cols="12" md="4">
          <v-card
            class="elevation-12 mb-8"
            :to="`/media/${article.slug}`"
            min-height="500"
          >
            <v-img max-height="300px" :src="article.image"></v-img>
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-subtitle>{{ article.author }}</v-card-subtitle>
            <v-card-text class="media__simple_desc">{{
              article.description
            }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-lazy>
</template>
<script>
export default {
  layout: 'content',

  async asyncData({ $content }) {
    const articles = await $content('articles').fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
.media__simple_desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80ch;
}
</style>
