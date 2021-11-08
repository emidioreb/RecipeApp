export const saveToken = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

export const emailToken = (xablau) => {
  const objEmail = {
    email: xablau,
  };
  localStorage.setItem('user', JSON.stringify(objEmail));
};
