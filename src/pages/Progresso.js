import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useRecipeDetails from '../hooks/useRecipeDetails';
import ShareRecipeButton from '../components/ShareRecipeButton';
import { getLocalStorage } from '../localStorage';
// import { doneRecipes } from '../localStorage';

export default function Progresso({ match: { params: { recipeID } } }) {
  const { recipe, loading } = useRecipeDetails(recipeID);
  const { image, title, category, instructions, dosages } = recipe;
  

  // const ingredientsNames = Object.keys(recipe.dosages);
  // console.log(ingredientsNames);

  // let recipeType;

  // if ( === 'meals') {
  //   recipeType = 'comidas';
  // } if ( === 'drinks') {
  //   recipeType = 'bebidas';
  // }

  // const defaultIngredientsStatusState = async () => {
  //   const ingrediente = await recipe.dosages;
  //   const value = await ingrediente.reduce(
  //     (status, ingredient) => ({ ...status, [ingredient]: false }),
  //     {},
  //   );
  //   return value;
  // };

  // console.log(defaultIngredientsStatusState());

  // let initialIngredientsStatusState = defaultIngredientsStatusState;

  // const inProgressRecipes = getLocalStorage('inProgressRecipes');

  // const getInitialStateFromInProgressRecipes = () => {
  //   const usedIngredients = inProgressRecipes[recipeType][id];
  //   return ingredientsNames.reduce(
  //     (status, ingredient) => (
  //       {
  //         ...status,
  //         [ingredient]: usedIngredients.includes(ingredient),
  //       }
  //     ),
  //     {},
  //   );
  // };

  // if (inProgressRecipes && inProgressRecipes[recipeType][id]) {
  //   initialIngredientsStatusState = getInitialStateFromInProgressRecipes();
  // }

  const [ingredientsStatus, setIngredientsStatus] = useState('');

  const handleChange = ({ target }) => {
    setIngredientsStatus({ ...ingredientsStatus, [target.id]: target.checked });
  };

  function renderDosages() {
    return dosages
      && dosages.map((dosage, index) => (
        <label key={ index } htmlFor="dosages" data-testid="ingredient-step">
          {dosage}
          <input
            onChange={ (e) => handleChange(e) }
            style={ { display: 'flex', flexDirection: 'column' } }
            type="checkbox"
            id={ dosage }
          />
        </label>
      ));
  }

  if (loading) return '';
  return (
    <div>
      <img alt="Recipe" data-testid="recipe-photo" src={ image } />
      <h1 data-testid="recipe-title">{title}</h1>
      <ShareRecipeButton />
      <button type="button" data-testid="favorite-btn">
        Favorita
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
