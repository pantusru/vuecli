<template>
    <section class="section-dealers">
        <h2 class="title-dealers">Мы официальные дилеры 45-ти производителей автозапчастей</h2>
        <button class="left"  v-on:click="go_left"><img src="@/assets/arrow.png" alt=""></button>
        <button class="right" v-on:click="go_right"><img src="@/assets/arrow.png" alt=""></button>
        <div class="blog-dealerts">
            <div class="box-dealerts-img">
                <div class="box-dealerts-img-full" :style="{ marginLeft: (activ * -400) + 'px'} ">
                    <img v-for="data in img" :key="data.id" :src="data.src" :alt="data.alt" :data-id="data.id">
                </div>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            activ: 0,
            max:6,
            img:[
                {src: "img/trek.png", alt: "", id:"1"},
                {src: "img/trek.png", alt: "", id:"2"},
                {src: "img/trek.png", alt: "", id:"3"},
                {src: "img/trek.png", alt: "", id:"4"},
                {src: "img/trek.png", alt: "", id:"5"},
                {src: "img/trek.png", alt: "", id:"6"},
                {src: "img/trek.png", alt: "", id:"7"},
                {src: "img/trek.png", alt: "", id:"8"},
                {src: "img/trek.png", alt: "", id:"9"},
                {src: "img/trek.png", alt: "", id:"10"},
                {src: "img/trek.png", alt: "", id:"11"},
                {src: "img/trek.png", alt: "", id:"12"},
                {src: "img/trek.png", alt: "", id:"13"},
                {src: "img/trek.png", alt: "", id:"14"},
                {src: "img/trek.png", alt: "", id:"15"},
                {src: "img/trek.png", alt: "", id:"16"},
                {src: "img/trek.png", alt: "", id:"17"},
                {src: "img/trek.png", alt: "", id:"18"},
                {src: "img/trek.png", alt: "", id:"19"},
                {src: "img/trek.png", alt: "", id:"20"},
                {src: "img/trek.png", alt: "", id:"21"},
                {src: "img/trek.png", alt: "", id:"22"},
                {src: "img/trek.png", alt: "", id:"23"},
                {src: "img/trek.png", alt: "", id:"24"},

            ]
        }
    },
    methods:{
        go_left: function(){
           // let a = true;
           if(this.activ == 0){
               this.activ = this.max;
           }else{
               this.activ--;
           }
            console.log(this.activ);
        },
        go_right: function(){
            if(this.activ == this.max){
                this.activ = 0;
            }else{  
                this.activ++;
            }
            console.log(this.activ);
        }
    }
}
</script>

<style lang="sass">
    .section-dealers
        position: relative
        button
            top: 55%
            position: absolute
            background-color: transparent
            &.right
                right: -25px
                transform: rotate(180deg)
            &.left
                left: -25px
    .title-dealers
        text-align: center
        margin-bottom: 30px
    .blog-dealerts
        .box-dealerts-img
            position: relative
            display: block
            overflow: hidden
            position: relative
        .box-dealerts-img-full
            display: flex
                
</style>