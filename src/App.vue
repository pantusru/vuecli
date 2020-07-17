<template>
  <div id="app">
    <header class="header">
      <div class="conteiner">
          <headerTop/>  
          <headerBottom/>
          <headerNav/> 
      </div>
    </header>
    <router-view/>
    <footer>
      
    </footer>
  </div>
</template>

<style lang="sass">
  *
    padding: 0
    margin: 0
    box-sizing: border-box
  img
    width: 100%
    height: auto
  body
    font-family: 'Open Sans'
  .conteiner
    max-width: 1170px
    margin: 0 auto
    padding: 0 15px
  .header
    background: #F7F7F7
    padding: 5px 0
</style>

<script>
import headerTopVue from './components/header/headerTop.vue'
import headerBottomVue from './components/header/headerBottom.vue'
import headerNavVue from './components/headerNav.vue'
export default {
  components:{
    headerTop: headerTopVue,
    headerBottom: headerBottomVue,
    headerNav :headerNavVue
  }
}
</script>