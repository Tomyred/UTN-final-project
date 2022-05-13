import axios from "axios";

const categoriesURL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
const recipesByCategoryURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const recipeByIdURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;

export const loadCategories = () => axios.get(categoriesURL);

export const loadRecipes = category =>
    axios.get(recipesByCategoryURL + category);

export const loadRecipeById = id => axios.get(recipeByIdURL + id);
