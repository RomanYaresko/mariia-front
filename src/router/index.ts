import { useUserStore } from '@/stores/user.store'
import FinishView from '@/views/FinishView.vue'
import LoginView from '@/views/LoginView.vue'
import MainView from '@/views/MainView.vue'
import MariiaStepView from '@/views/MariiaStepView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/mariia-step/:id',
      name: 'mariia-step',
      component: MariiaStepView,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView,
      meta: {
        authOnly: true
      }
    }
  ]
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_STORAGE_KEY)
  if (!userStore.user && token) {
    await userStore.fetchCurrentUser()
  }

  if (to.meta.authOnly && !userStore.user) {
    return {
      name: 'login',
      query: { redirect: to.fullPath }
    }
  }

  if (to.meta.guestOnly && userStore.user) {
    return {
      name: 'main'
    }
  }
})

export default router
