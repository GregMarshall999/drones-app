import { ref } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@/i18n'

export const useLocaleStore = defineStore('locale', () => {
    const locale = ref<'en' | 'fr'>('en')

    const setLocale = (newLocale: 'en' | 'fr') => {
        locale.value = newLocale
        i18n.global.locale.value = newLocale
        localStorage.setItem('locale', newLocale)
    }

    return { locale, setLocale }
}, 
{ persist: true })