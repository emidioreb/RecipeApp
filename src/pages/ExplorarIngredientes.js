import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useIngredients from '../hooks/useIngredients';

export default function ExplorarIngredientes() {
  const { ingredientData, setIngredientRequestURL, setType, type } = useIngredients();
  const NUM_MAX_CARDS = 12;

  switch (useHistory().location.pathname) {
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

  return (
    <div>
      <Header title="Explorar Ingredientes" isVisible="none" />
      {type === 'meals' ? ingredientData.map((ingredient, index) => (
        index < NUM_MAX_CARDS && (<RecipeCard
          key={ ingredient.idIngredient }
          id={ index }
          recipeTitle={ ingredient.strIngredient }
          recipeThumb={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
        />)
      )) : ingredientData.map((ingredient, index) => (
        index < NUM_MAX_CARDS && (<RecipeCard
          key={ ingredient.strIngredient1 }
          id={ index }
          recipeTitle={ ingredient.strIngredient1 }
          recipeThumb={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
        />)
      ))}
    </div>
  );
}
