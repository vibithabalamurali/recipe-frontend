import React, { useState } from "react";

function CreatePost({ onPostSubmit }) {
  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedure, setProcedure] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodName || !ingredients || !procedure || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const newPost = {
      foodName,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert ingredients into an array
      procedure: procedure.split(".").map((item) => item.trim()), // Split procedure into steps
      image: URL.createObjectURL(image), // Temporary URL for previewing uploaded image
    };

    // Pass the new post back to the parent (optional: you can store it in the state or database)
    onPostSubmit(newPost);

    alert("Post created successfully!");
    // Clear the form after submission
    setFoodName("");
    setIngredients("");
    setProcedure("");
    setImage(null);
  };

  return (
    <div className="create-post-container">
      <h2>Create a Food Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        {/* Food Name */}
        <label>
          Food Name:
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="Enter the food name"
            required
          />
        </label>

        {/* Ingredients */}
        <label>
          Ingredients (comma-separated):
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., chicken, curry powder, coconut milk"
            required
          />
        </label>

        {/* Procedure */}
        <label>
          Procedure (separate steps with periods):
          <textarea
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            placeholder="e.g., Chop the vegetables. Boil the rice. Stir-fry the ingredients."
            required
          />
        </label>

        {/* Upload Image */}
        <label>
          Upload Food Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </label>

        <button type="submit" className="submit-post-button">
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
