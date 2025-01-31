import React, { useState } from "react";

const recipes = [
  { 
    id: 1, 
    name: "Spaghetti Bolognese", 
    image: "/images/sb.jpg", 
    calories: 600, 
    fat: 20, 
    protein: 35, 
    carbs: 80, 
    fiber: 5, 
    ingredients: ["spaghetti", "tomato", "ground beef", "onion", "garlic", "olive oil", "cheese"], 
    procedure: ["Boil spaghetti according to package instructions.", "In a pan, sauté onions and garlic in olive oil.", "Add ground beef and cook until browned.", "Add tomatoes, salt, and pepper, and simmer.", "Serve the sauce over the spaghetti and top with cheese."]
  },
  {  
    id: 2,  
    name: "Chicken Curry",  
    calories: 700,  
    fat: 30,  
    protein: 40,  
    carbs: 60,  
    fiber: 3,  
    ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic", "rice"],  
    procedure: [  
      "Cook rice as per package instructions.",  
      "In a pan, sauté onions and garlic in oil.",  
      "Add chicken and cook until browned.",  
      "Add curry powder and coconut milk, and simmer.",  
      "Serve the curry with rice."  
    ],  
    image: "/images/cc.jpg"  
  },  
  {  
    id: 3,  
    name: "Grilled Cheese Sandwich",  
    calories: 400,  
    fat: 25,  
    protein: 10,  
    carbs: 30,  
    fiber: 1,  
    ingredients: ["bread", "cheese", "butter"],  
    procedure: [  
      "Butter one side of each bread slice.",  
      "Place cheese between the bread slices.",  
      "Grill in a pan until golden and cheese is melted.",  
      "Serve warm."  
    ],  
    image: "/images/sand.jpg"  
  },  
  {  
    id: 4,  
    name: "Caesar Salad",  
    calories: 300,  
    fat: 18,  
    protein: 10,  
    carbs: 12,  
    fiber: 2,  
    ingredients: ["lettuce", "croutons", "parmesan cheese", "Caesar dressing", "chicken"],  
    procedure: [  
      "Chop lettuce and add to a bowl.",  
      "Add croutons and parmesan cheese.",  
      "Top with grilled chicken slices.",  
      "Drizzle Caesar dressing and toss to combine.",  
      "Serve fresh."  
    ],  
    image: "/images/salad.jpg"  
  },  
  {  
    id: 5,  
    name: "Pancakes",  
    calories: 250,  
    fat: 10,  
    protein: 5,  
    carbs: 30,  
    fiber: 1,  
    ingredients: ["flour", "milk", "eggs", "sugar", "baking powder", "butter"],  
    procedure: [  
      "Mix flour, sugar, and baking powder in a bowl.",  
      "Add milk and eggs, and mix into a batter.",  
      "Heat butter in a pan and pour the batter.",  
      "Cook until golden brown on both sides.",  
      "Serve with syrup or toppings of your choice."  
    ],  
    image: "/images/pc.jpg"  
  },  
  {  
    id: 6,  
    name: "Vegetable Stir Fry",  
    calories: 200,  
    fat: 5,  
    protein: 6,  
    carbs: 35,  
    fiber: 6,  
    ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "olive oil"],  
    procedure: [  
      "Heat olive oil in a pan.",  
      "Add ginger and garlic, and sauté.",  
      "Add mixed vegetables and stir-fry until tender.",  
      "Add soy sauce and toss well.",  
      "Serve hot with rice or noodles."  
    ],  
    image: "/images/stir.jpg"  
  },  
  {  
    id: 7,  
    name: "Chocolate Brownies",  
    calories: 450,  
    fat: 22,  
    protein: 6,  
    carbs: 50,  
    fiber: 2,  
    ingredients: ["chocolate", "butter", "sugar", "eggs", "flour", "cocoa powder"],  
    procedure: [  
      "Melt chocolate and butter together.",  
      "Mix sugar, eggs, and melted chocolate mixture.",  
      "Add flour and cocoa powder, and mix into a batter.",  
      "Bake in a preheated oven at 180°C for 25-30 minutes.",  
      "Cool and cut into squares."  
    ],  
    image: "/images/brown.jpg"  
  },  
  {  
    id: 8,  
    name: "Mango Smoothie",  
    calories: 150,  
    fat: 1,  
    protein: 3,  
    carbs: 30,  
    fiber: 2,  
    ingredients: ["mango", "milk", "sugar", "ice cubes"],  
    procedure: [  
      "Peel and chop the mango.",  
      "Blend mango, milk, sugar, and ice cubes in a blender.",  
      "Pour into a glass and serve chilled."  
    ],  
    image: "/images/mango.jpg"  
  },  
  {  
    id: 9,  
    name: "Paneer Butter Masala",  
    calories: 500,  
    fat: 20,  
    protein: 25,  
    carbs: 50,  
    fiber: 3,  
    ingredients: ["paneer", "butter", "tomato", "cream", "spices", "onion", "garlic"],  
    procedure: [  
      "Heat butter in a pan and sauté onions and garlic.",  
      "Add tomatoes and cook until softened.",  
      "Blend the mixture into a smooth paste.",  
      "Add spices, cream, and paneer cubes.",  
      "Simmer for a few minutes and serve with naan or rice."  
    ],  
    image: "/images/paneer.jpg"  
  },  
  {  
    id: 10,  
    name: "Biryani",  
    calories: 150,  
    fat: 3,  
    protein: 4,  
    carbs: 20,  
    fiber: 3,  
    ingredients: ["rice", "chicken/mutton", "yogurt", "onion", "spices", "saffron", "ghee"],  
    procedure: [  
      "Marinate the meat with yogurt and spices.",  
      "Cook rice with whole spices until half done.",  
      "Layer rice and meat in a pot.",  
      "Add saffron milk and ghee, and cook on low heat.",  
      "Serve hot with raita."  
    ],  
    image: "/images/cbir.jpg"  
  }  

];

const RecipeList = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Recipe List</h2>
      {!selectedRecipe ? (
        <div style={recipeGridStyle}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={recipeCardStyle}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <img src={recipe.image} alt={recipe.name} style={recipeImageStyle} />
              <h4 style={recipeTitleStyle}>{recipe.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div style={recipeDetailsStyle}>
          <button onClick={() => setSelectedRecipe(null)} style={buttonStyle}>
            Back to Recipes
          </button>
          <h3>{selectedRecipe.name}</h3>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} style={recipeImageStyle} />
          
          <div style={nutritionInfoStyle}>
            <h4>Nutrition Info:</h4>
            <p><strong>Calories:</strong> {selectedRecipe.calories} kcal</p>
            <p><strong>Fat:</strong> {selectedRecipe.fat}g</p>
            <p><strong>Protein:</strong> {selectedRecipe.protein}g</p>
            <p><strong>Carbs:</strong> {selectedRecipe.carbs}g</p>
            <p><strong>Fiber:</strong> {selectedRecipe.fiber}g</p>
          </div>

          <div>
            <h4>Ingredients:</h4>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Procedure:</h4>
            <ol>
              {selectedRecipe.procedure.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

/* Styles */
const containerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundImage: "url('/images/pay.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "24px",
  color: "#d5006d",
  marginBottom: "20px",
};

/* Grid Layout: 5 recipes per row */
const recipeGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "15px",
  maxWidth: "1200px",
  width: "100%",
  padding: "10px",
};

/* Recipe Cards */
const recipeCardStyle = {
  textAlign: "center",
  background: "#fff",
  borderRadius: "10px",
  padding: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s",
  cursor: "pointer",
};

const recipeImageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px",
};

const recipeTitleStyle = {
  marginTop: "10px",
  fontSize: "16px",
  color: "#6a1b9a",
};

/* Recipe Details */
const recipeDetailsStyle = {
  textAlign: "center",
  padding: "20px",
  background: "rgba(255, 255, 255, 0.8)",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

/* Button */
const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#d5006d",
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

const nutritionInfoStyle = {
  textAlign: "left",
  marginBottom: "20px",
};

export default RecipeList;
