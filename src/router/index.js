import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewUserView from "../views/NewUserView.vue";
import CreateCategoryView from "../views/CreateCategoryView.vue";
import CreateSubCategoryView from "../views/CreateSubCategoryView.vue";
import CreateSubSubCategoryView from "../views/CreateSubSubCategoryView.vue";
import SettingsView from "../views/SettingsView.vue";
import CategoryView from "../views/CategoryView.vue";
import NotFound404View from "../views/NotFound404View.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/new-user",
    name: "new-user",
    component: NewUserView,
  },
  {
    path: "/create-category",
    name: "create-category",
    component: CreateCategoryView,
  },
  {
    path: "/create-sub-category",
    name: "create-sub-category",
    component: CreateSubCategoryView,
  },
  {
    path: "/create-sub-sub-category",
    name: "create-sub-sub-category",
    component: CreateSubSubCategoryView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/categories/:categoryId/:subcategoryId",
    name: "categories",
    component: CategoryView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound404View,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
