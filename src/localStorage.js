export const saveToken = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

export const emailToken = (mail) => {
  const objEmail = {
    email: mail,
  };
  localStorage.setItem('user', JSON.stringify(objEmail));
};

export const doneRecipes = (recipes) => {
  const RecipesObj = [recipes];
  localStorage.setItem('recipesDone', JSON.stringify(RecipesObj));
};
