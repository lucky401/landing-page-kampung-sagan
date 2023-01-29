<template>
  <v-lazy>
    <v-container>
      <v-row>
        <v-col class="my-3" cols="12">
          <nuxt-content :document="blog" />
        </v-col>
      </v-row>
    </v-container>
  </v-lazy>
</template>
<script>
export default {
  layout: 'content',

  async asyncData({ $content, params }) {
    const blog = await $content(`articles/${params.slug}`).fetch();
    return {
      blog,
    };
  },
};
</script>
