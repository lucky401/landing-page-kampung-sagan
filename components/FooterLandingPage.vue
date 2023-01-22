<template>
  <div class="mx-n2">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0829331532123!2d110.37548221529694!3d-7.781031394392423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59ccc7fd2c4f%3A0xc2e8447855f39e7d!2sJl.%20Sagan%2C%20Terban%2C%20Kec.%20Gondokusuman%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055223!5e0!3m2!1sen!2sid!4v1673947153270!5m2!1sen!2sid"
      width="100%"
      height="450"
      class="map__landing__page"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
    <v-footer padless class="ma-n2 pa-8 z-0">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>KKN PPM UGM</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.map__landing__page {
  border: 0;
  margin: 0 auto;
  display: block;
  margin-bottom: -20px;
  z-index: 1;
  position: relative;
}
</style>
