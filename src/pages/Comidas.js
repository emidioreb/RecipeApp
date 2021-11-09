import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useMeals from '../hooks/useMeals';

export default function Comidas() {
  const { mealData } = useMeals();
  return (
    <div>
      <Header title="Comidas" />
      <section className="recipe-container">
        {mealData.map((meal) => (
          <RecipeCard
            key={ meal.idMeal }
            recipeTitle={ meal.strMeal }
            recipeThumb={ meal.strMealThumb }
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
