import React, { useState } from 'react';

export default function Progresso() {
  const [recipe, setRecipe] = useState({
    photo: '',
    title: '',
    category: '',
    ingredients: {},
    instructions: '',
  });
  return (
    <div>
      <img alt="Recipe" data-testid="recipe-photo" src={ recipe.photo } />
      <h1 data-testid="recipe-title">
        {recipe.title}
      </h1>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      <h3 data-testid="recipe-category">
        {recipe.category}
      </h3>
      <button type="button" data-testid="finish-recipe-btn">Finalizar receita</button>
    </div>
  );
}
