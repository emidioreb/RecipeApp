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
        <div className="recipe-image-container">
          <img
            className="recipe-image"
            src={ image }
            alt="Foto da receita"
            data-testid="recipe-photo"
          />
        </div>
        <div className="recipe-container">
          <h2 className="recipe-title" data-testid="recipe-title">{ title }</h2>
          <h3 className="recipe-title" data-testid="recipe-category">{ category }</h3>
        </div>
      </section>
      <nav className="recipe-nav">
        <button
          className="categories-button"
          type="button"
          data-testid="share-btn"
        >
          Share
        </button>
        <button
          className="categories-button"
          type="button"
          data-testid="favorite-btn"
        >
          Favorite
        </button>
      </nav>
      <article className="recipe-container">
        <ul>
          {
            dosages && dosages.map((dosage, index) => (
              <li
                className="recipe-content"
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { dosage }
              </li>
            ))
          }
        </ul>
        <div className="spacer" />
        <p className="recipe-content" data-testid="instructions">
          { instructions }
        </p>
      </article>
      <div className="spacer" />
      <section className="video-container">
        {
          video && <iframe
            className="i-test"
            width="96%"
            height="260px"
            src={ `https://www.youtube.com/embed/${video}?controls=0` }
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
      <div className="container">
        <button
          className="categories-button-last"
          type="button"
          data-testid="start-recipe-btn"
        >
          Iniciar Receita
        </button>

      </div>
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
