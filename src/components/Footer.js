import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-container">
        <Link to="/bebidas">
          <button type="button" data-testid="drinks-bottom-btn">
            <img src={ drinkIcon } alt="Ícone de Drinks" />
            Drinks
          </button>
        </Link>
        <Link to="/explorar">
          <button type="button" data-testid="explore-bottom-btn">
            <img src={ exploreIcon } alt="Ícone de Explorar" />
            Explore
          </button>
        </Link>
        <Link to="/comidas">
          <button type="button" data-testid="food-bottom-btn">
            <img src={ mealIcon } alt="Ícone de Refeições" />
            Meals
          </button>
        </Link>
      </div>
    </footer>
  );
}
