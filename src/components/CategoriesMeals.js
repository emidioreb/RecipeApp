import React, { useEffect, useState } from 'react';
import useMeals from '../hooks/useMeals';
// import { useHistory } from 'react-router';

export default function Categories() {
  const [categoryMeals, setCategoryMeals] = useState([]);
  const { setCatMeals } = useMeals();
  const NUM_MAX_BUTTONS = 5;

  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const category = await response.json();
      setCategoryMeals(category.meals);
    };
    fetchApi();
  }, [url]);

  return (
    <div className="categories-container">
      {categoryMeals.map((cat, index) => (
        index < NUM_MAX_BUTTONS && (
          <button
            className="form-btn"
            data-testid={ `${cat.strCategory}-category-filter` }
            type="button"
            key={ cat.strCategory }
            onClick={ () => setCatMeals(cat.strCategory) }
          >
            {cat.strCategory}
          </button>)))}
    </div>
  );
}
