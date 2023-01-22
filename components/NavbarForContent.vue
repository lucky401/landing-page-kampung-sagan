<template>
  <v-app-bar app fixed elevation="0" class="navbar__content">
    <v-toolbar-title class="navbar__title">Kampung Sagan</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style>
.navbar__content .v-toolbar__content {
  justify-content: center;
  background: rgb(0 0 0 / 40%) !important;
}

.navbar__content .navbar__title {
  font-size: inherit !important;
  font-weight: 700;
  color: #fff;
  text-align: center;
  font-family: Pacifico, cursive;
  transition: font-size 0.5s ease;
}
</style>
