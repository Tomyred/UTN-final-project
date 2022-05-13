import * as types from "./types";
import * as api from "../api/index";

export const getCategories = () => async dispatch => {
    try {
        dispatch({
            type: types.CATEGORIES_LOAD_INIT,
        });

        const res = await api.loadCategories();

        if (res.status === 200) {
            dispatch({
                type: types.CATEGORIES_LOAD_SUCCEED,
                payload: res.data.categories,
            });
        } else {
            dispatch({
                type: types.CATEGORIES_LOAD_SUCCEED,
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.CATEGORIES_LOAD_SUCCEED,
        });
    }
};

export const getRecipesByCategory = category => async dispatch => {
    try {
        dispatch({
            type: types.RECIPES_LOAD_INIT,
        });

        const res = await api.loadRecipes(category);

        if (res.status === 200) {
            dispatch({
                type: types.RECIPES_LOAD_SUCCEED,
                payload: res.data.meals,
            });
        } else {
            dispatch({
                type: types.RECIPES_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.RECIPES_LOAD_FAILED,
        });
    }
};

export const getRecipeById = id => async dispatch => {
    const ingredients = [];
    try {
        dispatch({
            type: types.RECIPE_LOAD_INIT,
        });
        const res = await api.loadRecipeById(id);
        if (res.status === 200) {
            for (let index in res.data.meals[0]) {
                if (
                    index.includes("strIngredient") &&
                    res.data.meals[0][index].length > 0
                ) {
                    ingredients.push(res.data.meals[0][index]);
                }
            }
            dispatch({
                type: types.RECIPE_LOAD_SUCCEED,
                payload: { ...res.data.meals[0], ingredients },
            });
        } else {
            dispatch({
                type: types.RECIPE_LOAD_FAILED,
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.RECIPE_LOAD_FAILED,
        });
    }
};
