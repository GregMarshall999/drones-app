<template>
    <main class="home-page">
        <section class="hero">
            <article class="moto">
                <span v-if="version === '4.0'" class="availability">Available Globally</span>
                <span v-else class="availability">Available Over Europe</span>

                <h1>ELEVATE YOUR PERSPECTIVE</h1>

                <p v-if="version === '2.0'">Professional Drone Operator on Demand. From high-speed FPV to cinematic 8K, capturing shots others can't reach.</p>
                <p v-else-if="version === '3.0'">Professional Drone Operators on Demand. From high-speed FPV to cinematic 8K, we capture shots where others can't reach.</p>
                <p v-else>Professional Drone Operator on Demand. From high-speed FPV to crips 4K, we capturing shots others can't reach.</p>

                <div class="moto-actions">
                    <RouterLink :to="localePath('/booking')">Book a Pilot</RouterLink>
                    <button>
                        <span class="material-symbols-outlined">play_circle</span>
                        Watch Reel
                    </button>
                </div>
            </article>

            <article class="operator-stats">
                <div class="op-stat-item">
                    <TextIcon>
                        <FlightTimeIcon />
                        <template #text>
                            FLIGHT TALY
                        </template>
                    </TextIcon>
                    <span>24 Flights</span>
                    <!-- TODO: Add tooltip of flight time -->
                    <!-- TODO: Add tooltip of flown distance -->
                </div>

                <div v-if="version === '2.0'" class="op-stat-item">
                    <TextIcon>
                        <ProjectsIcon />
                        <template #text>
                            PROJECTS
                        </template>
                    </TextIcon>
                    <span>N Projects</span>
                </div>

                <div class="op-stat-item">
                    <TextIcon>
                        <SafetyIcon />
                        <template #text>
                            SAFETY RATING
                        </template>
                    </TextIcon>
                    <span>100%</span>
                </div>

                <div class="op-stat-item">
                    <TextIcon>
                        <CountriesIcon />
                        <template #text>
                            COUNTRIES
                        </template>
                    </TextIcon>
                    <span>3</span> <!-- TODO: Add tooltip of available countries -->
                </div>
            </article>
        </section>

        <section class="videos"></section>

        <section class="greg-presentation"></section>

        <section class="expertise">
            <article class="exp-header">
                <span>OUR EXPERTISE</span>

                <h2>Specialized Aerial Solutions</h2>

                <div>
                    <p v-if="version === '2.0'">We don't just fly drones: we caputure data and art. Choose the service that fits your project needs.</p>
                    <p v-else>Flying drones is one thing. Capturing data and art is another. Choose the service that fits your project needs.</p>
                </div>
            </article>
            
            <article class="services">
                <ServiceCard>
                    <template #image>
                        Event Image
                    </template>
                    <template #title>
                        <TextIcon>
                            <EventIcon />
                            <template #text>
                                Events & Festivals
                            </template>
                        </TextIcon>
                    </template>
                    <p>Cinematic live coverage for large-scale festivals, concerts and private events.</p>
                </ServiceCard>

                <ServiceCard>
                    <template #image>
                        Estate Image
                    </template>
                    <template #title>
                        <TextIcon>
                            <EstateIcon />
                            <template #text>
                                Real Estate
                            </template>
                        </TextIcon>
                    </template>
                    <p>4K aerial tours and photography for premium residential and commercial listings.</p>
                </ServiceCard>

                <ServiceCard>
                    <template #image>
                        3D Scan Image
                    </template>
                    <template #title>
                        <TextIcon>
                            <ScanIcon />
                            <template #text>
                                3D Scans
                            </template>
                        </TextIcon>
                    </template>
                    <p>High-precision photography, LIDAR, and architectural mapping for surveying.</p>
                </ServiceCard>

                <ServiceCard>
                    <template #image>
                        Sport Image
                    </template>
                    <template #title>
                        <TextIcon>
                            <SportIcon />
                            <template #text>
                                Sports FPV
                            </template>
                        </TextIcon>
                    </template>
                    <p>High-speed FPV tracking for motorsports, cycling and dynamic action shots.</p>
                </ServiceCard>

                <ServiceCard>
                    <template #image>
                        Media Image
                    </template>
                    <template #title>
                        <TextIcon>
                            <MediaIcon />
                            <template #text>
                                Social Media
                            </template>
                        </TextIcon>
                    </template>
                    <p>Optimized vertical 9:16 content for TikTok, Reels and high-engagement social campaigns.</p>
                </ServiceCard>

                <div class="custom-service">
                    <span class="plus">+</span>
                    <h3>Custom Project?</h3>
                    <p>Have a specific vision? Our pilots are ready for any challenge.</p>
                    <RouterLink :to="localePath('/contact')">Contact Us</RouterLink>
                </div>
            </article>
        </section>

        <section class="drones">
            <article class="drones-header">
                <h2>Our Squadron</h2>
                <button>Left Arrow</button>
                <button>Right Arrow</button>
            </article>

            <article class="drones-carousel">

            </article>
        </section>

        <section class="quotes">
            <h2>Ready to fly?</h2>
            <p>Get a quote for your project within 24 hours. Our pilots are licensed, insured, and ready to deploy globally.</p>
            <div class="quote-actions">
                <button>Get a quote</button>
                <RouterLink :to="localePath('/contact')">Contact Us</RouterLink>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import TextIcon from '@/components/icon/TextIcon.vue'
import FlightTimeIcon from '@components/icon/FlightTimeIcon.vue'
import ProjectsIcon from '@components/icon/ProjectsIcon.vue'
import SafetyIcon from '@components/icon/SafetyIcon.vue'
import CountriesIcon from '@components/icon/CountriesIcon.vue'
import EventIcon from '@components/icon/EventIcon.vue'
import EstateIcon from '@components/icon/EstateIcon.vue'
import ScanIcon from '@components/icon/ScanIcon.vue'
import SportIcon from '@components/icon/SportIcon.vue'
import MediaIcon from '@components/icon/MediaIcon.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import { useVersionStore } from '@/stores/version.store'
import { useLocaleRouter } from '@/composables/useLocaleRouter'
import { storeToRefs } from 'pinia'

const { version } = storeToRefs(useVersionStore())
const { localePath } = useLocaleRouter()
</script>

<style scoped lang="scss">
@import '@sass/main.scss';
@import '@sass/link.scss';

.hero {
    background-color: $bg-light;
    border-bottom: 1px solid $secondary-color;

    padding: 1em 18em;

    .moto {
        position: relative;
        border-radius: 0.5em;
        display: flex;
        gap: 2em;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10em 12em;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('@/assets/city.png');
            background-size: 100% 90%;
            background-repeat: no-repeat;
            filter: blur(2px);
            z-index: 0;
        }

        > * {
            position: relative;
            z-index: 1;
        }

        .availability {
            color: $primary-color;
            border: 1px solid $primary-color;
            background-color: $primary-color-dark;
            border-radius: 1em;
            padding: 0 0.5em;
            width: fit-content;
        }

        h1 {
            width: 50%;
            text-align: center;
            margin: 0;
        }

        p {
            text-align: center;
            margin: 0;
        }

        .moto-actions {
            display: flex;
            gap: 1em;

            a {
                @include link-style;
                font-size: 14px;
                display: flex;
                align-items: center;
            }

            button {
                display: flex;
                align-items: center;
                gap: 0.5em;

                border: 1px solid #67707e;
                background-color: #444a53;
                color: $text-color;
                border-radius: 0.5em;
                padding: 0.5em 1em;
            }
        }
    }
}
</style>