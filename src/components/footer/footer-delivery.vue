<template>
  <div class="footer-delivery">
    <h2 class="footer-item">Доставка</h2>
    <div class="footer-blog-img">
      <a class="footer-elem-img" href="#"
        ><img src="@/assets/car-footer.png" alt="11" />
      </a>
    </div>
    <p class="footer-text">
      {{ text }}
    </p>
    <a href="#" class="footer-link-more">Подробнее</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Доставляем запчасти по всему миру с помощью собственного транспорта, Почты РФ и любых других служб доставки, доступных в нашей стране. Мы бесплатно отвозим заказы в 140 городов РФ и не берем деньги за доставку до терминала транспортной компании."
    };
  }
};
</script>

<style></style>
