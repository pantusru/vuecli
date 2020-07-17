<template>
    <div class="header-top">
    <div class="header-top-coll">
        <nav class="nav-top">
        <router-link v-for="link in linkTop" :key ="link.id" class="link-top" :to="link.href">{{ link.name}} </router-link>
        </nav>
        <div class="header-top-coll">
        <div class="head-phone">
            <a class="link-phone" href="tel:88005558721">8 (800) 555 87 21</a>
            Звонок по РФ - бесплатный
        </div>
        </div>
    </div>    
    </div> 
</template>

<script>
export default {
  data(){
    return{
      linkTop:[
        {name:"О компании", href:""},
        {name:"Мобильное приложение", href:""},
        {name:"Опт", href:""},
        {name:"Доставка", href:""},
        {name:"Оплата ", href:""},
        {name:"Новости", href:""},
        {name:"Помощь", href:""},
        {name:"Контакты", href:""},
      ]
    }
  } 
}
</script>

<style lang= "sass">
    .header-top
    .header-top-coll
      display: flex
      justify-content: space-between
      .nav-top
        display: flex
        width: 70%
        .link-top
          margin: 0 10px
          font-weight: 500
          font-size: 13px
          color: #4a4a4a
      .head-phone
        // width: 30%
        font-size: 13px
        color: #555
        .link-phone
          color: #436174
          font-weight: bold
</style>