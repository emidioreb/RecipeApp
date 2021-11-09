import React from 'react';
import useMeals from '../hooks/useMeals';

function SearchBar() {
  const { mealFilter, setMealFilter } = useMeals();

  function submit() {
    console.log('test');
  }

  function oneLetterAllowed() {
    const ERROR_MSG = 'Sua busca deve conter somente 1 (um) caracter';
    if (mealFilter.primeiraLetra === true && mealFilter.searchInput.length >= 1) {
      global.alert(ERROR_MSG);
      setMealFilter({
        ...mealFilter,
        searchInput: '',
      });
    }
  }

  return (
    <form className="filter-menu">
      <input
        type="text"
        value={ mealFilter.searchInput }
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ ({ target: { value } }) => {
          setMealFilter({
            ...mealFilter,
            searchInput: value,
          });
          oneLetterAllowed();
        } }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="radio-filter"
          data-testid="ingredient-search-radio"
          value={ mealFilter.ingredient }
          onChange={ () => setMealFilter({
            ...mealFilter,
            ingrediente: true,
            nome: false,
            primeiraLetra: false,
          }) }
        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="radio-filter"
          data-testid="name-search-radio"
          value={ mealFilter }
          onChange={ () => setMealFilter({
            ...mealFilter,
            ingrediente: false,
            nome: true,
            primeiraLetra: false,
          }) }
        />
        Nome
      </label>
      <label htmlFor="word">
        <input
          type="radio"
          name="radio-filter"
          data-testid="first-letter-search-radio"
          value={ mealFilter }
          onChange={ () => setMealFilter({
            ...mealFilter,
            ingrediente: false,
            nome: false,
            primeiraLetra: true,
          }) }
        />
        Primeira letra
      </label>
      <button
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
