const initialState = {
    categories: [],
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case "CATEGORIES_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "CATEGORIES_LOAD_SUCCEED":
            return {
                ...state,
                categories: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "CATEGORIES_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        default:
            return state;
    }
}
