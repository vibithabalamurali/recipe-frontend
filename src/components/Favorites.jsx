import React from "react";

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  return (
    <div className="favorites-container" style={{ padding: "20px" }}>
      <h2>Your Favorite Recipes</h2>
      {favorites.length > 0 ? (
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {favorites.map((recipe, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                width={50}
                height={50}
                style={{ marginRight: "10px", borderRadius: "5px" }}
              />
              <span>{recipe.name}</span>
              {/* Add a button to remove the recipe from favorites */}
              <button
                onClick={() => onRemoveFromFavorites(recipe.id)}
                style={{
                  marginLeft: "auto", // Ensure it is positioned at the right
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontSize: "14px",
                  width: "90px",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
