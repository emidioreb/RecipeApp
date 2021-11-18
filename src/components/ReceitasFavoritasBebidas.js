import React from 'react';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';
import RecipeCard from './RecipeCard';

export default function ReceitasFavoritasBebidas(
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
            recipe="/bebidas/"
          />
          <navbar className="teste">
            <ShareRecipeButton
              parentPath="bebidas"
              recipeID={ item.id }
              dataTestID={ `${index}-horizontal-share-btn` }
            />
            <ToggleFavoriteButton
              isFavorite
              onClick={ () => toggleFavoriteStatus(item.id) }
              dataTestID={ `${index}-horizontal-favorite-btn` }
            />
          </navbar>
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasBebidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
