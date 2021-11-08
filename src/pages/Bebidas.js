import React from 'react';
import useDrinks from '../hooks/useDrinks';

function Bebidas() {
  const { drinkData } = useDrinks();
  console.log(drinkData);
  return (
    <>
      {drinkData.map((drink, index) => (
        <p key={ index }>{drink.strDrink}</p>
      ))}
    </>
  );
}

export default Bebidas;
