import React from 'react';
import { useHistory } from 'react-router';
import CategoriesMeals from '../components/CategoriesMeals';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useMeals from '../hooks/useMeals';

export default function Comidas() {
  const { push } = useHistory();
  const { mealData } = useMeals();
  const NUM_MAX_CARDS = 12;
  if (mealData.length === 1) {
    push(`/comidas/${mealData[0].idMeal}`);
  }
  return (
    <div>
      <Header title="Comidas" />
      <CategoriesMeals />
      <section className="recipe-container">
        {mealData.map((meal, index) => (
          index < NUM_MAX_CARDS && (<RecipeCard
            key={ meal.idMeal }
            idRecipe={ meal.idMeal }
            id={ index }
            recipeTitle={ meal.strMeal }
            recipeThumb={ meal.strMealThumb }
            recipe={ `${history.location.pathname}/` }
          />)
        ))}
      </section>
      <Footer />
    </div>
  );
}
