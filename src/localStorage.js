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

export const progressRecipes = () => {
  // Lógica para verificação se a chave inProgressRecipes existe ou não existe
  const obj = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (obj === null) {
    const recipesProgress = {
      cocktails: {},
      meals: {},
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(recipesProgress));
  }
};
