import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import useRecipeDetails from '../hooks/useRecipeDetails';
import useMeals from '../hooks/useMeals';
import useDrinks from '../hooks/useDrinks';
import onlyNumberItems from '../helpers/onlyNumberItems';

export default function Detalhes({ match: { params: { recipeID } } }) {
  const { mealData } = useMeals();
  const { drinkData } = useDrinks();
  const [carouselData, setCarouselData] = useState([]);
  const [onlyType, setOnlyType] = useState('');
  const history = useHistory();
  const { recipe, loading } = useRecipeDetails(recipeID);
  const {
    image,
    title,
    category,
    instructions,
    video,
    dosages,
    type,
  } = recipe;

  useEffect(() => {
    const CAROUSEL_ITEMS_LIMIT = 6;
    if (type === 'drinks') {
      setOnlyType('Meal');
      setCarouselData(onlyNumberItems(mealData, CAROUSEL_ITEMS_LIMIT));
    } else {
      setOnlyType('Drink');
      setCarouselData(onlyNumberItems(drinkData, CAROUSEL_ITEMS_LIMIT));
    }
  }, [drinkData, mealData, type, setCarouselData]);

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
      <section className="carousel-container">
        <div>
          {
            carouselData
              .map((suggestion, index) => (
                <div
                  key={ index }
                  className="carousel-card"
                  data-testid={ `${index}-recomendation-card` }
                  style={ {
                    backgroundImage: `url(${suggestion[`str${onlyType}Thumb`]})`,
                  } }
                >
                  <h4
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { suggestion[`str${onlyType}`] }
                  </h4>
                  <h5>{ suggestion.strCategory }</h5>
                </div>
              ))
          }
        </div>
      </section>
      <div className="container">
        <button
          className="categories-button-last"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ () => { history.push(`${recipeID}/in-progress`); } }
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
