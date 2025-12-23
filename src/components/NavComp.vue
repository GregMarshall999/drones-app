<template>
    <nav>
        <RouterLink class="logo" :to="localePath('/')">
            <LogoIcon />
            <h1>DroneOps</h1>
        </RouterLink>

        <div class="links">
            <button>{{ $t('components.nav.services') }}</button>
            <button>{{ $t('components.nav.squadron') }}</button>
            <button>{{ $t('components.nav.previous-work') }}</button>
            <RouterLink :to="localePath('/contact')">{{ $t('components.nav.contact') }}</RouterLink>
            <RouterLink class="primary-link" :to="localePath('/booking')">{{ $t('components.nav.book') }}</RouterLink>
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

<style scoped lang="scss">
@import '@sass/main.scss';
@import '@sass/link.scss';

nav {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 2em;
    background-color: $bg-light;
    border-bottom: 1px solid $secondary-color;

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5em;
        color: $primary-color;
        text-decoration: none;

        h1 {
            font-size: 18px;
            font-family: $sg-font;
            color: $text-color;
        }
    }

    .links {
        display: flex;
        align-items: center;
        gap: 1em;

        button {
            background: none;
            border: none;
            color: $text-color;
            font-family: $sg-font;
            cursor: pointer;
            font-weight: bold;
        }

        a {
            color: $text-color;
            text-decoration: none;
            font-family: $sg-font;
            font-size: 14px;
            font-weight: bold;
        }

        .primary-link {
            @include link-style;
        }
    }
}

</style>