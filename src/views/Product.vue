<template>
  <div class="conteiner">
    <section class="section-product">
      <formFilterVue />
      <div class="content-product">
        <!-- <TableVue/> -->
        <blogVue />
      </div>
    </section>
  </div>
</template>

<script>
import formFilterVue from "../components/microComponents/formFilter.vue";
// import RowVue from '../components/microComponents/viewProduct.vue/Row.vue';
import blogVue from '../components/microComponents/viewProduct.vue/blog.vue';
// import TableVue from '../components/microComponents/viewProduct.vue/Table.vue';
 
export default {
  components: {
    formFilterVue: formFilterVue,
    // TableVue: TableVue,
    // RowVue:RowVue,
    blogVue:blogVue,
  }
};
</script>

<style lang="sass">
  @import "../sass/ViewProduct/index.sass"
  .section-product
    display: flex
  .content-product
    +size(10)
    margin-left: 30px
    
</style>
