import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipesByCategory } from "../store/actions";
import RecipeCard from "./RecipeCard/RecipeCard";
import LoadingScreen from "../../../../pages/LoadingScreen/LoadingScreen";

const RecipeList = ({ store, dispatch }) => {
    const { category } = useParams();
    const navigate = useNavigate();

    const [buttonText, setButtonText] = useState({});

    const { loading, recipes } = store.mealDB.recipes;

    useEffect(() => {
        dispatch(getRecipesByCategory(category));
    }, [dispatch, category]);

    if (loading) {
        return <LoadingScreen />;
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
            <h2>{category} recipes</h2>
            <div className="categories__card__container">
                {recipes.map(meal => {
                    return (
                        <RecipeCard
                            dispatch={dispatch}
                            key={meal.idMeal}
                            navigate={navigate}
                            meal={meal}
                            buttonText={buttonText}
                            setButtonText={setButtonText}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default RecipeList;
