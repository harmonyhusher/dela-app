import { createHistoryRouter, createRoute } from "atomic-router";
import { sample } from "effector";
import { initializeApp } from "./init";
import { createBrowserHistory } from "history";

export const routes = {
    auth: {
        auth: createRoute(),
        registration: createRoute(),
    },
    private: {
        feed: createRoute(),
    }
}

export const mappedRoutes = [
    {
        route: routes.auth.auth,
        path: "/auth",
    },
    {
        route: routes.auth.registration,
        path: "/registration",
    },
    {
        route: routes.private.feed,
        path: "/feed",
    },
]

export const router = createHistoryRouter({routes: mappedRoutes})

sample({
    clock: initializeApp,
    fn: () => createBrowserHistory(),
    target: router.setHistory
})