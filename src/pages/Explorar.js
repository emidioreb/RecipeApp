import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Explorar() {
  return (
    <>
      <Header title="Explorar" isVisible="none" />
      <div className="explore-container">
        <Link to="/explorar/bebidas">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-food"
          >
            <img src={ mealIcon } alt="ícone de Comidas" />
            <p className="button-text">Explorar Bebidas</p>
          </button>
        </Link>
        <Link to="/explorar/comidas">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-drinks"
          >
            <img src={ drinkIcon } alt="ícone de Bebidas" />
            <p className="button-text">
              Explorar Comidas
            </p>
          </button>
        </Link>
      </div>
    </>
  );
}
