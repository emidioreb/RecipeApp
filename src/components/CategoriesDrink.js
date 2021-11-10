import React, { useEffect, useState } from 'react';
import useDrinks from '../hooks/useDrinks';

export default function CategoriesDrink() {
  const [categoryDrink, setCategoryDrink] = useState([]);
  const { setCatDrinks } = useDrinks();
  const NUM_MAX_BUTTONS = 5;

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const category = await response.json();
      setCategoryDrink(category.drinks);
    };
    fetchApi();
  }, [url]);

  return (
    <div>
      {categoryDrink.map((cat, index) => (
        index < NUM_MAX_BUTTONS && (
          <button
            data-testid={ `${cat.strCategory}-category-filter` }
            type="button"
            key={ cat.strCategory }
            onClick={ () => setCatDrinks(cat.strCategory) }
          >
            {cat.strCategory}
          </button>)))}
    </div>
  );
}
