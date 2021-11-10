import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

function useRecipeDetails(id) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  function getTypeAndURLInfo() {
    if (pathname.includes('comida')) {
      return {
        URL: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        type: 'meals',
        onlyType: 'Meal',
      };
    }
    return {
      URL: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      type: 'drinks',
      onlyType: 'Drink',
    };
  }

  function treatVideoID(link) {
    const VIDEO_ID_CHARACTERS_NUMBER = -11;
    if (link) {
      const embedID = link.slice(VIDEO_ID_CHARACTERS_NUMBER);
      return embedID;
    }
    return undefined;
  }

  useEffect(() => {
    const { URL, type, onlyType } = getTypeAndURLInfo();
    async function fetchData() {
      const response = await fetch(URL);
      const recipeObject = await response.json();
      const data = {
        image: recipeObject[type][0][`str${onlyType}Thumb`],
        title: recipeObject[type][0][`str${onlyType}`],
        category: recipeObject[type][0].strCategory,
        instructions: recipeObject[type][0].strInstructions,
        video: treatVideoID(recipeObject[type][0].strYoutube),
      };
      setRecipe(data);
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
