import { createI18n } from 'vue-i18n'
import en from '@i18n/en/components/nav.json'
import fr from '@i18n/fr/components/nav.json'

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, fr }
})