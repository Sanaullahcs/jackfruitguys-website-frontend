import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";

// Import your components (if not auto-imported)
import Home from "../components/singlePageWeb/HomeCom.vue";
import About from "../components/singlePageWeb/AboutUs.vue";
import Sustainability from "../components/singlePageWeb/SustainableCom.vue";
import Contact from "../components/singlePageWeb/Contact.vue";
import Benefits from "../components/singlePageWeb/Benefits.vue";
import Product from "../components/singlePageWeb/Product.vue";
import Experience from "../components/singlePageWeb/Experience.vue";
import Presence from "../components/singlePageWeb/Presence.vue";
import Partners from "../components/singlePageWeb/Partners.vue";
import Blogs from "../components/singlePageWeb/Blogs.vue";
import Recipes from "../components/singlePageWeb/Recipes.vue";
import BlogDetail from "../components/singlePageWeb/BlogDetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/sustainability", component: Sustainability },
    { path: "/benefits", component: Benefits },
    { path: "/contact", component: Contact },
    { path: "/products", component: Product },
    { path: "/experience", component: Experience },
    { path: "/presence", component: Presence },
    { path: "/partner", component: Partners },
    { path: "/blog", component: Blogs },
    {
      path: "/blog/:id",
      name: "BlogDetail",
      component: BlogDetail,
      props: true,
    },
    { path: "/recipe", component: Recipes },
  ],
});

router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
