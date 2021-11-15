import React from 'react';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import useIngredients from '../hooks/useIngredients';

export default function ExplorarIngredientes() {
  const { setIngredientRequestURL, setType, ingredientData } = useIngredients();
  const NUM_MAX_CARDS = 12;
  setIngredientRequestURL('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  setType('meals');

  const renderMeals = () => ingredientData.map(
    (ingredient, index) => index < NUM_MAX_CARDS && (
      <IngredientCard
        key={ ingredient.idIngredient }
        index={ index }
        ingredientTitle={ ingredient.strIngredient }
        ingredientThumb={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
      />
    ),
  );

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { renderMeals() }
    </div>
  );
}
