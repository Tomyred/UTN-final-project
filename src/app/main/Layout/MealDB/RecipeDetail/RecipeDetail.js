import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../store/actions";

const RecipeDetail = ({ store, dispatch }) => {
    const { id } = useParams();

    const { recipeDetail, loading, loaded } = store.mealDB.recipes;

    useEffect(() => {
        dispatch(getRecipeById(id));
    }, [id, dispatch]);

    if (loading) {
        return <h1>Cargando...</h1>;
    }

    if (loaded) {
        return (
            <div className="recipe__component">
                <h2 className="header"> {recipeDetail.strMeal} </h2>

                <div className="ingredients">
                    <div>
                        <h3>Ingredients</h3>
                        <ol>
                            {recipeDetail.ingredients.map(ingredient => {
                                return <li key={ingredient}> {ingredient} </li>;
                            })}
                        </ol>
                    </div>

                    <img
                        src={recipeDetail.strMealThumb}
                        alt={recipeDetail.strMeal}
                    />
                </div>

                <h3>Preparation</h3>
                <p> {recipeDetail.strInstructions} </p>
            </div>
        );
    } else {
        return <h2>Error cargando la receta</h2>;
    }
};

export default RecipeDetail;
