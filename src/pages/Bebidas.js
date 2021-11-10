import React from 'react';
import CategoriesDrink from '../components/CategoriesDrink';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import useDrinks from '../hooks/useDrinks';

export default function Comidas() {
  const { drinkData } = useDrinks();
  const NUM_MAX_CARDS = 12;
  return (
    <div>
      <Header title="Bebidas" />
      <CategoriesDrink />
      <section className="recipe-container">
        {drinkData.map((drink, index) => (
          index < NUM_MAX_CARDS && (<RecipeCard
            key={ drink.idDrink }
            id={ index }
            recipeTitle={ drink.strDrink }
            recipeThumb={ drink.strDrinkThumb }
          />)
        ))}
      </section>
      <Footer />
    </div>
  );
}
