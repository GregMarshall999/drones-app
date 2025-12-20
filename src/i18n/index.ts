import { createI18n } from 'vue-i18n'
import en from '@i18n/en/components/nav.json'
import fr from '@i18n/fr/components/nav.json'
import { getInitialLocale } from '@helpers/local.helper'

export const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages: { en, fr }
})