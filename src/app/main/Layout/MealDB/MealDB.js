import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard/CategoryCard";
import { getCategories } from "./store/actions";

const MealDB = ({ store, dispatch }) => {
    const { loaded, categories } = store.mealDB.categories;

    const navigate = useNavigate();

    useEffect(() => {
        if (loaded === false) {
            dispatch(getCategories());
        }
    }, [loaded, dispatch]);

    return (
        <div className="mealDB__component">
            <h2 className="header">Categories</h2>
            <button
                className="fav__button"
                onClick={() => navigate("favorites")}
            >
                Favorites
            </button>
            <div className="categories__card__container">
                {categories.map(category => {
                    return (
                        <CategoryCard
                            key={category.idCategory}
                            category={category}
                            navigate={navigate}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MealDB;
