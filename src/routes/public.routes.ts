import type { RouteType } from "@/types/route.type";

import HomePage from '@/views/public/HomePage.vue';
import ContactPage from '@/views/public/ContactPage.vue';
import RequestPage from '@/views/public/RequestPage.vue';

export const publicRoutes: RouteType[] = [
    {
        path: '/:locale',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/:locale/contact',
        name: 'contact',
        component: ContactPage,
    },
    {
        path: '/:locale/request',
        name: 'request',
        component: RequestPage,
    }
];