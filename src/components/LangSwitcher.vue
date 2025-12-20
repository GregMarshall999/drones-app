<template>
    <select v-model="localeStore.locale">
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useLocaleStore } from '@/stores/locale'

const localeStore = useLocaleStore()

watch(() => localeStore.locale, (newLocale) => {
    localeStore.setLocale(newLocale)
})
</script>