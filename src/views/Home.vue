<template>
  <div class="home">
    <div class="conteiner">
      <SectionIndex />
      <SectionReklama />
      <SectionIndexGVue />
      <SectionDealersVue />
      <SectionContentVue />
      <SectionAdvantageVue />
      <SectionPopularVue />
      <SectionNews />
      <SectionAboutVue />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import test  from "../axios/test";
import SectionIndex from "../components/home/SectionIndex";
import SectionReklama from "../components/home/SectionReklama";
import SectionIndexGVue from "../components/home/SectionIndexG.vue";
import SectionDealersVue from "../components/home/SectionDealers.vue";
import SectionContentVue from "../components/home/SectionContent.vue";
import SectionAdvantageVue from "../components/home/SectionAdvantage.vue";
import SectionPopularVue from "../components/home/SectionPopular.vue";
import SectionNews from "../components/home/SectionNews.vue";
import SectionAboutVue from "../components/home/SectionAbout.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    SectionIndex: SectionIndex,
    SectionReklama: SectionReklama,
    SectionIndexGVue: SectionIndexGVue,
    SectionDealersVue: SectionDealersVue,
    SectionContentVue: SectionContentVue,
    SectionAdvantageVue: SectionAdvantageVue,
    SectionPopularVue: SectionPopularVue,
    SectionNews: SectionNews,
    SectionAboutVue: SectionAboutVue
  }
};
</script>
