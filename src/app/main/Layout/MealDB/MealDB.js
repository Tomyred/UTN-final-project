import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const MealDB = () => {
    const [categories, setCategories] = useState([]);
    const [loadState, setLoadState] = useState({
        loading: false,
        loaded: false,
        loadingError: false,
    });

    const loadCategories = async () => {
        try {
            setLoadState(prevState => {
                return {
                    ...prevState,
                    loading: true,
                    loaded: false,
                    loadingError: false,
                };
            });
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/categories.php`
            );
            if (res.status === 200) {
                setCategories(res.data.categories);
                setLoadState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                        loaded: true,
                    };
                });
            } else {
                setLoadState(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                        loadingError: true,
                    };
                });
            }
        } catch (error) {
            console.log(error);
            setLoadState(prevState => {
                return {
                    ...prevState,
                    loading: false,
                    loadingError: true,
                };
            });
        }
    };

    useEffect(() => {
        if (loadState.loaded === false) {
            loadCategories();
        }
    }, [setLoadState, loadState.loaded]);

    return (
        <div className="mealDB__component">
            <h2>Categoria de recetas (solo en ingles)</h2>
            {/* <hr /> */}
            <div className="categories__card__container">
                {categories.map(category => {
                    return (
                        <CategoryCard
                            key={category.idCategory}
                            category={category}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MealDB;
