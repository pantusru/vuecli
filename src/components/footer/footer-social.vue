<template>
  <div class="footer-social">
    <h2 class="footer-item">Мы в соцсетях</h2>
    <div class="footer-social-img">
      <a
        v-for="data in linksImg"
        :key="data.id"
        :href="data.href"
        class="footer-elem-img"
      >
        <img :src="data.src" :alt="data.alt" />
      </a>
    </div>
    <div class="footer-blog-app">
      <a href="" class="footer-app-svg"
        ><img src="img/googleplay.svg" alt=""
      /></a>
      <a href="" class="footer-app-svg"
        ><img src="img/appstore.svg" alt=""
      /></a>
    </div>
    <div class="footer-text">
      Интернет-магазин автозапчастей <br />
      Опт, розница, доставка
    </div>
    <div class="footer-contant">
      <a href="tel:8 800 555 8721" class="footer-link-tlf">8 800 555 8721 </a>
      <div class="copyright footer-text">
        © 2003–2020 ООО «ПАНТУС»<br />
        Все права защищены
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksImg: [
        { src: "img/vk.png", href: "", alt: "11" },
        { src: "img/youtub.png", href: "", alt: "22" },
        { src: "img/instargam.png", href: "", alt: "33" },
        { src: "img/telegram3.png", href: "", alt: "33" }
      ]
    };
  }
};
</script>

<style lang="sass">
.footer-social
    .footer-text
        line-height: 16px
        &.copyright
            margin: 0

    .footer-social-img
        display: flex
        margin-bottom: 25px
        .footer-elem-img
            margin: 0 3%
            // width: 35px
            &:first-child
                margin-left: 0
    .footer-blog-app
        .footer-app-svg
            display: block
            width: 50%
.footer-link-tlf
    font-size: 22px
    color: #2d414e
    font-weight: 700
</style>
