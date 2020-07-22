<template>
  <div class="banner">
      <div class="banner-box">
            <a  class="banner_img" :href="data.href" v-for="data in img" :key="data.id" :class="[{show: data.id == idActiv }]">
                <img :src="data.src" :alt="data.alt">
          </a>
      </div>
    </div>
</template>

<script>
export default {
    props:["img"],
    data(){
        return{
            idActiv: 1,
            margin: 25
            
        }
    },
    methods:{
        check: function() {
            if(this.idActiv == this.img.length) {
                this.idActiv = 1;
            }else{
                this.idActiv++;
            }
        }
    },
    created(){
        setInterval(() => {
            this.check();
        }, 3000);
    },
    computed:{
        
    }
}
</script>

<style lang="sass">
    .banner
        +size(3)
    .banner-box
        transition: all 2s ease
        position: relative
        display: flex
        justify-content: flex-start
    .banner_img
        display: none
    .show
        display: block
</style>