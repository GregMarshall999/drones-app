export const getInitialLocale = (): 'en' | 'fr' => {
    if (globalThis.window !== undefined) {
        const stored = localStorage.getItem('locale')
        if (stored === 'en' || stored === 'fr') {
            return stored
        }
    }
    return 'en'
}

export const isValidLocale = (locale: string): locale is 'en' | 'fr' => {
    return locale === 'en' || locale === 'fr'
}

export const detectBrowserLocale = (): 'en' | 'fr' => {
    if (typeof navigator === 'undefined') {
        return 'en'
    }

    const browserLang = navigator.language || (navigator as any).userLanguage
    if (!browserLang) {
        return 'en'
    }

    // Extract base language code (e.g., 'en' from 'en-US', 'fr' from 'fr-FR')
    const baseLang = browserLang.split('-')[0].toLowerCase()

    // Map to supported locales
    if (baseLang === 'fr') {
        return 'fr'
    }

    // Default to English for all other languages
    return 'en'
}

export const getLocaleFromPath = (path: string): 'en' | 'fr' | null => {
    const segments = path.split('/').filter(Boolean)
    if (segments.length === 0) {
        return null
    }

    const firstSegment = segments[0]
    if (firstSegment && isValidLocale(firstSegment)) {
        return firstSegment
    }

    return null
}