import { combineReducers } from "redux";
import authReducer from "../main/Auth/store/reducers/authReducer";
import mealDBReducer from "../main/Layout/MealDB/store/reducers/mealDBReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    mealDB: mealDBReducer,
});

export default rootReducer;
