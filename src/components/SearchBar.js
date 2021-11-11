import React, { useState } from 'react';
import useDrinks from '../hooks/useDrinks';
import useMeals from '../hooks/useMeals';

const history = window.location.pathname;

function SearchBar() {
  const [filter, setFilter] = useState({
    searchInput: '',
    ingrediente: false,
    nome: false,
    primeiraLetra: false,
  });
  const { setMealFilter } = useMeals();
  const { setDrinkFilter } = useDrinks();

  function submit() {
    switch (history) {
    case '/comidas':
      setMealFilter(filter);
      break;
    case '/bebidas':
      setDrinkFilter(filter);
      break;
    default:
    }
  }

  function oneLetterAllowed() {
    const { primeiraLetra, searchInput } = filter;
    const ERROR_MSG = 'Sua busca deve conter somente 1 (um) caracter';
    if (primeiraLetra === true && searchInput.length >= 1) {
      global.alert(ERROR_MSG);
      setFilter({
        ...filter,
        searchInput: '',
      });
    }
  }

  function checkMaximumLetter() {
    const ERROR_MSG = 'Sua busca deve conter somente 1 (um) caracter';
    if (filter.searchInput.length > 1) {
      global.alert(ERROR_MSG);
    }
    setFilter({
      ...filter,
      searchInput: '',
    });
  }

  return (
    <form className="filter-menu">
      <input
        className="filter-input"
        type="text"
        value={ filter.searchInput }
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ ({ target: { value } }) => {
          setFilter({
            ...filter,
            searchInput: value,
          });
          oneLetterAllowed();
        } }
      />
      <label className="filter-radio-label" htmlFor="ingredient">
        <input
          className="filter-radio"
          type="radio"
          name="radio-filter"
          data-testid="ingredient-search-radio"
          value={ filter.ingrediente }
          onChange={ () => setFilter({
            ...filter,
            ingrediente: true,
            nome: false,
            primeiraLetra: false,
          }) }
        />
        Ingredientes
      </label>
      <label className="filter-radio-label" htmlFor="name">
        <input
          className="filter-radio"
          type="radio"
          name="radio-filter"
          data-testid="name-search-radio"
          value={ filter }
          onChange={ () => setFilter({
            ...filter,
            ingrediente: false,
            nome: true,
            primeiraLetra: false,
          }) }
        />
        Nome
      </label>
      <label className="filter-radio-label" htmlFor="word">
        <input
          className="filter-radio"
          type="radio"
          name="radio-filter"
          data-testid="first-letter-search-radio"
          value={ filter }
          onChange={ () => {
            setFilter({
              ...filter,
              ingrediente: false,
              nome: false,
              primeiraLetra: true,
            });
            checkMaximumLetter();
          } }
        />
        Primeira letra
      </label>
      <button
        className="filter-btn"
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => submit() }
      >
        buscar
      </button>
    </form>
  );
}

export default SearchBar;
