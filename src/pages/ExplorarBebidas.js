import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function ExplorarBebidas() {
  return (
    <div>
      <Header title="Explorar bebidas" isVisible="none" />
      <section>
        <Link to="/explorar/bebidas/ingredientes">
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/bebidas/:id-da-receita">
          <button type="button" data-testid="explore-surprise">
            Me Surpreenda!
          </button>
        </Link>
      </section>
    </div>
  );
}
