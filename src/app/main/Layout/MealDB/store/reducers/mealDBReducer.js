import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import recipesReducer from "./recipesReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    recipes: recipesReducer,
});

export default rootReducer;
