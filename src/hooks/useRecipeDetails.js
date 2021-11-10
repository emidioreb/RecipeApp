import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function useRecipeDetails(id) {
  let URL = '';
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  if (pathname.includes('comida')) {
    URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  } else if (pathname.includes('bebida')) {
    URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await fetch(URL);
      const { meals } = await response.json();
      setRecipe(meals[0]);
    }
    fetchData();
    setLoading(false);
  }, []);

  return {
    recipe,
    loading,
  };
}

export default useRecipeDetails;
