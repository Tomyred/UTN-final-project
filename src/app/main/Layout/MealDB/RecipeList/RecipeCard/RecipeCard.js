import React from "react";

const RecipeCard = ({ meal, navigate }) => {
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
                        {" "}
                        Ver receta{" "}
                    </button>
                    <button className="fav__button">Agregar a favoritos</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
