const initialState = {
    logginIn: false,
    logged: false,
    logginError: false,
    userInfo: null,
    loginErrorMessage: null,
};
export default function logInReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_INIT":
            return {
                ...state,
                logginIn: true,
                loginErrorMessage: null,
            };
        case "LOGIN_SUCCEED":
            return {
                ...state,
                logginIn: false,
                logged: true,
                userInfo: action.payload,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                logginIn: false,
                logginError: true,
                loginErrorMessage: action.payload,
            };
        case "CHANGE_AVATAR":
            return {
                userInfo: { ...state.userInfo, profilePic: action.payload },
            };
        case "LOGOUT":
            return {
                ...state,
                logginIn: false,
                logged: false,
                logginError: false,
                userInfo: null,
                loginErrorMessage: null,
            };

        default:
            return state;
    }
}
