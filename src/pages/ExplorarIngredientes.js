import React from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';
import useIngredients from '../hooks/useIngredients';

export default function ExplorarIngredientes() {
  const { ingredientData, setIngredientRequestURL, setType, type } = useIngredients();
  const NUM_MAX_CARDS = 12;

  switch (useLocation().pathname) {
  case '/explorar/comidas/ingredientes':
    setIngredientRequestURL('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    setType('meals');
    break;
  case '/explorar/bebidas/ingredientes':
    setIngredientRequestURL('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    setType('drinks');
    break;
  default:
  }

  const renderMeals = () => ingredientData.map((ingredient, index) => (
    index < NUM_MAX_CARDS && (<IngredientCard
      key={ ingredient.idIngredient }
      index={ index }
      ingredientTitle={ ingredient.strIngredient }
      ingredientThumb={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
    />)
  ));

  const renderDrinks = () => ingredientData.map((ingredient, index) => (
    index < NUM_MAX_CARDS && (<IngredientCard
      key={ ingredient.strIngredient1 }
      index={ index }
      ingredientTitle={ ingredient.strIngredient1 }
      ingredientThumb={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
    />)
  ));

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      { type === 'meals' ? renderMeals() : renderDrinks() }
    </div>
  );
}
