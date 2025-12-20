<template>
    <select v-model="localeStore.locale" @change="handleLocaleChange">
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
</template>

<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale'
import { useLocaleRouter } from '@/composables/useLocaleRouter'

const localeStore = useLocaleStore()
const { switchLocale } = useLocaleRouter()

const handleLocaleChange = () => {
    switchLocale(localeStore.locale)
}
</script>