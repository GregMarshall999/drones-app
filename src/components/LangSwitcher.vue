<template>
    <select 
        v-model="localeStore.locale" 
        @change="localeStore.setLocale(localeStore.locale)"
    >
        <option value="en">English</option>
        <option value="fr">Français</option>
    </select>
</template>

<script setup lang="ts">
import { useLocaleStore } from '@/stores/locale'

const localeStore = useLocaleStore()
</script>