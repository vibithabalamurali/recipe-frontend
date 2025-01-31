import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleLogin = (username) => setUser(username);
  const handleAddToFavorites = (recipe) => {
    if (!favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/" element={user ? <Home onAddToFavorites={handleAddToFavorites} /> : <Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/favorites" element={user ? <Favorites favorites={favorites} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
