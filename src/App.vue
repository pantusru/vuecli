<template>
  <div id="app">
    <header class="header">
        <headerTop/>  
        <headerBottom/>
        <headerNav/> 
    </header>
    <router-view/>
    <footer class="footer">
      <div class="conteiner">
        <footerMainVue/>
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
import headerTopVue from './components/header/headerTop.vue'
import headerBottomVue from './components/header/headerBottom.vue'
import headerNavVue from './components/header/headerNav.vue'
import footerMainVue from './components/footer/footerMain.vue'
export default {
  components:{
    headerTop: headerTopVue,
    headerBottom: headerBottomVue,
    headerNav :headerNavVue,
    footerMainVue: footerMainVue
  }
}
</script>