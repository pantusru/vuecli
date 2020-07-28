<template>
  <div class="footer-payment">
    <h2 class="footer-item">Оплата</h2>
    <div class="footer-blog-img">
      <a
        v-for="data in linksImg"
        :key="data.id"
        :href="data.href"
        class="footer-elem-img"
      >
        <img :src="data.src" :alt="data.alt" />
      </a>
    </div>
    <p class="footer-text">
      {{ text }}
    </p>
    <a href="" class="footer-link-more">Подробнее</a>
    <div class="footer-blog-img">
      <a
        v-for="data in linksImgManu"
        :key="data.id"
        :href="data.href"
        class="footer-elem-img"
        ><img :src="data.src" :alt="data.alt" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksImg: [
        { src: "img/cards.png", href: "", alt: "11" },
        { src: "img/cash.png", href: "", alt: "22" },
        { src: "img/bank.png", href: "", alt: "33" }
      ],
      linksImgManu: [
        { src: "img/paypal.png", href: "", alt: "11" },
        { src: "img/yandexmoney.png", href: "", alt: "22" },
        { src: "img/webmoney.png", href: "", alt: "33" },
        { src: "img/qiwi.png", href: "", alt: "33" }
      ],
      text:
        "Мы принимаем банковские карты Visa, MasterCard и Мир. А также предлагаем 10 других безопасных способов оплаты, включая безналичный расчет, электронные деньги и салоны связи. Возможна оплата товара при получении и отсрочка платежа."
    };
  }
};
</script>

<style lang="sass">
.footer-blog-img
    display: flex
    justify-content: space-between
.footer-payment
    img
        height: 100%
</style>
