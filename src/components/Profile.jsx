import React, { useState } from "react";

const ProfilePage = ({ addNewPost }) => {
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);
  const [followers, setFollowers] = useState(1200); // example number
  const [following, setFollowing] = useState(450); // example number
  const [posts, setPosts] = useState(10); // example number of posts
  const [name, setName] = useState(localStorage.getItem("name") || "John Doe");
  const [isEditing, setIsEditing] = useState(false); // Flag to check if editing is enabled
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newPost, setNewPost] = useState({
    image: "",
    name: "",
    calories: "",
    fat: "",
    protein: "",
    carbs: "",
    fiber: "",
    ingredients: "",
    procedure: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // To store validation errors

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("name", name); // Save the name to localStorage
    setIsEditing(false); // Disable editing
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreatePost = () => {
    // Validate the form fields
    if (
      !newPost.name ||
      !newPost.image ||
      !newPost.calories ||
      !newPost.fat ||
      !newPost.protein ||
      !newPost.carbs ||
      !newPost.fiber ||
      !newPost.ingredients ||
      !newPost.procedure
    ) {
      setErrorMessage("Please fill out all fields before submitting the post.");
      return; // Stop the function if any field is missing
    }

    // Create the new post
    const createdPost = {
      ...newPost,
      id: Date.now(), // Generate a unique id based on timestamp
    };

    // Pass the new post to the parent component (App.js)
    addNewPost(createdPost);

    // Reset the form and close the post creation form
    setPosts(posts + 1); // Increment post count
    setIsCreatingPost(false); // Close the post creation form
    setErrorMessage(""); // Clear error message after successful post
  };

  return (
    <div style={styles.container}>
      <div style={styles.profile}>
        <input type="file" accept="image/*" onChange={handleImageChange} style={styles.imageInput} />
        <div style={styles.profileImageContainer}>
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            style={styles.profileImage}
          />
        </div>

        {isEditing ? (
          <div style={styles.editSection}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              style={styles.editNameInput}
            />
            <button onClick={handleSave} style={styles.saveButton}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <h2 style={styles.name}>{name}</h2>
            <button onClick={() => setIsEditing(true)} style={styles.editButton}>
              Edit
            </button>
          </div>
        )}

        <div style={styles.stats}>
          <p style={styles.stat}>Posts: {posts}</p>
          <p style={styles.stat}>Followers: {followers}</p>
          <p style={styles.stat}>Following: {following}</p>
        </div>

        <div>
          <button onClick={() => setIsCreatingPost(true)} style={styles.createPostButton}>
            Create Post
          </button>
        </div>

        {isCreatingPost && (
          <div style={styles.createPostForm}>
            <h3>Create a New Post</h3>

            {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>} {/* Display error message */}

            <input
              type="text"
              name="name"
              value={newPost.name}
              onChange={handlePostChange}
              placeholder="Post Name"
              style={styles.inputField}
            />
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handlePostChange}
              style={styles.inputField}
            />
            <input
              type="number"
              name="calories"
              value={newPost.calories}
              onChange={handlePostChange}
              placeholder="Calories"
              style={styles.inputField}
            />
            <input
              type="number"
              name="fat"
              value={newPost.fat}
              onChange={handlePostChange}
              placeholder="Fat"
              style={styles.inputField}
            />
            <input
              type="number"
              name="protein"
              value={newPost.protein}
              onChange={handlePostChange}
              placeholder="Protein"
              style={styles.inputField}
            />
            <input
              type="number"
              name="carbs"
              value={newPost.carbs}
              onChange={handlePostChange}
              placeholder="Carbs"
              style={styles.inputField}
            />
            <input
              type="number"
              name="fiber"
              value={newPost.fiber}
              onChange={handlePostChange}
              placeholder="Fiber"
              style={styles.inputField}
            />
            <textarea
              name="ingredients"
              value={newPost.ingredients}
              onChange={handlePostChange}
              placeholder="Ingredients"
              style={styles.textArea}
            />
            <textarea
              name="procedure"
              value={newPost.procedure}
              onChange={handlePostChange}
              placeholder="Procedure"
              style={styles.textArea}
            />

            <button onClick={handleCreatePost} style={styles.createPostButton}>
              Save Post
            </button>
            <button onClick={() => setIsCreatingPost(false)} style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  profile: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageInput: {
    marginBottom: "10px",
  },
  profileImageContainer: {
    marginBottom: "15px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  stats: {
    fontSize: "18px",
    color: "#555",
  },
  stat: {
    margin: "5px 0",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  editSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
  editNameInput: {
    padding: "8px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  saveButton: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  createPostButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
  createPostForm: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  inputField: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textArea: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  errorMessage: {
    color: "red",
    fontSize: "14px",
  },
};

export default ProfilePage;
