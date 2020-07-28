import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import Product from "../views/Product.vue";
import News from "../views/News.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/product",
    name: "Product",
    component: Product
  },
  {
    path: "/news",
    name: "News",
    component: News
  },
  {
    path: "/news/:name",
    name: "News",
    component: News
  },

];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
