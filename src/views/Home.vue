<template>
  <div class="home">
    <div class="conteiner">
      <SectionIndex/>
      <SectionReklama/>
      <SectionIndexGVue/>
      <SectionDealersVue/>
      <SectionContentVue/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 
// import test  from "../axios/test";
import axios from '../axios/axios';
import SectionIndex from "../components/home/SectionIndex"
import SectionReklama from '../components/home/SectionReklama'
import SectionIndexGVue from '../components/home/SectionIndexG.vue';
import SectionDealersVue from '../components/home/SectionDealers.vue';
import SectionContentVue from '../components/home/SectionContent.vue';
 
let  Url  = "http://10.0.30.95:3000/test"
export default {
  name: 'Home',
  data(){
      return{

      }
  },
  components:{
    SectionIndex: SectionIndex,
    SectionReklama: SectionReklama,
    SectionIndexGVue: SectionIndexGVue,
    SectionDealersVue:SectionDealersVue,
    SectionContentVue:SectionContentVue,
    
  },
  created () {
    this.fetch();
  },
  methods: {
      async fetch (){
         axios.get(Url)
         .then(function(response){
           console.log(response);
         })
      }
  }
  
}
</script>
