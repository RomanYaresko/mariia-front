import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCurrentUserRequest } from '@/requests/user/currentUser.request'
import type { User } from '@/validations/user.validation'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  const setUser = (nextUser: User | null): void => {
    user.value = nextUser
  }

  const fetchCurrentUser = async (): Promise<void> => {
    try {
      const response = await getCurrentUserRequest()
      if (response.success) {
        setUser(response.data)
      } else {
        setUser(null)
      }
    } catch {
      setUser(null)
    }
  }

  const login = (token: string): void => {
    localStorage.setItem(import.meta.env.VITE_TOKEN_STORAGE_KEY, token)
    fetchCurrentUser()
  }

  const logout = (): void => {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_STORAGE_KEY)
    setUser(null)
    window.location.reload()
  }

  return {
    user,
    setUser,
    fetchCurrentUser,
    login,
    logout
  }
})
