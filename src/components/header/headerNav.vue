<template>
<div class="conteiner">
    <div class="nav-header">
        <router-link v-for="link in links" :key ="link.id" class="link-nav" :to="link.href">{{ link.name}} </router-link>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {name:"Все запчасти", href: ""},
                {name:"Оригинальные каталоги", href: "/catalog"},     
                {name:"Иномарки", href: ""}, 
                {name:"ВАЗ", href: ""}, 
                {name:"КАМАЗ", href: ""}, 
                {name:"ГАЗ", href: ""}, 
                {name:"РТИ", href: ""}, 
                {name:"Популярное", href: ""}, 
                {name:"Новинки", href: "/product"} 
            ]
        }
    }
}
</script>

<style lang="sass">
    .nav-header
        width: 85%
        display: flex
        justify-content: space-between
        .link-nav
            color: #555             
</style>