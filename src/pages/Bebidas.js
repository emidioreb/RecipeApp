import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useDrinks from '../hooks/useDrinks';

export default function Comidas() {
  const { drinkData } = useDrinks();
  return (
    <div>
      <Header title="Bebidas" />
      <section className="recipe-container">
        {drinkData.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <RecipeCard
            key={ idDrink }
            recipeTitle={ strDrink }
            recipeThumb={ strDrinkThumb }
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}
