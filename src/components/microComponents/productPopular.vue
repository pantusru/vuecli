<template>
  <div class="elem-product-popular">
    <div class="contetn-product-popular">
        <div class="title-product-popular">{{title}}</div>
        <div class="img-product-popular">
            <img :src="src" :alt="alt">
        </div>
        <div class="row-product-popular">
            <div class="column-product-popular">Бренд</div>
            <a :href="href.brand" class="column-result-product-popular">{{ brand }}</a>
        </div>
        <div class="row-product-popular">
            <div class="column-product-popular">Артикуль</div>
            <a :href="href.art" class="column-result-product-popular">{{ art }}</a>
        </div> 
        <div class="row-product-popular">
            <div class="column-product-popular">OEM</div>
            <div class="column-result-product-popular">
                <a :href="data.href" class="elem-result-product-popular" v-for="data in OEM" :key="data.id">
                {{ data.name }}
                </a>
            </div>
        </div>
    </div>
    <div class="data-product-popular">
    </div>
  </div>
</template>

<script>
export default {
    props:[
        "title", "src", "alt", "brand", "art", "OEM", "kolvo", "price" , "href"
    ]
        
}
</script>

<style>

</style>