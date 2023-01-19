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
  mounted() {
    this.changeTitleColorAfterScrollMoreThan100VH();
  },
  methods: {
    changeTitleColorAfterScrollMoreThan100VH() {
      const navbarTitle = document.querySelector('.navbar__title');
      const navbar = document.querySelector('.navbar');
      const vh = window.innerHeight;
      const navbarHeight = navbar.clientHeight;

      window.addEventListener('scroll', () => {
        const scrollHeight = window.scrollY;

        if (scrollHeight > vh - navbarHeight) {
          navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
          navbarTitle.style.color = '#000';
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbarTitle.style.color = '#fff';
        }
      });
    },
  },
};
</script>

<style>
.navbar,
.v-toolbar__content {
  background: transparent !important;
}

.navbar .v-toolbar__content {
  justify-content: center;
}

.navbar__title {
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
