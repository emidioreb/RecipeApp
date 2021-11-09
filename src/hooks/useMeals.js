import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';

const MealsContext = createContext({});

export function MealsProvider({ children }) {
  const [mealData, setMealData] = useState([]);
  const [mealFilter, setMealFilter] = useState({
    searchInput: '',
    ingrediente: false,
    nome: false,
    primeiraLetra: false,
  });

  const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
  let URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

  if (mealFilter.ingrediente) {
    URL = `${BASE_URL}i=${mealFilter.searchInput}`;
  } else if (mealFilter.nome) {
    URL = `${BASE_URL}s=${mealFilter.searchInput}`;
  } else if (mealFilter.primeiraLetra) {
    URL = `${BASE_URL}f=${mealFilter.searchInput}`;
  }

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const { meals } = await response.json();
      setMealData(meals);
    };
    fetchApi();
  }, [URL]);

  const GlobalState = {
    mealData,
    setMealData,
    setMealFilter,
  };

  return (
    <MealsContext.Provider value={ GlobalState }>
      {children}
    </MealsContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

MealsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useMeals() {
  return useContext(MealsContext);
}
