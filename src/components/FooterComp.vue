<template>
    <footer class="footer">
        <section class="footer-content">
            <div class="drone-op">
                <TextIcon>
                    <LogoIcon />
                    <template #text>
                        DroneOp
                    </template>
                </TextIcon>
                <p>Premier drone operator network for cinema, survey, and inspection.</p>
            </div>

            <div class="content">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div class="content">
                <h3>Services</h3>
                <ul>
                    <li>Real Estate</li>
                    <li>Events</li>
                    <li>Inspections</li>
                    <li>Mapping</li>
                </ul>
            </div>

            <div class="content">
                <h3>Legal</h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Flight Regulations</li>
                </ul>
            </div>
        </section>

        <section class="footer-bottom">
            <p>© 2025 Drone Op. All rights reserved.</p>

            <div class="social-links">
                <a href="https://www.facebook.com/droneop"><FacebookIcon /></a>
                <a href="https://www.instagram.com/droneop"><InstagramIcon /></a>
                <a href="https://www.twitter.com/droneop"><TwitterIcon /></a>
                <a href="https://www.youtube.com/droneop"><YouTubeIcon /></a>
                <a href="https://www.linkedin.com/droneop"><LinkedInIcon /></a>
            </div>
        </section>
    </footer>
</template>

<script setup lang="ts">
import TextIcon from './icon/TextIcon.vue';
import LogoIcon from './icon/LogoIcon.vue';
import FacebookIcon from './icon/FacebookIcon.vue';
import InstagramIcon from './icon/InstagramIcon.vue';
import TwitterIcon from './icon/TwitterIcon.vue';
import YouTubeIcon from './icon/YoutubeIcon.vue';
import LinkedInIcon from './icon/LinkedinIcon.vue';
</script>