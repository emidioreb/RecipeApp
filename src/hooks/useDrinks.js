import PropTypes from 'prop-types';
import React, { useEffect, useState, createContext, useContext } from 'react';

const DrinkContext = createContext({});

export function DrinkProvider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [drinkOption, setDrinkOption] = useState('');
  const [drinkSearch, setDrinkSearch] = useState('');

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(URL);
      const { drinks } = await response.json();
      setDrinkData(drinks);
    };
    fetchApi();
  }, []);

  const GlobalState = {
    drinkData,
    setDrinkData,
    drinkOption,
    setDrinkOption,
    drinkSearch,
    setDrinkSearch,
  };

  return (
    <DrinkContext.Provider value={ GlobalState }>
      {children}
    </DrinkContext.Provider>
  );
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

DrinkProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default function useDrinks() {
  return useContext(DrinkContext);
}
