import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';

const MealIngredientsContext = createContext({});

export function MealIngredientsProvider({ children }) {
  const [ingredientData, setIngredientData] = useState([]);
  const [ingredientRequestURL, setIngredientRequestURL] = useState('');

  // if (ingredientData === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list') {
  //   const xulambs = 'meals';
  // }
  // if (ingredientData === 'https://www.themealdb.com/api/json/v1/1/list.php?i=list') {
  //   xulambs = 'drinks';
  // }
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(ingredientRequestURL);
      const { meals } = await response.json();
      setIngredientData(meals);
    };
    fetchApi();
  }, [ingredientRequestURL]);

  const GlobalState = {
    ingredientData,
    setIngredientData,
    setIngredientRequestURL,
  };

  return (
    <MealIngredientsContext.Provider value={ GlobalState }>
      {children}
    </MealIngredientsContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

MealIngredientsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useIngredients() {
  return useContext(MealIngredientsContext);
}
