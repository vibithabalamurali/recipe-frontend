import React from "react";
import { Link } from "react-router-dom";

function Header({ user, onLogout, favorites }) {
  return (
    <div className="header">
      <h1>CookSphere</h1>
      <nav>
        <Link to="/">HOME</Link>
        {user && <Link to="/favorites">FAVORITES ({favorites.length})</Link>}
        {user && <Link to="/recipe-list">RECIPE-LIST</Link>} {/* Add Recipe List link */}
        {user && <Link to="/profile">PROFILE</Link>}
        {user ? (
          <button onClick={onLogout}>LOGOUT</button>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </nav>
    </div>
  );
}

export default Header;