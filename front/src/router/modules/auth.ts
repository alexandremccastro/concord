import {IRoute} from "@/core/interfaces/iroute.interface";
import Center from "@/views/app/Center.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import RequestReset from "@/views/auth/password/RequestReset.vue";
import ResetPassword from "@/views/auth/password/ResetPassword.vue";


export const AUTH_ROUTES: IRoute = {
  path: '/',
  component: Center,
  meta: {
    requiresAuth: false,
  },
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