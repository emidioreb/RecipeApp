import React from 'react';
import PropTypes from 'prop-types';

export default function IngredientCard({ ingredientTitle, ingredientThumb, index }) {
  return (
    <div className="recipe-card" data-testid={ `${index}-ingredient-card` }>
      <h4 data-testid={ `${index}-card-name` }>{ingredientTitle}</h4>
      <img
        data-testid={ `${index}-card-img` }
        className="recipe-thumb"
        src={ ingredientThumb }
        alt="Imagem da receita ou ingrediente"
      />
    </div>
  );
}

IngredientCard.propTypes = {
  ingredientTitle: PropTypes.string.isRequired,
  ingredientThumb: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
