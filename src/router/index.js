import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "",
    meta: { title: "首页" },
    component: () => import("@/components/Layout/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        meta: { title: "首页" },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "product",
        name: "product",
        meta: { title: "商品" },
        component: () => import("@/views/product/index.vue"),
      },
      {
        path: "product/detail",
        name: "productDetail",
        meta: { title: "商品详情" },
        component: () => import("@/views/product/detail.vue"),
      },
      {
        path: "category",
        name: "Category",
        meta: { title: "分类" },
        component: () => import("@/views/category/index.vue"),
      },
      {
        path: "cart",
        name: "Cart",
        meta: { title: "购物车" },
        component: () => import("@/views/cart/index.vue"),
      },
      {
        path: "my",
        name: "My",
        meta: { title: "我的" },
        component: () => import("@/views/my/index.vue"),
      },
      {
        path: "login",
        name: "Login",
        meta: { title: "登录" },
        component: () => import("@/views/public/login.vue"),
      },
      {
        path: "my/info",
        name: "MyInfo",
        meta: { title: "我的资料" },
        component: () => import("@/views/my/info/index.vue"),
      },
      {
        path: "my/info/edit",
        name: "MyInfoEdit",
        meta: { title: "我的资料" },
        component: () => import("@/views/my/info/edit.vue"),
      },
      {
        path: "my/address",
        name: "MyAddress",
        meta: { title: "我的地址" },
        component: () => import("@/views/my/address/index.vue"),
      },
      {
        path: "my/address/edit",
        name: "MyAddressEdit",
        meta: { title: "地址编辑" },
        component: () => import("@/views/my/address/edit.vue"),
      },
      {
        path: "my/setting",
        name: "MySetting",
        meta: { title: "我的地址" },
        component: () => import("@/views/my/setting/index.vue"),
      },
      {
        path: "/:catchAll(.*)",
        meta: { title: "404" },
        component: () => import("@/views/public/404.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
