import React, { useContext } from 'react';
import Context from '../context/Context';

function Bebidas() {
  const { drinkData } = useContext(Context);
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
