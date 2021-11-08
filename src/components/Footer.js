import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <button type="button" data-testid="drinks-bottom-btn">
          <i src={ drinkIcon } />
          Go to Drinks
        </button>
      </Link>
      <Link to="/explorar">
        <button type="button" data-testid="explore-bottom-btn">
          <i src={ exploreIcon } />
          Explore
        </button>
      </Link>
      <Link to="/comidas">
        <button type="button" data-testid="food-bottom-btn">
          <i src={ mealIcon } />
          Go to Meals
        </button>
      </Link>
    </footer>
  );
}
