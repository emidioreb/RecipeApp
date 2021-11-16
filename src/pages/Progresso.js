import React from 'react';
import PropTypes from 'prop-types';
import useRecipeDetails from '../hooks/useRecipeDetails';

export default function Progresso({
  match: {
    params: { recipeID },
  },
}) {
  const { recipe, loading } = useRecipeDetails(recipeID);
  const { image, title, category, instructions, dosages } = recipe;

  function renderDosages() {
    return dosages
      && dosages.map((dosage, index) => (
        <label key={ index } htmlFor="dosages" data-testid="ingredient-step">
          {dosage}
          <input
            style={ { display: 'flex', flexDirection: 'column' } }
            type="checkbox"
            id="dosages"
          />
        </label>
      ));
  }

  if (loading) return '';
  return (
    <div>
      <img alt="Recipe" data-testid="recipe-photo" src={ image } />
      <h1 data-testid="recipe-title">{title}</h1>
      <button type="button" data-testid="share-btn">
        Compartilhar
      </button>
      <button type="button" data-testid="favorite-btn">
        Favoritar
      </button>
      <h3 data-testid="recipe-category">{category}</h3>
      <form>
        {renderDosages()}
      </form>
      <h4 data-testid="instructions">{instructions}</h4>
      <button type="button" data-testid="finish-recipe-btn">
        Finalizar receita
      </button>
    </div>
  );
}

Progresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeID: PropTypes.string,
    }),
  }).isRequired,
};
