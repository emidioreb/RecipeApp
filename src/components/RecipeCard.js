import React from 'react';

export default function RecipeCard({ recipeTitle, recipeThumb }) {
  return (
    <div className="recipe-card">
      <h4>{recipeTitle}</h4>
      <img
        className="recipe-thumb"
        src={ recipeThumb }
        alt="Imagem da receita"
      />
    </div>
  );
}
