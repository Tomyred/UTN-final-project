import { combineReducers } from "redux";
import authReducer from "../main/Auth/store/reducers/authReducer";
import mealDBReducer from "../main/Layout/MealDB/store/reducers/mealDBReducer";
import rickMortyReducer from "../main/Layout/RickMorty/store/reducers/RickMortyReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    mealDB: mealDBReducer,
    rickMorty: rickMortyReducer,
});

export default rootReducer;
