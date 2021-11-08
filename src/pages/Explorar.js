import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Explorar() {
  return (
    <div>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-food">
          <img src={ mealIcon } alt="ícone de Comidas" />
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-drinks">
          <img src={ drinkIcon } alt="ícone de Bebidas" />
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}
