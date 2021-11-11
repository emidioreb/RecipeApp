import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function ExplorarComidas() {
  return (
    <div>
      <Header title="Explorar comidas" isVisible="none" />
      <section className="explore-container">
        <Link to="/explorar/comidas/ingredientes">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button className="explore-btn" type="button" data-testid="explore-by-area">
            Por Local de Origem
          </button>
        </Link>
        <Link to="/comidas/:id-da-receita">
          <button className="explore-btn" type="button" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </section>
    </div>
  );
}
