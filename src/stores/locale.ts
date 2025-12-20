import { ref } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '@/i18n'
import { getInitialLocale } from '@helpers/local.helper'

export const useLocaleStore = defineStore('locale', () => {
    const locale = ref<'en' | 'fr'>(getInitialLocale())

    const setLocale = (newLocale: 'en' | 'fr') => {
        locale.value = newLocale
        i18n.global.locale.value = newLocale
    }

    return { locale, setLocale }
}, 
{ persist: true })