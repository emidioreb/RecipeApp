import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareRecipeButton from './ShareRecipeButton';
import ToggleFavoriteButton from './ToggleFavoriteButton';

export default function ReceitasFavoritasBebidas(
  { receitasFavoritas, toggleFavoriteStatus, index },
) {
  return (
    <div>
      { receitasFavoritas.map((item) => (
        <>
          <Link to={ `bebidas/${item.id}` }>
            <img
              src={ item.image }
              alt={ item.name }
              width="300"
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
          <Link to={ `bebidas/${item.id}` }>
            <h2 data-testid={ `${index}-horizontal-name` }>{item.name}</h2>
          </Link>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.area} - ${item.category}`}
          </h2>
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            {`${item.alcoholicOrNot}`}
          </h2>
          <nav className="teste">
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
          </nav>
        </>
      ))}
    </div>
  );
}

ReceitasFavoritasBebidas.propTypes = {
  receitasFavoritas: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;
