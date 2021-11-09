import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeCard({ recipeTitle, recipeThumb }) {
  return (
    <div className="recipe-card">
      <h4>{recipeTitle}</h4>
      <img
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
};
