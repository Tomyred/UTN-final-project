const initialState = {
    recipes: [],
    favRecipes: [],
    recipeDetail: null,
    loading: false,
    loaded: false,
    loadingError: false,
};

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case "RECIPES_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "RECIPES_LOAD_SUCCEED":
            return {
                ...state,
                recipes: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "RECIPES_LOAD_FAILED":
            return {
                ...state,
                loading: false,
                loaded: false,
                loadingError: true,
            };
        case "RECIPE_LOAD_INIT":
            return {
                ...state,
                loading: true,
                loaded: false,
                loadingError: false,
            };
        case "RECIPE_LOAD_SUCCEED":
            return {
                ...state,
                recipeDetail: action.payload,
                loading: false,
                loaded: true,
                loadingError: false,
            };
        case "RECIPE_LOAD_FAILED":
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
