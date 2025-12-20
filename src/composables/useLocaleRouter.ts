import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'

export function useLocaleRouter() {
  const route = useRoute()
  const router = useRouter()

  const currentLocale = computed(() => route.params.locale as string || 'en')

  /**
   * Generate a locale-aware path
   * @param path - Path without locale prefix (e.g., '/contact' or 'contact')
   * @param locale - Optional locale, defaults to current locale
   * @returns Locale-prefixed path (e.g., '/en/contact')
   */
  const localePath = (path: string, locale?: string): string => {
    const targetLocale = locale || currentLocale.value
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `/${targetLocale}${cleanPath ? '/' + cleanPath : ''}`
  }

  /**
   * Navigate to a route in a specific locale
   * @param to - Route location (can be string path or route object)
   * @param locale - Target locale
   */
  const switchLocale = (locale: 'en' | 'fr') => {
    const currentPath = route.path
    // Extract path without locale
    const pathSegments = currentPath.split('/').filter(Boolean)
    const pathWithoutLocale = pathSegments.slice(1).join('/')
    
    // Build new path with new locale
    const newPath = `/${locale}${pathWithoutLocale ? '/' + pathWithoutLocale : ''}`
    
    // Preserve query params
    router.push({
      path: newPath,
      query: route.query,
      hash: route.hash
    })
  }

  /**
   * Navigate to a locale-aware route
   * @param to - Route location
   * @param locale - Optional locale, defaults to current locale
   */
  const push = (to: RouteLocationRaw, locale?: string) => {
    if (typeof to === 'string') {
      const path = localePath(to, locale)
      router.push(path)
    } else {
      const path = 'path' in to && typeof to.path === 'string' 
        ? localePath(to.path, locale)
        : to
      router.push(path)
    }
  }

  return {
    currentLocale,
    localePath,
    switchLocale,
    push
  }
}

