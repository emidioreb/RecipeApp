import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Explorar() {
  return (
    <div>
      <Header title="Explorar" isVisible="none" />
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-food">
          <img src={ mealIcon } alt="ícone de Comidas" />
          Explorar Bebidas
        </button>
      </Link>
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-drinks">
          <img src={ drinkIcon } alt="ícone de Bebidas" />
          Explorar Comidas
        </button>
      </Link>
    </div>
  );
}
