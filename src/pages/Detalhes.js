import React from 'react';
import PropTypes from 'prop-types';
import useRecipeDetails from '../hooks/useRecipeDetails';

export default function Detalhes({ match: { params: { recipeID } } }) {
  const { recipe, loading } = useRecipeDetails(recipeID);
  const {
    image,
    title,
    category,
    instructions,
    video,
    dosages,
  } = recipe;

  if (loading) return '';
  return (
    <div>
      <section>
        { console.log(recipeID)}
        <img src={ image } alt="Foto de " data-testid="recipe-photo" />
        <h1 data-testid="recipe-title">{ title }</h1>
        <h2 data-testid="recipe-category">{ category }</h2>
      </section>
      <nav>
        <button type="button" data-testid="share-btn">Share</button>
        <button type="button" data-testid="favorite-btn">Favorite</button>
      </nav>
      <article>
        <ul>
          {
            dosages && dosages.map((dosage, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { dosage }
              </li>
            ))
          }
        </ul>
        <p data-testid="instructions">
          { instructions }
        </p>
      </article>
      <section>
        {
          video && <iframe
            width="560"
            height="315"
            src={ `https://www.youtube.com/embed/${video}` }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowFullScreen
            data-testid="video"
          />
        }
      </section>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </div>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeID: PropTypes.string,
    }),
  }).isRequired,
};
