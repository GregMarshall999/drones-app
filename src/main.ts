import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)
const pinia = createPinia()

pinia.use(createPersistedState())

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
