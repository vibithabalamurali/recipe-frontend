import React, { useState } from "react";

const Home = ({ user, onAddToFavorites, recipes, setRecipes }) => {
  // Function to handle liking a recipe and updating the likes count
  const handleThumbsUp = (recipeId) => {
    const updatedRecipesList = recipes.map((recipe) => {
      if (recipe.id === recipeId) {
        return { ...recipe, likes: recipe.likes + 1 };  // Increment the likes for the recipe
      }
      return recipe;
    });

    setRecipes(updatedRecipesList);  // Update the recipes with the new likes count
  };

  return (
    <div className="home">
      <h2>Welcome, {user}!</h2>
      <h3>Recipes</h3>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h4>{recipe.name}</h4>
            <div className="buttons">
              <button onClick={() => handleThumbsUp(recipe.id)}>
                👍 {recipe.likes} Likes
              </button>
              <button onClick={() => onAddToFavorites(recipe)}>Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
