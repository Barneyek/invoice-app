import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Register from "../views/Register.vue"
import SignIn from "../views/SignIn.vue"
import InvoiceView from "../views/InvoiceView.vue"
import Dashboard from "../views/Dashboard.vue"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      noUi: true,
      requiresAuth: false
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      noUi: true,
      requiresAuth: false
    },
  },
  {
    path: "/login",
    name: "Login",
    component: SignIn,
    meta: {
      noUi: true,
      requiresAuth: false
    },
  },
  {
    path: "/start",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
    meta: {
      requiresAuth: true
    }
  },
]

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener()
          resolve(user)
        },
        reject
    )
  })
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('Nie masz dostępu')
      next('/')
    }
  } else {
    next()
  }
})

export default router
