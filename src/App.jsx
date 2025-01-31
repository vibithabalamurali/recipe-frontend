import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";
import IntroPage from "./components/IntroPage";

// Initial recipe data
const initialRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    calories: 600,
    fat: 20,
    protein: 35,
    carbs: 80,
    fiber: 5,
    ingredients: ["spaghetti", "tomato", "ground beef", "onion", "garlic", "olive oil", "cheese"],
    procedure: [
      "Boil spaghetti according to package instructions.",
      "In a pan, sauté onions and garlic in olive oil.",
      "Add ground beef and cook until browned.",
      "Add tomatoes, salt, and pepper, and simmer.",
      "Serve the sauce over the spaghetti and top with cheese."
    ],
    image: "/images/sb.jpg"
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

function App() {
  const [user, setUser] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState(initialRecipes); // Manage the recipes state here

  const handleLogin = (username, password) => {
    const userFound = usersData.find((user) => user.username === username && user.password === password);
    if (userFound) {
      setUser(userFound.username);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => setUser(null);

  const handleRegister = (username, password) => {
    const newUser = { username, password };
    setUsersData([...usersData, newUser]);
    setUser(username);
  };

  const handleAddToFavorites = (recipe) => {
    if (!favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const handleRemoveFromFavorites = (recipeId) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== recipeId));
  };

  const addNewPost = (newPost) => {
    setRecipes([...recipes, newPost]); // Add new post to recipes list
  };

  return (
    <Router>
      <Header user={user} onLogout={handleLogout} favorites={favorites} />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <IntroPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/home"
          element={user ? (
            <Home
              user={user}
              recipes={recipes} // Pass recipes to Home component
              setRecipes={setRecipes} // Pass setRecipes function to Home component
              onAddToFavorites={handleAddToFavorites}
            />
          ) : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} recipes={recipes} addNewPost={addNewPost} /> : <Navigate to="/login" />}
        />
        <Route
          path="/favorites"
          element={user ? <Favorites favorites={favorites} onRemoveFromFavorites={handleRemoveFromFavorites} /> : <Navigate to="/login" />}
        />
        <Route
          path="/recipe-list"
          element={user ? <RecipeList recipes={recipes} onAddToFavorites={handleAddToFavorites} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;



