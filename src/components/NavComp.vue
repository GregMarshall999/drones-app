<template>
    <nav>
        <section class="logo">

        </section>

        <section class="links">
            <RouterLink to="/">{{ $t('components.nav.homePage') }}</RouterLink>
        </section>

        <section class="lang-switcher">
            <LangSwitcher />
        </section>
    </nav>
</template>

<script setup lang="ts">
import LangSwitcher from '@components/LangSwitcher.vue'
</script>