import axios from 'axios'
import router from '@/router'
import { toast } from 'vue3-toastify'
import { ErrorResponseSchema } from '@/validations/general.validation'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(import.meta.env.VITE_TOKEN_STORAGE_KEY)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status

    if (status === 401) {
      localStorage.removeItem(import.meta.env.VITE_TOKEN_STORAGE_KEY)
      if (router.currentRoute.value.name !== 'login') {
        router.push({
          name: 'login',
          query: {
            redirect: router.currentRoute.value.fullPath
          }
        })
      }
    }

    return error.response
  }
)

export default api
