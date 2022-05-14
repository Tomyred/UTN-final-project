const initialState = {
    recipes: [],
    favRecipes: [],
    recipeDetail: null,
    loading: false,
    loaded: false,
    loadingError: false,
    recipeLoading: false,
    recipeLoaded: false,
    recipeError: false,
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
                recipeLoading: true,
                recipeLoaded: false,
                recipeError: false,
            };
        case "RECIPE_LOAD_SUCCEED":
            return {
                ...state,
                recipeDetail: action.payload,
                recipeLoading: false,
                recipeLoaded: true,
                recipeError: false,
            };
        case "RECIPE_LOAD_FAILED":
            return {
                ...state,
                recipeLoading: false,
                recipeLoaded: false,
                recipeError: true,
            };
        case "ADD_TO_FAV":
            return {
                ...state,
                favRecipes: state.favRecipes.concat(action.payload),
            };
        case "REMOVE_FROM_FAV":
            const id = action.payload;
            return {
                ...state,
                favRecipes: state.favRecipes.filter(
                    recipe => recipe.idMeal !== id
                ),
            };
        default:
            return state;
    }
}
