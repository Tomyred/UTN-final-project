import { combineReducers } from "redux";
import authReducer from "../main/Auth/store/reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
