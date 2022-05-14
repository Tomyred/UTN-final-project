import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../RecipeList/RecipeCard/RecipeCard";

const Favorites = ({ store, dispatch }) => {
    const navigate = useNavigate();
    const { favRecipes } = store.mealDB.recipes;

    if (favRecipes.length === 0) {
        return (
            <div className="mealDB__component">
                <div className="back__arrow" onClick={() => navigate(-1)}>
                    <span
                        style={{ marginRight: "10px" }}
                        className="material-icons md-36 action__button"
                    >
                        arrow_back
                    </span>
                    <span className="text__back"> Back </span>
                </div>
                <h2>You don't have favorite recipes yet</h2>
            </div>
        );
    }

    return (
        <div className="mealDB__component">
            <div className="back__arrow" onClick={() => navigate(-1)}>
                <span
                    style={{ marginRight: "10px" }}
                    className="material-icons md-36 action__button"
                >
                    arrow_back
                </span>
                <span className="text__back"> Back </span>
            </div>
            <h2>Favorites recipes</h2>
            <div className="categories__card__container">
                {favRecipes.map(meal => {
                    return (
                        <RecipeCard
                            key={meal.idMeal}
                            fav={true}
                            navigate={navigate}
                            meal={meal}
                            dispatch={dispatch}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;
