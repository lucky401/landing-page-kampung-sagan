<template>
  <v-sheet tag="section" max-width="800px" class="text-center mx-auto">
    <blockquote class="caption">
      <p class="mb-4 caption__text">
        Visiting Kampung Sagan was like stepping back in time, the traditional
        wooden houses and the locals still practicing their customs and skills,
        made for a truly authentic cultural experience
      </p>
      <h3 class="caption__tittle">ChatGPT – Open AI</h3>
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
  font-weight: 300;
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
