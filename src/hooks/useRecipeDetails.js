import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function useRecipeDetails(id) {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  let typeAndInfo = {};
  const PATH = useHistory().location.pathname;

  switch (PATH) {
  case (PATH.includes('comida')):
    typeAndInfo = {
      URL: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      type: 'meals',
      onlyType: 'Meal',
    };
    break;
  case (PATH.includes('bebida')):
    typeAndInfo = {
      URL: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      type: 'drinks',
      onlyType: 'Drink',
    };
    break;
  default:
    break;
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
    const { URL, type, onlyType } = typeAndInfo;
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
  }, [typeAndInfo]);

  return {
    recipe,
    loading,
  };
}

export default useRecipeDetails;
