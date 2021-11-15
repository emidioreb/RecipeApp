import React from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import useIngredients from '../hooks/useIngredients';
import useMeals from '../hooks/useMeals';

export default function ExplorarIngredientes() {
  const { setIngredientRequestURL, setType, ingredientData } = useIngredients();
  const { setMealData, setMealFilter } = useMeals();

  const history = useHistory();
  const NUM_MAX_CARDS = 12;
  setIngredientRequestURL(
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  );
  setType('meals');

  const sendToFilteredMeals = (filter) => {
    setMealData([]);
    setMealFilter({
      searchInput: filter,
      ingrediente: true,
      nome: false,
      primeiraLetra: false,
    });
    history.push('/comidas');
  };

  const renderMeals = () => ingredientData.map(
    (ingredient, index) => index < NUM_MAX_CARDS && (
      <button
        key={ ingredient.idIngredient }
        type="button"
        onClick={ () => sendToFilteredMeals(ingredient.strIngredient) }
        className="recipe-card"
        data-testid={ `${index}-ingredient-card` }
      >
        <h4 data-testid={ `${index}-card-name` }>
          {ingredient.strIngredient}
        </h4>
        <img
          data-testid={ `${index}-card-img` }
          className="recipe-thumb"
          src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
          alt="Imagem da receita ou ingrediente"
        />
      </button>
    ),
  );

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {renderMeals()}
    </div>
  );
}
