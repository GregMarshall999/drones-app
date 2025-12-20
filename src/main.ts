import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './routes'
import { i18n } from './i18n'
import { useLocaleStore } from './stores/locale'

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState())

app.use(pinia)
app.use(router)
app.use(i18n)

const localeStore = useLocaleStore()
i18n.global.locale.value = localeStore.locale

app.mount('#app')
