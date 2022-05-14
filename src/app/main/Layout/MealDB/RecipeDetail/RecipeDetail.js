import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingScreen from "../../../../pages/LoadingScreen/LoadingScreen";
import { getRecipeById } from "../store/actions";

const RecipeDetail = ({ store, dispatch }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { recipeDetail, recipeLoading, recipeLoaded } = store.mealDB.recipes;

    useEffect(() => {
        dispatch(getRecipeById(id));
    }, [id, dispatch]);

    if (recipeLoading) {
        return <LoadingScreen />;
    }

    if (recipeLoaded) {
        return (
            <div className="recipe__component">
                <div className="back__arrow" onClick={() => navigate(-1)}>
                    <span
                        style={{ marginRight: "10px" }}
                        className="material-icons md-36 action__button"
                    >
                        arrow_back
                    </span>
                    <span className="text__back"> Back </span>
                </div>
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
