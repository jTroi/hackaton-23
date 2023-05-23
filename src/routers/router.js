import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/old',
    name: 'Home',
    component: () => import("../pages/PageSeasons.vue")
  },
  {
    path: '/',
    name: 'preferences',
    component: () => import("../pages/Preferences.vue")
  },
  {
    path: '/Login',
    name: 'Home2',
    component: () => import("../pages/login.vue")
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;