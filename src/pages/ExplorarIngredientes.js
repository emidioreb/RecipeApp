import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useMealIngredients from '../hooks/useIngredients';

export default function ExplorarIngredientes() {
  const { ingredientData, setIngredientRequestURL } = useMealIngredients();
  const NUM_MAX_CARDS = 12;
  const history = useHistory();

  switch (history) {
  case '/explorar/comidas/ingredientes':
    setIngredientRequestURL('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    break;
  case '/explorar/bebidas/ingredientes':
    setIngredientRequestURL('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    break;
  default:
  }

  return (
    <div>
      <Header title="Explorar Ingredientes" isVisible="none" />
      {ingredientData.map((ingredient, index) => (
        index < NUM_MAX_CARDS && (<RecipeCard
          key={ ingredient.idIngredient }
          id={ index }
          recipeTitle={ ingredient.strIngredient }
          recipeThumb={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png` }
        />)
      ))}
    </div>
  );
}
