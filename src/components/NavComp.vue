<template>
    <nav>
        <section class="logo">

        </section>

        <section class="links">
            <RouterLink :to="localePath('/')">{{ $t('components.nav.homePage') }}</RouterLink>
            <RouterLink :to="localePath('/contact')">{{ $t('components.nav.contactPage') }}</RouterLink>
            <RouterLink :to="localePath('/request')">{{ $t('components.nav.requestPage') }}</RouterLink>
        </section>

        <section class="lang-switcher">
            <LangSwitcher />
        </section>
    </nav>
</template>

<script setup lang="ts">
import LangSwitcher from '@components/LangSwitcher.vue'
import { useLocaleRouter } from '@/composables/useLocaleRouter'

const { localePath } = useLocaleRouter()
</script>