import React from 'react';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import useIngredients from '../hooks/useIngredients';

export default function ExplorarIngredientes() {
  const { ingredientData, setIngredientRequestURL, setType } = useIngredients();
  const NUM_MAX_CARDS = 12;

  setIngredientRequestURL('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  setType('drinks');

  const renderDrinks = () => ingredientData.map(
    (ingredient, index) => index < NUM_MAX_CARDS && (
      <IngredientCard
        key={ ingredient.strIngredient1 }
        index={ index }
        ingredientTitle={ ingredient.strIngredient1 }
        ingredientThumb={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
      />
    ),
  );

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {renderDrinks()}
    </div>
  );
}
