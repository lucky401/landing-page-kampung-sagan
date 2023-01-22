<template>
  <v-app-bar
    tile
    flat
    fixed
    prominent
    elevation="0"
    class="navbar"
    shrink-on-scroll
  >
    <v-toolbar-title class="navbar__title">Kampung Sagan</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style>
.navbar {
  background: transparent !important;
  transition: background-color 0.5s ease;
}

.navbar .v-toolbar__content {
  justify-content: center;
  background: transparent !important;
}

.navbar.v-app-bar--is-scrolled {
  background: rgb(0 0 0 / 40%) !important;
}

.navbar .navbar__title {
  font-size: 3rem !important;
  font-weight: 700;
  color: #fff;
  text-align: center;
  font-family: Pacifico, cursive;
  transition: font-size 0.5s ease;
}

.navbar.v-app-bar--is-scrolled .navbar__title {
  font-size: inherit !important;
}
</style>
