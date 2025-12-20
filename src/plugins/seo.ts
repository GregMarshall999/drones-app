import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLocaleStore } from '@/stores/locale'

const SUPPORTED_LOCALES = ['en', 'fr'] as const

/**
 * Update HTML lang attribute
 */
function updateHtmlLang(locale: string) {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = locale
    }
}

/**
 * Update or create hreflang links for SEO
 */
function updateHreflangLinks(currentPath: string) {
    if (typeof document === 'undefined') return

    // Remove existing hreflang links
    const existingLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingLinks.forEach(link => link.remove())

    // Extract path without locale
    const pathSegments = currentPath.split('/').filter(Boolean)
    const pathWithoutLocale = pathSegments.slice(1).join('/')
    const basePath = pathWithoutLocale ? `/${pathWithoutLocale}` : ''

    // Create hreflang links for each supported locale
    SUPPORTED_LOCALES.forEach(loc => {
        const link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = loc
        link.href = `${globalThis.location.origin}/${loc}${basePath}`
        document.head.appendChild(link)
    })

    // Add x-default hreflang (points to default locale)
    const defaultLink = document.createElement('link')
    defaultLink.rel = 'alternate'
    defaultLink.hreflang = 'x-default'
    defaultLink.href = `${globalThis.location.origin}/en${basePath}`
    document.head.appendChild(defaultLink)
}

/**
 * Initialize SEO plugin
 */
export function initSEO() {
    const route = useRoute()
    const localeStore = useLocaleStore()

    // Initial setup
    updateHtmlLang(localeStore.locale)
    updateHreflangLinks(route.path)

    // Watch for locale changes
    watch(() => localeStore.locale, (newLocale) => {
        updateHtmlLang(newLocale)
        updateHreflangLinks(route.path)
    })

    // Watch for route changes
    watch(() => route.path, (newPath) => {
        updateHreflangLinks(newPath)
    })
}

