<template>
  <section class="section-news">
    <div class="conteiner">
      <newsCategoryVue />
      <div class="center-title-news">
        <h1 class="news-title"> {{ this.$route.params.name || "Все новости" }} </h1>
      </div>
      <div class="blog-news-index">
        <NewsIndexVue 
          v-for="data in indexNews" 
          :key="data.id"
          :data="data"
        />
      </div>
      <div class="blog-news-full">
         <NewsIndexVue 
          v-for="data in FullNews" 
          :key="data.id"
          :data="data"
        />
      </div>
    </div>
  </section>
</template>

<script>
import newsCategoryVue from "../components/microComponents/news/news-category.vue";
import NewsIndexVue from '../components/microComponents/News-index.vue';
export default {
  created(){
    console.log(this.$route.params.name)
  },
  data() {
    return {
      indexNews:[{
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
        {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        }
      ],
      FullNews:[
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
         {
           href: "",
          img: "https://www.pantus.ru/upload/iblock/934/feature-new-01.png",
          title: "Новинки! Ремкомплекты на гранту и приору!",
          year: "2020",
          day: "10 июня",
          text:
            "В ассортименте нашего магазина появились новые ремкомплекты аэродинамических щитков на гранту, ремкомплекты грязешумоизоляционных заглушек проема капота и крыла на гранту и р"
        },
      ]
    }
  },
  components: {
    newsCategoryVue: newsCategoryVue,
    NewsIndexVue:NewsIndexVue,
  }
};
</script>

<style lang="sass">
  .blog-news-index
    +row-flex()
    justify-content: space-between
    margin-bottom: 60px
  .blog-news-full
    +row-flex()
  .center-title-news
    margin-top: 30px
    margin-bottom: 30px
    .news-title
      text-align: center
      font-size: 30px
</style>
