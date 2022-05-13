import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipesByCategory } from "../store/actions";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeList = ({ store, dispatch }) => {
    const { category } = useParams();
    const navigate = useNavigate();

    const { loading, recipes } = store.mealDB.recipes;

    useEffect(() => {
        dispatch(getRecipesByCategory(category));
    }, [dispatch, category]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="mealDB__component">
            <h2>{category} recipes</h2>
            <div className="categories__card__container">
                {recipes.map(meal => {
                    return (
                        <RecipeCard
                            key={meal.idMeal}
                            navigate={navigate}
                            meal={meal}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RecipeList;
