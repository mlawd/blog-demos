import { createWebHistory, createRouter } from "vue-router";
import { watch } from "vue";
import Home from "../views/Home.vue";
import { user, initialised } from "@/components/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { public: true },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
    meta: { public: true },
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("../views/Protected.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (initialised.value) {
    if (!to.matched.some(record => record.meta.public) && !user.value) {
      return next("/login");
    }

    next();
  } else {
    watch(
      () => initialised.value,
      newVal => {
        if (newVal) {
          if (!to.matched.some(record => record.meta.public) && !user.value) {
            return next("/login");
          }

          next();
        }
      }
    );
  }
});

export default router;
