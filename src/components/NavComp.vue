<template>
    <nav class="background-light">
        <RouterLink class="logo" :to="localePath('/')">
            <LogoIcon />
            <h1>DroneOps</h1>
        </RouterLink>

        <div class="links">
            <button class="b-link">{{ $t('components.nav.services') }}</button>
            <button class="b-link">{{ $t('components.nav.squadron') }}</button>
            <button class="b-link">{{ $t('components.nav.previous-work') }}</button>
            <RouterLink :to="localePath('/contact')">{{ $t('components.nav.contact') }}</RouterLink>
            <RouterLink :to="localePath('/booking')">{{ $t('components.nav.book') }}</RouterLink>
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

<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 2em;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

h1 {
    font-size: 18px;
}

.links {
    display: flex;
    align-items: center;
    gap: 1em;
}

.b-link {
    background: none;
    border: none;
    color: #fafafa;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
}

</style>