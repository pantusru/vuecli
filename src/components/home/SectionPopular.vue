<template>
    <section class="section-popular">
        <h2 class="title-blog">Популярные товары</h2>
            <div class="blog-popular">
                <productPopular 
                    v-for="data in product"
                    :key="data.id" 
                    :title="data.title" 
                    :brand="data.brand"
                    :alt="data.alt"
                    :art="data.art"    
                    :OEM ="data.OEM"
                    :hreF="data.hreF"
                    :src="data.src"
                    :price="data.price"
                    :kolvo="data.kolvo"

                />
            </div>
            <div class="link-more-center">
                <button class="link-more">ПОСМОТРЕТЬ ВСЕ ПОПУЛЯРНЫЕ ТОВАРЫ </button>
            </div>
    </section>
</template>

<script>
import productPopular from '../microComponents/productPopular.vue'
export default {
    data(){
        return{
            product:[
                {
                    title:"dsadsasda34", 
                    brand: "Балаково", 
                    src:"https://www.pantus.ru/upload/iblock/61a/1101%20-%20%D0%9E%D0%BF%D0%BE%D1%80%D0%B0%20%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9%20%D0%92%D0%90%D0%97%202108%20%D0%AD%D0%9A%D0%A1%D0%9F%D0%95%D0%A0%D0%A2%20-%20%D0%A1%D1%8D%D0%B2%D0%B8.jpg",
                    alt: "123",
                    art: "23141532-12314",
                     price: 500,
                      kolvo: 450,
                    OEM:[
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                    ],
                    hreF:{
                        brand: "brandName",
                        art: "artName"
                    }
                },
                 {
                    title:"dsadsasda34", 
                    brand: "Балаково", 
                    src:"https://www.pantus.ru/upload/iblock/61a/1101%20-%20%D0%9E%D0%BF%D0%BE%D1%80%D0%B0%20%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9%20%D0%92%D0%90%D0%97%202108%20%D0%AD%D0%9A%D0%A1%D0%9F%D0%95%D0%A0%D0%A2%20-%20%D0%A1%D1%8D%D0%B2%D0%B8.jpg",
                    alt: "123",
                    art: "23141532-12314",
                     price: 500,
                     kolvo: 450,
                    OEM:[
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                    ],
                    hreF:{
                        brand: "brandName",
                        art: "artName"
                    }
                },
                 {
                    title:"dsadsasda34", 
                    brand: "Балаково", 
                    src:"https://www.pantus.ru/upload/iblock/61a/1101%20-%20%D0%9E%D0%BF%D0%BE%D1%80%D0%B0%20%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9%20%D0%92%D0%90%D0%97%202108%20%D0%AD%D0%9A%D0%A1%D0%9F%D0%95%D0%A0%D0%A2%20-%20%D0%A1%D1%8D%D0%B2%D0%B8.jpg",
                    alt: "123",
                    art: "23141532-12314",
                    price: 500,
                    kolvo: 450,
                    OEM:[
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                    ],
                    hreF:{
                        brand: "brandName",
                        art: "artName"
                    }
                },
                {
                    title:"dsadsasda34", 
                    brand: "Балаково", 
                    src:"https://www.pantus.ru/upload/iblock/61a/1101%20-%20%D0%9E%D0%BF%D0%BE%D1%80%D0%B0%20%D1%81%D1%82%D0%BE%D0%B9%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B9%20%D0%92%D0%90%D0%97%202108%20%D0%AD%D0%9A%D0%A1%D0%9F%D0%95%D0%A0%D0%A2%20-%20%D0%A1%D1%8D%D0%B2%D0%B8.jpg",
                    alt: "123",
                    art: "23141532-12314",
                    price: 400,
                    kolvo: 300,
                    OEM:[
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                        {name: "32134", href:"href12"},
                    ],
                    hreF:{
                        brand: "brandName",
                        art: "artName"
                    }
                },
            ]
        }
    },
    components:{
        productPopular: productPopular,
    }
}
</script>

<style lang="sass">
    .title-blog
        color: #2e414d
        font-size: 24px
        margin-bottom: 30px
    .blog-popular
        display: flex
        justify-content: space-between
    .link-more-center
        margin-top: 30px
        text-align: center
        .link-more
            color: #666
            font-size: 14px
</style>