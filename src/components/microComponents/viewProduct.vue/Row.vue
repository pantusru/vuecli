<template>
  <div class="row-product">
    <div class="row-table"></div>
    <div class="data-blog">
      <a
        :href="data.href"
        class="row-blog"
        v-for="data in product"
        :key="data.id"
      >
        <h3 class="title">{{ data.name }}</h3>
        <div class="blog-content">
          <div class="product-row-img"><img :src="data.img" alt="" /></div>
          <div class="product-content">
            <div class="elem-product">
              <div class="elem-name">Бренд</div>
              <div class="elem-val">{{ data.bran }}</div>
            </div>
            <div class="elem-product">
              <div class="elem-name">Артикул</div>
              <div class="elem-val">{{ data.article }}</div>
            </div>
            <div class="elem-product">
              <div class="elem-name">Применяемость</div>
              <div class="elem-val">{{ data.article }}</div>
            </div>
            <div class="elem-product">
              <div class="elem-name">Категория</div>
              <div class="elem-val">Категория название</div>
            </div>
          </div>
          <div class="provider-content">
            <div class="elem-product">
              <div class="elem-name">Поставщик</div>
              <div class="elem-val">Категория название</div>
            </div>
            <div class="elem-product">
              <div class="elem-name">Срок поставки</div>
              <div class="elem-val">Категория название</div>
            </div>
            <div class="elem-product">
              <div class="elem-name">ОЕМ</div>
              <div class="elem-blog-oem">
                <div
                  v-for="dataset in data.oem"
                  :key="dataset.id"
                  class="elem-val"
                >
                  {{ dataset }}
                </div>
              </div>
            </div>
          </div>
          <div class="blog-price">
            <div class="elem-name">Цена</div>
            <div class="elem-val">{{ data.plice }} р</div>
            <div class="data-req">{{ data.term }}</div>
            <button class="bnt-buy">Купить</button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img:
            "https://www.pantus.ru/upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg",
          oem: ["123123", " 31253rfsfd", "dasd2133232"],
          plice: 300,
          term: "По запросу"
        },
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img:
            "https://www.pantus.ru/upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg",
          oem: ["123123", " 31253rfsfd", "dasd2133232"],
          plice: 300,
          term: "По запросу"
        },
        {
          bran: "Бренд",
          article: "артикуль",
          name: "название",
          img:
            "https://www.pantus.ru/upload/iblock/efb/1111-3501080 - Колодки тормозные передние Zollex ОКА - No Name.jpg",
          oem: ["123123", " 31253rfsfd", "dasd2133232"],
          plice: 300,
          term: "По запросу"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.row-product
  .blog-content
    display: flex
    justify-content: space-between
  .product-row-img
    width: 10%
  .product-content
      width: 30%
  .provider-content
    width: 30%
</style>
