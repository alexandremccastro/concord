import { IRoute } from "@/core/interfaces/iroute.interface";
import Center from "@/views/app/Center.vue";

import Error404 from '@/views/errors/Error404.vue';
import { AUTH_ROUTES } from "@/router/modules/auth";


const routes: Array<IRoute> = [
  AUTH_ROUTES,
  {
    path: '/',
    meta: {
      requiresAuth: false,
    },
    component: Center,
    children: [
      {
        name: 'NotFound',
        children: [],
        path: '/:pathMatch(.*)*',
        meta: {
          title: 'Not Found',
          requiresAuth: false
        },
        component: Error404
      }
    ]
  }
]

export default routes