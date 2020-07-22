<template>
  <div class="home">
    <div class="conteiner">
      <SectionIndex/>
      <SectionReklama/>
      <SectionIndexGVue/>
      <SectionDealersVue/>
      <SectionContentVue/>
      <SectionAdvantageVue/>
      <SectionPopularVue/>
      <SectionNews/>
      <SectionAboutVue/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 
// import test  from "../axios/test";
import SectionIndex from "../components/home/SectionIndex"
import SectionReklama from '../components/home/SectionReklama'
import SectionIndexGVue from '../components/home/SectionIndexG.vue';
import SectionDealersVue from '../components/home/SectionDealers.vue';
import SectionContentVue from '../components/home/SectionContent.vue';
import SectionAdvantageVue from '../components/home/SectionAdvantage.vue';
import SectionPopularVue from '../components/home/SectionPopular.vue';
import  SectionNews from '../components/home/SectionNews.vue';
 

import { RepositoryFactory } from './../axios/RepositoryFactory'
import SectionAboutVue from '../components/home/SectionAbout.vue';
const UserRepository = RepositoryFactory.get('user')
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
    SectionAdvantageVue: SectionAdvantageVue,
    SectionPopularVue: SectionPopularVue,
    SectionNews: SectionNews,
    SectionAboutVue: SectionAboutVue,
    
  },
  created () {
    this.fetch();
  },
  methods: {
      async fetch (){
        //  console.log( await UserRepository.login());
        console.log( await UserRepository.protected());
    }
  }
}
</script>
