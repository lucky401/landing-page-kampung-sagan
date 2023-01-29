<template>
  <v-lazy>
    <v-container fluid>
      <Hero class="mb-16" />
      <About class="mb-16" />
      <ImageSlider class="mb-16" />
      <Caption class="mb-16" />
      <Hero
        class="mb-16"
        background-image="/assets/DSCMDSFKLF.jpeg"
        show-caption
      >
        <v-sheet color="transparent" max-width="452" class="pa-4">
          <blockquote class="caption">
            <p class="mb-4 caption__text">
              Masyarakat Kampung Sagan Yogyakarta adalah komunitas pedesaan yang
              terdiri dari keluarga-keluarga lokal yang hidup bersama-sama dan
              saling menunjukkan rasa peduli. Mereka menjalankan tradisi dan
              budaya yang kuat dan mempertahankan nilai-nilai kekeluargaan dan
              kerjasama. Masyarakat Kampung Sagan Yogyakarta terkenal dengan
              kerajinanya membuat usaha kecil-kecilan seperti burjo, sembako,
              tempat makan dan lain-lain.
            </p>
          </blockquote>
        </v-sheet>
      </Hero>
      <ContentSection
        class="mb-16"
        content-position="left"
        title="Kampung Sagan Yogyakarta"
        img="/assets/sosialisasi_qris.jpeg"
      >
        <p>
          Kampung Sagan Yogyakarta adalah sebuah kampung tradisional yang
          memiliki keunikan tersendiri, seperti rumah-rumah berdepetan,
          jalan-jalan sempit, dan masyarakat yang hidup rukun dan damai
        </p>
        <p>
          <b>Bentuk kampung-</b> Kampung Sagan memiliki bentuk kampung
          tradisional dengan jalan-jalan sempit dan rumah-rumah yang
          berdempetan. Konsep kampung ini masih mempertahankan nilai-nilai
          kekeluargaan dan kerjasama.
        </p>
        <p>
          <b>Budaya dan tradisi–</b>Budaya dan tradisi Kampung Sagan masih kuat,
          seperti kegiatan ibu-ibu PKK, gotong royong, dan posyandu. Masyarakat
          Kampung Sagan juga terdiri dari beragam suku dan agama, namun mereka
          hidup rukun dan damai seperti keluarga besar.
        </p>
        <p>
          <b>Pentingnya Kampung Sagan–</b> Kampung Sagan memiliki peranan
          Penting dalam kehidupan masyarakat sekitar, karena lokasinya yang
          dekat sekali dengan kampus besar seperti UGM. kampung ini juga
          memiliki potensi yang sangat besar untuk dikembangkan.
        </p>
      </ContentSection>
      <Hero
        class="mb-16"
        background-image="/assets/DASDSADSA.jpeg"
        show-caption
        height="800px"
      >
        <v-sheet color="transparent" max-width="452" class="pa-4 ml-auto">
          <blockquote class="caption">
            <p class="mb-4 caption__text">
              Kampung Sagan Yogyakarta memiliki potensi yang luar biasa dalam
              bidang <i>hospitality</i>. Keunikan dan keasrian lingkungan
              kampung, serta pertahanan budaya dan tradisi yang kuat, menjadikan
              Kampung Sagan kampung yang menarik bagi mahasiswa nasionial maupun
              internasional. Selain itu, potensi usaha UMKM juga terbuka luas,
              terutama dalam bidang kuliner dan kerajinan tradisional.
              Pemerintah setempat dapat memanfaatkan potensi ini untuk
              mengembangkan <i>hospitality</i> dan ekonomi setempat.
            </p>
          </blockquote>
        </v-sheet>
      </Hero>
      <CTA class="mb-16" />
      <FooterLandingPage />
    </v-container>
  </v-lazy>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
