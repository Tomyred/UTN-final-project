import { combineReducers } from "redux";
import logInReducer from "./logInReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
    logIn: logInReducer,
    register: registerReducer,
});

export default rootReducer;
