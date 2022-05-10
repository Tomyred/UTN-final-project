import { lazy } from "react";

const mealDBRoutes = [
    {
        path: "mealdb",
        exact: true,
        component: lazy(() => import("./MealDB")),
    },
    // {
    //     path: "mealdb/:category",
    //     exact: true,
    //     component: lazy(() => import("./recipes/recipes")),
    // },
    // {
    //     path: "mealdb/:category/:id",
    //     exact: true,
    //     component: lazy(() => import("./recipeDetail/recipeDetail")),
    // },
];

export default mealDBRoutes;
