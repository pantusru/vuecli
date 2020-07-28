<template>
  <div class="conteiner">
    <div class="nav-header">
      <div class="box-company">
        <span class="focusPopul link-nav" v-on:click="getPopul"
          >Все запчасти</span
        >
        <div
          class="blog-popup"
          :class="{ activ: this.$store.state.checkPop.NavAll }"
        >
          <popupVue :ul="links" name="Бренды запчастей" href="" />
          <popupVue :ul="links" name="Марки автомобилей" href="" />
          <popupVue :ul="links" name="Категории запчастей" href="" />
          <a
            class="popul-link"
            :href="data.href"
            v-for="data in popList"
            :key="data.id"
          >
            {{ data.name }}
          </a>
        </div>
      </div>
      <router-link
        v-for="link in links"
        :key="link.id"
        class="link-nav"
        :to="link.href"
        >{{ link.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import popupVue from "../microComponents/popup.vue";

export default {
  data() {
    return {
      links: [
        // { name: "Все запчасти", href: "" },
        { name: "Оригинальные каталоги", href: "/catalog" },
        { name: "Иномарки", href: "" },
        { name: "ВАЗ", href: "" },
        { name: "КАМАЗ", href: "" },
        { name: "ГАЗ", href: "" },
        { name: "РТИ", href: "" },
        { name: "Популярное", href: "" },
        { name: "Новинки", href: "/product" }
      ],
      popList: [
        // { name: "Бренды запчастей", href: "" },
        // { name: "Марки автомобилей", href: "" },
        // { name: "Категории запчастей", href: "" },
        { name: "Масла и автохимия", href: "" },
        { name: "Антифризы, тосолы", href: "" },
        { name: "Каталоги оригинальных запчастей", href: "" }
      ]
    };
  },
  methods: {
    getPopul() {
      if (this.$store.state.checkPop.NavAll) {
        this.$store.state.checkPop.NavAll = false;
      } else {
        this.$store.state.checkPop.NavAll = true;
      }
    }
  },
  components: {
    popupVue: popupVue
  }
};
</script>

<style lang="sass">
.nav-header
    width: 85%
    display: flex
    justify-content: space-between
    .link-nav
        color: #555
</style>
