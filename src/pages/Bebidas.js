import React from 'react';
import Footer from '../components/Footer';
import useDrinks from '../hooks/useDrinks';

function Bebidas() {
  const { drinkData } = useDrinks();
  console.log(drinkData);
  return (
    <>
      {drinkData.map((drink, index) => (
        <p key={ index }>{drink.strDrink}</p>
      ))}
      <Footer />
    </>
  );
}

export default Bebidas;
