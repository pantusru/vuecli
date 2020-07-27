<template>
  <div class="conteiner">
    <section class="section-catalog">
      <div class="blog-catalog" v-for="data in catalog" :key="data.id">
        <a :href="data.href" class="box-catalog">
          <div class="img-catalog"><img :src="data.src" alt="" /></div>
          <h2 class="title-catalog">{{ data.name }}</h2>
        </a>
        <div class="blog-modelCar">
          <a
            :href="dataModel.href"
            class="box-modelCar"
            v-for="dataModel in data.models"
            :key="dataModel.id"
          >
            <div class="modelCar-img">
              <img :src="dataModel.src" alt="" />
            </div>
            <div class="modelCar-name">{{ dataModel.name }}</div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [
        {
          href: "Легковые",
          name: "Легковые (отечественные)",
          src: "https://storage.yandexcloud.net/acat/main/types/1.png",
          models: [
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "ГАЗ",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/37.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "ГАЗ",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/37.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            }
          ]
        },
        {
          href: "Легковые",
          name: "Легковые (отечественные)",
          src: "https://storage.yandexcloud.net/acat/main/types/1.png",
          models: [
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛАЗЛ КАЗ ЛКАЗЛКК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "ГАЗ",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/37.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            },
            {
              name: "ГАЗ",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/37.png"
            },
            {
              name: "АЗЛК",
              href: "",
              src: "https://storage.yandexcloud.net/acat/main/marks/63.png"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.blog-catalog
    margin-bottom: 50px
.box-catalog
    display: flex
    align-items: center
    margin-bottom: 30px
.title-catalog
    margin-left: 15px
    font-size: 18px
    color: #515151
    font-weight: 600
    text-decoration: underline
.blog-modelCar
    display: grid
     justify-content: center
     align-items: center
     align-self: center
    grid-template-columns: repeat(6, 1fr)
    grid-gap: 50px
.box-modelCar

.modelCar-img
    +size(6)
    margin: 0 auto
.modelCar-name
    text-align: center
</style>
