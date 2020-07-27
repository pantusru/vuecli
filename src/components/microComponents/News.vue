<template>
  <div class="elem-news">
    <div class="blog-elem-new">
      <div class="img-new">
        <img :src="img" alt="11" />
      </div>
      <div class="content-new">
        <div class="data-new">
          <div class="date-day-new">{{ day }}</div>
          <div class="date-year-new">{{ year }}</div>
        </div>
        <a :href="href" class="title-new"> {{ title }} </a>
      </div>
    </div>
    <div class="text-new">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "year", "day", "text", "href"]
};
</script>

<style lang="sass">
.elem-news
    +size(4)
    margin-bottom: 50px
.blog-elem-new
    display: flex
    margin-bottom: 10px
.img-new
    +size(4)
.content-new
    margin-left: 15px
.data-new
    display: flex
    align-items: center
.date-day-new
    font-size: 18px
    font-weight: 600
    margin-right: 5px
    color: #ca3b45
.date-year-new
    font-size: 12px
    color: #727275
.title-new
    color: #436174
    text-decoration: underline
    font-size: 14px
    &:hover
        text-decoration: none
</style>
