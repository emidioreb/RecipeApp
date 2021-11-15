import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import useIngredients from '../hooks/useIngredients';

export default function ExplorarBebidas() {
  const { setIngredientRequestURL, setType } = useIngredients();
  setIngredientRequestURL('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  setType('drinks');
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <section className="explore-container">
        <Link to="/explorar/bebidas/ingredientes">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/bebidas/:id-da-receita">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </section>
    </div>
  );
}
