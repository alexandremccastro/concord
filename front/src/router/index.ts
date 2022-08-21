import {createRouter, createWebHistory, Router} from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  const title = to.meta.title as string

  if (title) {
    document.title = process.env.VUE_APP_NAME + ' | ' + to.meta.title as string
  } else {
   document.title = process.env.VUE_APP_NAME
  }
})

export default router
