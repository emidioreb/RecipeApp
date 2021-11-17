import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import useRecipeDetails from '../hooks/useRecipeDetails';
// import { doneRecipes } from '../localStorage';

export default function Progresso({ match: { params: { recipeID } } }) {
  const { recipe, loading } = useRecipeDetails(recipeID);
  const { image, title, category, instructions, dosages } = recipe;
  const { location: { pathname } } = useHistory();
  const [xablauzin, setXablauzin] = useState([]);
  useEffect(() => {
    const check = () => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const arrayCheck = inProgress.meals[recipeID];
      setXablauzin(arrayCheck);
      // arrayCheck === undefined ? null : arrayCheck.includes(xulanbs);
    };
    check();
  }, []);
  function renderDosages() {
    const addMeals = (index) => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const xablau = Object.keys(inProgress.meals).length;
      if (xablau === 0) {
        inProgress.meals[recipeID] = [index];
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      } else {
        inProgress.meals[recipeID].push(index);
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      }
    };

    const removeMeals = (index) => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const ind = inProgress.meals[recipeID].indexOf(index);
      inProgress.meals[recipeID].splice(ind, 1);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    };

    const addCocktails = (index) => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const xablau = Object.keys(inProgress.cocktails).length;
      if (xablau === 0) {
        inProgress.cocktails[recipeID] = [index];
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      } else {
        inProgress.cocktails[recipeID].push(index);
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      }
    };

    const removeCocktails = (index) => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const ind = inProgress.cocktails[recipeID].indexOf(index);
      inProgress.cocktails[recipeID].splice(ind, 1);
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    };

    const check = (xulanbs) => {
      const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const arrayCheck = inProgress.meals[recipeID];
      return arrayCheck === undefined ? null : arrayCheck.includes(xulanbs);
    };

    return dosages
      && dosages.map((dosage, index) => (
        <label key={ index } htmlFor="dosages" data-testid="ingredient-step">
          {dosage}
          <input
            key={ index }
            style={ { display: 'flex', flexDirection: 'column' } }
            type="checkbox"
            checked={ xablauzin.includes(index) }
            onClick={ () => { console.log('papai'); } }
            id="dosages"
            onChange={ ({ target }) => {
              if (pathname.includes('comidas') === true) {
                target.checked ? addMeals(index) : removeMeals(index);
              } else {
                target.checked ? addCocktails(index) : removeCocktails(index);
              }
            } }
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
