import React from 'react';
import useDrinks from '../hooks/useDrinks';
import useMeals from '../hooks/useMeals';

function SearchBar() {
  const { setDrinkOption, setDrinkSearch, drinkOption } = useDrinks();
  const { setMealOption, setMealSearch } = useMeals();

  function submit() {
    console.log('test');
  }
  return (
    <form>
      <input
        type="text"
        value={ drinkOption }
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ (event) => {
          setDrinkSearch(event.target.value);
          setMealSearch(event.target.value);
        } }
      />
      <label htmlFor="ingredient">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={ (event) => {
            setMealOption(event.target.value);
            setDrinkOption(event.target.value);
          } }

        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          data-testid="name-search-radio"
          onChange={ (event) => {
            setMealOption(event.target.value);
            setDrinkOption(event.target.value);
          } }
          value="name"
        />
        Nome
      </label>
      <label htmlFor="word">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ (event) => {
            setMealOption(event.target.value);
            setDrinkOption(event.target.value);
          } }
          value="firstWord"
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
