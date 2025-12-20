import type { Component } from "vue";

export type RouteType = {
    path: string;
    name: string;
    component: Component;
}