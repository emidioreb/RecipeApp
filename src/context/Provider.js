import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [drinkData, setDrinkData] = useState([]);
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';

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
    mail,
    setMail,
    password,
    setPassword,
  };

  return <Context.Provider value={ GlobalState }>{children}</Context.Provider>;
}

// https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
