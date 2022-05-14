import { lazy } from "react";

const mealDBRoutes = [
    {
        path: "mealdb",
        exact: true,
        component: lazy(() => import("./MealDB")),
    },
    {
        path: "mealdb/favorites",
        exact: true,
        component: lazy(() => import("./Favorites/Favorites")),
    },
    {
        path: "mealdb/:category",
        exact: true,
        component: lazy(() => import("./RecipeList/RecipeList")),
    },
    {
        path: "mealdb/favorites/:id",
        exact: true,
        component: lazy(() => import("./RecipeDetail/RecipeDetail")),
    },
    {
        path: "mealdb/:category/:id",
        exact: true,
        component: lazy(() => import("./RecipeDetail/RecipeDetail")),
    },
];

export default mealDBRoutes;
