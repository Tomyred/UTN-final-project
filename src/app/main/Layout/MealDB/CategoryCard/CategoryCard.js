import React from "react";

const CategoryCard = ({ category, navigate }) => {
    return (
        <div
            className="category__card"
            onClick={() => navigate(category.strCategory)}
        >
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3> {category.strCategory} </h3>

            <p>{category.strCategoryDescription}</p>
        </div>
    );
};

export default CategoryCard;
