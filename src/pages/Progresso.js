import React from 'react';
import PropTypes from 'prop-types';
import useRecipeDetails from '../hooks/useRecipeDetails';
import { doneRecipes } from '../localStorage';

export default function Progresso({ match: { params: { recipeID } } }) {
  const { recipe, loading } = useRecipeDetails(recipeID);
  const { image, title, category, instructions, dosages } = recipe;
  // const getDoneRecipes = Object
  //   .values(JSON.parse(window.localStorage.getItem('recipesDone')));

  // const localStorageDoneRecipes = {
  //   id: recipeID,
  //   type,
  //   area: area-da-receita-ou-texto-vazio,
  //   category: categoria-da-receita-ou-texto-vazio,
  //   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
  //   name: nome-da-receita,
  //   image: imagem-da-receita,
  //   doneDate: quando-a-receita-foi-concluida,
  //   tags: array-de-tags-da-receita-ou-array-vazio
  // };

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
      <button
        // onClick={ () => { doneRecipes(...getDoneRecipes); } }
        type="button"
        data-testid="finish-recipe-btn"
      >
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
