export const getInitialLocale = (): 'en' | 'fr' => {
    if (globalThis.window !== undefined) {
        const stored = localStorage.getItem('locale')
        if (stored === 'en' || stored === 'fr') {
            return stored
        }
    }
    return 'en'
}