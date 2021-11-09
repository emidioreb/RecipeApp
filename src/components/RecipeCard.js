import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard({ recipeTitle, recipeThumb, id }) {
  return (
    <div data-testid={ `${id}-recipe-card` }>
      <h4 data-testid={ `${id}-card-name` }>{recipeTitle}</h4>
      <img
        data-testid={ `${id}-card-img` }
        className="recipe-thumb"
        src={ recipeThumb }
        alt="Imagem da receita"
      />
    </div>
  );
}

RecipeCard.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeThumb: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
