import { lazy } from "react";

const avatarGeneratorRoutes = [
    {
        path: "avatar-gen",
        exact: true,
        component: lazy(() => import("./AvatarGenerator")),
    },
];

export default avatarGeneratorRoutes;
