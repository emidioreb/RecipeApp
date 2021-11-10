import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';

const MealIngredientsContext = createContext({});

export function MealIngredientsProvider({ children }) {
  const [ingredientData, setIngredientData] = useState([]);
  const [ingredientRequestURL, setIngredientRequestURL] = useState('');
  const [type, setType] = useState('');

  const fetchApi = async (food) => {
    const response = await fetch(ingredientRequestURL);
    const resolve = await response.json();
    setIngredientData(resolve[food]);
  };

  useEffect(() => {
    fetchApi(type);
  }, [ingredientRequestURL]);

  const GlobalState = {
    ingredientData,
    setIngredientData,
    setIngredientRequestURL,
    setType,
    type,
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
