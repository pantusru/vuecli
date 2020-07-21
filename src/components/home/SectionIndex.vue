<template>
  <section class="section-index">
      <div class="content-categoria">
          <categoriaVue title="Автозапчасти ВАЗ" :ul = "categoriaUrl[0]" src="img/home-car-1.png" alt="1" />
          <div class="blog-mini-categoria">
                <h2><a href="#" class="categoria-title link-hover">Шланги поливочные</a></h2>
                <div class="mini-categoria-img"> <img src="@/assets/home-car-2.png" alt=""></div>
          </div>
          <categoriaVue title="Запчасти для корейских Авто" :ul = "categoriaUrl[1]" src="img/home-car-3.png" alt="1"/>
          <div class="blog-mini-categoria">
                <h2><a href="#" class="categoria-title link-hover">Запчасти Renault</a></h2>
                <div class="mini-categoria-img"> <img src="@/assets/home-car-4.png" alt=""></div>
          </div>
      </div>
      <div class="banner">
          <img src="@/assets/appbanner.jpg" alt="">
      </div>
  </section>
</template>

<script>
import categoriaVue from '../microComponents/categoria.vue'
export default {
    data(){
        return{
            categoriaUrl:[
                [
                    {name: "Запчасти на Приору", href:""},
                    {name: "Запчасти на Весту", href:""},
                    {name: "Все запчасти ВАЗ", href:""},
                ],
                [
                    {name: "Daewoo", href:""},
                    {name: "Hyundai", href:""},
                    {name: "Kia", href:""},
                ]
            ],
        }
    },
    components:{
        categoriaVue:categoriaVue,
    }
}
</script>

<style lang="sass">
    .section-index
        display: flex
        justify-content: space-between
        flex-wrap: wrap
    .content-categoria
        +size(9)
        display: grid
        grid-template-columns: 2fr 1fr
        grid-gap: 35px
    .banner
        +size(3)
    .blog-mini-categoria
        box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
</style>