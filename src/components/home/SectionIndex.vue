<template>
  <section class="section-index">
    <div class="content-categoria">
      <categoriaVue
        title="Автозапчасти ВАЗ"
        :ul="categoriaUrl[0]"
        src="img/home-car-1.png"
        alt="1"
      />
      <div class="blog-mini-categoria">
        <h2>
          <a href="" class="categoria-title link-hover">Шланги поливочные</a>
        </h2>
        <div class="mini-categoria-img">
          <img src="@/assets/home-car-2.png" alt="" />
        </div>
      </div>
      <categoriaVue
        title="Запчасти для корейских Авто"
        :ul="categoriaUrl[1]"
        src="img/home-car-3.png"
        alt="1"
      />
      <div class="blog-mini-categoria">
        <h2>
          <a href="" class="categoria-title link-hover">Запчасти Renault</a>
        </h2>
        <div class="mini-categoria-img">
          <img src="@/assets/home-car-4.png" alt="" />
        </div>
      </div>
    </div>
    <banner :img="dataImg" />
  </section>
</template>

<script>
import categoriaVue from "../microComponents/categoria.vue";
import banner from "../microComponents/banner.vue";
export default {
  data() {
    return {
      dataImg: [
        {
          src: "https://www.pantus.ru/bitrix/images/site/optbanner2.jpg",
          alt: "12",
          href: "11",
          id: 1
        },
        {
          src:
            "https://www.pantus.ru/bitrix/images/site/banner.1millionproducts.jpg",
          alt: "12",
          href: "11",
          id: 2
        },
        {
          src: "https://www.pantus.ru/bitrix/images/site/appbanner.jpg",
          alt: "12",
          href: "11",
          id: 3
        }
      ],
      categoriaUrl: [
        [
          { name: "Запчасти на Приору", href: "" },
          { name: "Запчасти на Весту", href: "" },
          { name: "Все запчасти ВАЗ", href: "" }
        ],
        [
          { name: "Daewoo", href: "" },
          { name: "Hyundai", href: "" },
          { name: "Kia", href: "" }
        ]
      ]
    };
  },
  components: {
    categoriaVue: categoriaVue,
    banner: banner
  }
};
</script>

<style lang="sass">
.section-index
    display: flex
    justify-content: space-between
    flex-wrap: wrap
.content-categoria
    +size(9)
    display: grid
    grid-template-columns: 2fr 1fr
    grid-gap: 35px
.blog-mini-categoria
    box-shadow: 10px 17px 30px rgba(0, 0, 0, 0.05)
</style>
