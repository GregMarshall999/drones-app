<template>
    <nav>
        <div class="logo">
            <RouterLink :to="localePath('/')">
                <LogoIcon />
                <h1>Drone Op</h1>
            </RouterLink>
        </div>

        <div class="links">
            <button>{{ $t('components.nav.services') }}</button>
            <button>{{ $t('components.nav.squadron') }}</button>
            <button>{{ $t('components.nav.previous-work') }}</button>
            <RouterLink :to="localePath('/contact')">{{ $t('components.nav.contact') }}</RouterLink>
            <RouterLink :to="localePath('/booking')">{{ $t('components.nav.book') }}</RouterLink>
        </div>

        <div class="lang-switcher">
            <LangSwitcher />
        </div>
    </nav>
</template>

<script setup lang="ts">
import LangSwitcher from '@components/LangSwitcher.vue'
import LogoIcon from '@components/icon/LogoIcon.vue'
import { useLocaleRouter } from '@/composables/useLocaleRouter'

const { localePath } = useLocaleRouter()
</script>