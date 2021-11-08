import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';

const MealsContext = createContext({});

export function MealsProvider({ children }) {
  const [mealData, setMealData] = useState([]);

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const { drinks } = await response.json();
      setMealData(drinks);
    };
    fetchApi();
  }, []);

  const GlobalState = {
    mealData,
    setMealData,
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
