import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipeTitle, recipeThumb, id, idRecipe, recipe }) {
  return (
    <div className="recipe-card" data-testid={ `${id}-recipe-card` }>
      <h4 data-testid={ `${id}-card-name` }>{recipeTitle}</h4>
      <Link to={ `${recipe}${idRecipe}` }>
        <img
          data-testid={ `${id}-card-img` }
          className="recipe-thumb"
          src={ recipeThumb }
          alt="Imagem da receita ou ingrediente"
        />
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeThumb: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  idRecipe: PropTypes.number.isRequired,
  recipe: PropTypes.string.isRequired,
};
