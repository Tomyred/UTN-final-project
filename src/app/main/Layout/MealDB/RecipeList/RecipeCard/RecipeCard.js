import React from "react";
import { addRecipeToFav, removeRecipeFromFav } from "../../store/actions";

const RecipeCard = ({
    meal,
    navigate,
    fav,
    dispatch,
    index,
    buttonText,
    setButtonText,
}) => {
    const addToFav = () => {
        if (buttonText[meal.strMeal]) {
            navigate("/mealdb/favorites");
        } else {
            dispatch(addRecipeToFav(meal));
            setButtonText({ ...buttonText, [meal.strMeal]: "En favoritos" });
        }
    };

    if (fav) {
        return (
            <div className="recipe__card">
                <img src={meal.strMealThumb} alt="" />
                <div className="card__info">
                    <h3>{meal.strMeal}</h3>
                    <div className="button__container">
                        <button
                            className="detail__button"
                            onClick={() => navigate(meal.idMeal)}
                        >
                            Ver receta
                        </button>
                        <button
                            onClick={() =>
                                dispatch(removeRecipeFromFav(meal.idMeal))
                            }
                            className="remove__button"
                        >
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="recipe__card">
            <img src={meal.strMealThumb} alt="" />
            <div className="card__info">
                <h3>{meal.strMeal}</h3>
                <div className="button__container">
                    <button
                        className="detail__button"
                        onClick={() => navigate(meal.idMeal)}
                    >
                        Ver receta
                    </button>
                    <button
                        onClick={addToFav}
                        className="fav__button"
                        style={{
                            backgroundColor: buttonText[meal.strMeal]
                                ? "#C71585"
                                : "",
                        }}
                    >
                        {buttonText[meal.strMeal]
                            ? buttonText[meal.strMeal]
                            : "Agregar a favoritos"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
