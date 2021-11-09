import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useMeals from '../hooks/useMeals';

export default function Comidas() {
  const { mealData } = useMeals();
  const NUM_MAX_CARDS = 12;
  return (
    <div>
      <Header title="Comidas" />
      <section className="recipe-container">
        {mealData.map((meal, index) => (
          index < NUM_MAX_CARDS && (<RecipeCard
            key={ meal.idMeal }
            id={ index }
            recipeTitle={ meal.strMeal }
            recipeThumb={ meal.strMealThumb }
          />)
        ))}
      </section>
      <Footer />
    </div>
  );
}
