import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from './public.routes'
import { isValidLocale, detectBrowserLocale } from '@/helpers/local.helper'
import { useLocaleStore } from '@/stores/locale'
import { i18n } from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Root redirect route - will redirect to locale-prefixed path
    {
      path: '/',
      redirect: () => {
        // Check for stored preference first
        if (globalThis.window !== undefined) {
          const stored = localStorage.getItem('locale')
          if (stored === 'en' || stored === 'fr') {
            return `/${stored}`
          }
        }
        // If no stored preference, detect from browser
        const detectedLocale = detectBrowserLocale()
        return `/${detectedLocale}`
      }
    },
    ...publicRoutes
  ],
})

// Navigation guard to sync locale with store and i18n
router.beforeEach((to, from, next) => {
  // Skip locale handling for root redirect
  if (to.path === '/') {
    next()
    return
  }

  const localeParam = to.params.locale as string

  // Validate locale
  if (!localeParam || !isValidLocale(localeParam)) {
    // Redirect to default locale with same path
    const pathWithoutLocale = to.path.split('/').slice(2).join('/')
    next(`/en${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`)
    return
  }

  // Sync locale with store and i18n
  const localeStore = useLocaleStore()
  if (localeStore.locale !== localeParam) {
    localeStore.setLocale(localeParam)
  }
  i18n.global.locale.value = localeParam

  // Update HTML lang attribute for SEO
  if (typeof document !== 'undefined') {
    document.documentElement.lang = localeParam
  }

  next()
})

export default router
