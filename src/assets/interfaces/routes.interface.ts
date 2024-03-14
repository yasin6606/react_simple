import {LazyRouteFunction} from "@remix-run/router";
import {IndexRouteObject} from "react-router/dist/lib/context";
import * as React from "react";
import {PathRouteProps, RouteObject} from "react-router-dom";
import {IndexRouteProps, LayoutRouteProps} from "react-router/dist/lib/components";

export interface RoutesInterface {
    caseSensitive?: IndexRouteObject["caseSensitive"];
    path?: IndexRouteObject["path"];
    id?: IndexRouteObject["id"];
    lazy?: LazyRouteFunction<IndexRouteObject>;
    loader?: IndexRouteObject["loader"];
    action?: IndexRouteObject["action"];
    hasErrorBoundary?: IndexRouteObject["hasErrorBoundary"];
    shouldRevalidate?: IndexRouteObject["shouldRevalidate"];
    handle?: IndexRouteObject["handle"];
    index: true,
    children?: RoutesInterface[];
    element?: React.ReactNode | null;
    hydrateFallbackElement?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
    Component?: React.ComponentType | null;
    HydrateFallback?: React.ComponentType | null;
    ErrorBoundary?: React.ComponentType | null;
    isPrivate: boolean;
}

export interface X extends PathRouteProps {
    isPrivate: boolean;
    key: number | string;
    children?: any;
}

export type Y = X | LayoutRouteProps | IndexRouteProps;
