import { lazy } from "react";

const rickMortyRoutes = [
    {
        path: "rm",
        exact: true,
        component: lazy(() => import("./RickMorty")),
    },
];

export default rickMortyRoutes;
