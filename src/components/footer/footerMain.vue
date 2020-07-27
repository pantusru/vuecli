<template>
  <div class="footer-flex">
    <footerPantusVue />
    <footerPaymentVue />
    <footerDeliveryVue />
    <footerSocialVue />
  </div>
</template>

<script>
import footerPantusVue from "./footer-Pantus.vue";
import footerPaymentVue from "./footer-payment.vue";
import footerDeliveryVue from "./footer-delivery.vue";
import footerSocialVue from "./footer-social.vue";
export default {
  components: {
    footerPantusVue: footerPantusVue,
    footerPaymentVue: footerPaymentVue,
    footerDeliveryVue: footerDeliveryVue,
    footerSocialVue: footerSocialVue
  }
};
</script>

<style lang="sass">
@import "@/sass/footer"
.footer-flex
    display: flex
    justify-content: space-between
.footer-pantus
    +size(3)
.footer-payment, .footer-delivery, .footer-social
    +size(3)
</style>
