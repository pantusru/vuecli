<template>
  <div id="app" v-on:click="OffPopul">
    <header class="header">
      <headerTop />
      <headerBottom />
      <headerNav />
    </header>
    <router-view />
    <footer class="footer">
      <div class="conteiner">
        <footerMainVue />
      </div>
    </footer>
  </div>
</template>

<style lang="sass">
@import "@/sass/reset"
@import "@/sass/smart-grid"
@import "@/sass/link"
.footer
  margin-top: 80px
</style>

<script>
import headerTopVue from "./components/header/headerTop.vue";
import headerBottomVue from "./components/header/headerBottom.vue";
import headerNavVue from "./components/header/headerNav.vue";
import footerMainVue from "./components/footer/footerMain.vue";
export default {
  components: {
    headerTop: headerTopVue,
    headerBottom: headerBottomVue,
    headerNav: headerNavVue,
    footerMainVue: footerMainVue
  },
  methods: {
    OffPopul(event) {
      console.log(event.target.className);
      if (event.target.className != "link-top link-hover focusPopul") {
        this.$store.state.checkPop.NavTop = false;
      }
      if (event.target.className != "focusPopul link-nav") {
        this.$store.state.checkPop.NavAll = false;
      }
    }
  }
};
</script>
