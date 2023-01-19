<template>
  <v-container fluid>
    <Hero class="mb-16" />
    <About class="mb-16" />
    <ImageSlider class="mb-16" />
    <Caption class="mb-16" />
    <Hero class="mb-16" background-image="/assets/DSCMDSFKLF.jpeg" show-caption>
      <v-sheet color="transparent" max-width="452" class="pa-4">
        <blockquote class="caption">
          <p class="mb-4 caption__text">
            The people of Kampung Sagan in Yogyakarta, Indonesia are known for
            their strong sense of community and rich cultural heritage,
            especially traditional crafts like batik, pottery and silver works,
            and for preserving traditional customs and practices. They also have
            strong social and economic ties and are known for their friendly and
            welcoming nature.
          </p>
          <h3 class="caption__tittle">ChatGPT – Open AI</h3>
        </blockquote>
      </v-sheet>
    </Hero>
    <ContentSection
      class="mb-16"
      content-position="left"
      title="How do we regenerate for a better life?"
      img="/assets/sosialisasi_qris.jpeg"
    >
      <p>
        By following our regenerative framework our human centric approach
        ensures the best solutions for people and planet.
      </p>
      <p>
        From design, to creation, to living, working with science and nature, we
        follow a circular process to future proof and create legacy.
      </p>
      <p>
        <b>Design to Regenerate-</b> Working with science and nature in an
        integrated approach we take time to understand your vision and the needs
        of the end user to ensure the best project outcome.
      </p>
      <p>
        <b>Create to Circulate–</b>Following the circular economy model, our
        workshop enables us to make regenerative solutions. Using non polluting
        materials, we are ensuring waste is eradicated, and a system of reuse,
        repair, repurposing, and recycling is attained that reduces carbon
        emissions.
      </p>
      <p>
        <b>Live to Flourish–</b> 90% of our time is spent indoors so it is
        important that we design our living spaces to ensure increased health,
        to stimulate creativity, comfort, wellness and encourage positive
        behaviour. We can help you achieve this and continue to ensure that your
        wellness is supported after the project has completed.
      </p>
    </ContentSection>
    <Hero
      class="mb-16"
      background-image="/assets/DASDSADSA.jpeg"
      show-caption
      height="500px"
    >
      <v-sheet color="transparent" max-width="452" class="pa-4 ml-auto">
        <blockquote class="caption">
          <p class="mb-4 caption__text">
            The people of Kampung Sagan in Yogyakarta, Indonesia are known for
            their strong sense of community and rich cultural heritage,
            especially traditional crafts like batik, pottery and silver works,
            and for preserving traditional customs and practices. They also have
            strong social and economic ties and are known for their friendly and
            welcoming nature.
          </p>
          <h3 class="caption__tittle">ChatGPT – Open AI</h3>
        </blockquote>
      </v-sheet>
    </Hero>
    <CTA class="mb-16" />
    <FooterLandingPage />
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
