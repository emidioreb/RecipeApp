import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router';

export default function Categories() {
  const [categoryMeals, setCategotyMeals] = useState([]);
  // const [url, setUrl] = useState('');
  const NUM_MAX_BUTTONS = 5;

  // Aqui eu estou tentando fazer uma lógica para atualizar ambos links em apenas 1 componente.

  // const history = useHistory();
  // console.log(history.location.pathname);

  // if (history.location.pathname === '/comidas/') {
  //   setUrl('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  // } else {
  //   setUrl('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  // }

  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const category = await response.json();
      setCategotyMeals(category.meals);
    };
    fetchApi();
  }, [url]);
  return (
    <div>
      {categoryMeals.map((cat, index) => (
        index < NUM_MAX_BUTTONS && (
          <button
            data-testid={ `${cat.strCategory}-category-filter` }
            type="button"
            key={ cat.strCategory }
          >
            {cat.strCategory}
          </button>)))}
    </div>
  );
}
