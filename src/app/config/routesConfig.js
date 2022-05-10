import avatarGeneratorRoutes from "../main/Layout/AvatarGenerator/AvatarGeneratorRoutes";
import mealDBRoutes from "../main/Layout/MealDB/MealDBRoutes";
import rickMortyRoutes from "../main/Layout/RickMorty/RickMortyRoutes";

const routes = [];

const routesConfig = routes.concat(
    avatarGeneratorRoutes,
    mealDBRoutes,
    rickMortyRoutes
);

export default routesConfig;
