import type { Component } from "vue";
import type { RouteMeta } from "vue-router";

export type RouteType = {
    path: string;
    name: string;
    component: Component;
    meta?: RouteMeta;
}