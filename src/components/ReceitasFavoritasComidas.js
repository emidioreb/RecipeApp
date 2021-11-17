import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';
import RecipeCard from './RecipeCard';

export default function ReceitasFavoritasComidas(
  { receitasFavoritas, toggleFavoriteStatus, index },
) {
  return (
    <div>
      { receitasFavoritas.map((item) => (
        <>
          <RecipeCard
            key={ index }
            idRecipe={ item.id }
            id={ item.id }
            recipeTitle={ item.name }
            recipeThumb={ item.image }
            recipe="/comidas/"
          />
          <nav className="teste">
            <ShareRecipeButton
              parentPath="comidas"
              recipeID={ item.id }
              dataTestID={ `${index}-horizontal-share-btn` }
            />
            <ToggleFavoriteButton
              isFavorite
              onClick={ () => toggleFavoriteStatus(item.id) }
              dataTestID={ `${index}-horizontal-favorite-btn` }
            />
          </nav>
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasComidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
