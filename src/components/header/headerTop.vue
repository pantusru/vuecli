<template>
  <div class="header-top">
    <div class="conteiner">
      <div class="header-top-coll">
        <nav class="nav-top">
          <div class="box-company">
            <span class="link-top link-hover focusPopul" v-on:click="getPopul"
              >О компании</span
            >
            <div
              class="blog-popup"
              :class="{ activ: this.$store.state.checkPop.NavTop }"
            >
              <router-link
                class="popul-link"
                :to="data.href"
                v-for="data in popList"
                :key="data.id"
              >
                {{ data.name }}
              </router-link>
            </div>
          </div>
          <router-link
            v-for="link in linkTop"
            :key="link.id"
            class="link-top link-hover"
            :to="link.href"
            >{{ link.name }}
          </router-link>
        </nav>
        <div class="header-top-coll">
          <div class="head-phone">
            <a class="link-phone" href="tel:88005558721">8 (800) 555 87 21</a>
            Звонок по РФ - бесплатный
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTop: [
        // { name: "О компании", href: "" },
        { name: "Мобильное приложение", href: "" },
        { name: "Опт", href: "" },
        { name: "Доставка", href: "" },
        { name: "Оплата ", href: "" },
        { name: "Новости", href: "/news" },
        { name: "Помощь", href: "" },
        { name: "Контакты", href: "" }
      ],
      popList: [
        { name: "О компании", href: "1" },
        { name: "Работа в компании", href: "1" },
        { name: "Опт", href: "1" },
        { name: "Поставщикам", href: "" },
        { name: "Документы и реквизиты", href: "1" },
        { name: "Дилерская сертификация", href: "1" }
      ]
    };
  },
  methods: {
    getPopul() {
      if (this.$store.state.checkPop.NavTop) {
        this.$store.state.checkPop.NavTop = false;
      } else {
        this.$store.state.checkPop.NavTop = true;
      }
    }
  }
};
</script>

<style lang="sass">
.header-top
  padding: 5px 0
  background-color: #F7F7F7
  .header-top-coll
    display: flex
    justify-content: space-between
    .nav-top
      display: flex
      +size(8)
      .link-top
        cursor: pointer
        margin: 0 10px
        font-weight: 500
        font-size: 13px
        color: #4a4a4a
    .head-phone
      font-size: 13px
      color: #555
      .link-phone
        color: #436174
        font-weight: bold
.box-company
  position: relative
.blog-popup
  padding: 10px
  top: 25px
  left: 10px
  background-color: #fff
  z-index: 3
  position: absolute
  flex-direction: column
  display: none
  box-shadow: 0 10px 15px rgba(0,0,0,.3)
  min-width: 200px
  &.activ
    display: flex
.popul-link
  display: block
  position: relative
  padding: 10px 5px
  color: rgba(0,0,0,.8)
  font-size: 13px
  &:hover
    background: #f1f3f4
</style>
