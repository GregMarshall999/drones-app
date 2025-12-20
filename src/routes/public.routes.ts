import type { RouteType } from "@/types/route.type";

import HomePage from '@/views/public/HomePage.vue';

export const publicRoutes: RouteType[] = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
];