<template>
    <section class="section-dealers">
        <h2 class="title-dealers">Мы официальные дилеры 45-ти производителей автозапчастей</h2>
        <div class="blog-dealerts">
            <button class="left"><img src="@/assets/arrow.png" alt=""></button>
            <img v-for="data in img" :key="data.id" :src="data.src" :alt="data.alt">
            <button class="right"><img src="@/assets/arrow.png" alt=""></button>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            img:[
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
                {src: "img/trek.png", alt: ""},
            ]
        }
    }
}
</script>

<style lang="sass">
    .title-dealers
        text-align: center
        margin-bottom: 30px
    .blog-dealerts
        display: grid
        grid-template-columns: repeat(7, 1fr)
        grid-gap: 30px  
        position: relative
        button
            top: 10%
            position: absolute
            background-color: transparent
            &.right
                right: -25px
                transform: rotate(180deg)
            &.left
                left: -25px
                
</style>