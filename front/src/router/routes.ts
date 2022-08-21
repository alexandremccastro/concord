import { IRoute } from "@/core/interfaces/iroute.interface";
import Login from "@/views/auth/Login.vue";
import Center from "@/views/app/Center.vue";
import Register from "@/views/auth/Register.vue";
import ResetPassword from "@/views/auth/password/ResetPassword.vue";
import RequestReset from "@/views/auth/password/RequestReset.vue";

const routes: Array<IRoute> = [
  {
    name: 'Login',
    path: '/',
    redirect: '/login',
    meta: {
      requiresAuth: false,
    },
    component: Center,
    children: [
      {
        name: 'Login',
        path: '/login',
        meta: {
          title: 'Login',
          requiresAuth: false,
        },
        component: Login
      },
      {
        name: 'Register',
        path: '/register',
        meta: {
          title: 'Register',
          requiresAuth: false,
        },
        component: Register
      },
      {
        name: 'RequestReset',
        path: '/request-reset',
        meta: {
          title: 'Request Reset',
          requiresAuth: false,
        },
        component: RequestReset
      },
      {
        name: 'UpdatePassword',
        path: '/reset-password/:token',
        meta: {
          title: 'Update Password',
          requiresAuth: false,
        },
        component: ResetPassword
      },
    ]
  }
]

export default routes