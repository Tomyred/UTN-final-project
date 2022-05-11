const initialState = {
    saving: false,
    saved: false,
    savingError: false,
    savingErrorMessage: null,
};

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case "REGISTER_INIT":
            return {
                saving: true,
                saved: false,
                savingError: false,
                savingErrorMessage: null,
            };
        case "REGISTER_SUCCEED":
            return {
                saving: false,
                saved: true,
                savingError: false,
                savingErrorMessage: null,
            };
        case "REGISTER_FAILED":
            return {
                saving: false,
                saved: false,
                savingError: true,
                savingErrorMessage: action.payload,
            };
        case "RESET_REGISTER":
            return {
                saving: false,
                saved: false,
                savingError: false,
                savingErrorMessage: null,
            };

        default:
            return state;
    }
}
