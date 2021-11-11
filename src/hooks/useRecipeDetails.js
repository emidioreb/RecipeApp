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

  function createMeasureAndIngredient(object) {
    const ingredients = Object.entries(object)
      .filter((element) => element[0].includes('strIngredient'));
    const measures = Object.entries(object)
      .filter((element) => element[0].includes('strMeasure'));

    return ingredients.reduce((acc, curr, index) => {
      if (curr[1]) {
        return [...acc, `${measures[index][1]} ${curr[1]}`];
      }
      return acc;
    }, []);
  }

  useEffect(() => {
    const { URL, type, onlyType } = getTypeAndURLInfo();
    async function fetchData() {
      const response = await fetch(URL);
      const responseData = await response.json();
      const recipeObject = responseData[type][0];
      const data = {
        image: recipeObject[`str${onlyType}Thumb`],
        title: recipeObject[`str${onlyType}`],
        category: recipeObject.strCategory,
        instructions: recipeObject.strInstructions,
        video: treatVideoID(recipeObject.strYoutube),
        dosages: createMeasureAndIngredient(recipeObject),
      };
      setRecipe(data);
    }
    fetchData();
    setLoading(false);
  }, [getTypeAndURLInfo]);

  return {
    recipe,
    loading,
  };
}

export default useRecipeDetails;
