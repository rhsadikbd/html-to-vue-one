import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/pages/HomePage.vue";
import AboutPage from "@/views/pages/AboutPage.vue";
import ServicesPage from "@/views/pages/ServicesPage.vue";
import PortfolioPage from "@/views/pages/PortfolioPage.vue";
import BlogPage from "@/views/pages/BlogPage.vue";
import ContactPage from "@/views/pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesPage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
  ],
});

export default router;
