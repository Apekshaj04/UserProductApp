import { useState } from "react";
import axios from 'axios';

const DeleteProductList = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:9000/product/${name}`);

      setName("");

      alert("Product deleted successfully!");
    } catch (error) {
      console.error('Error deleting product:', error);
      alert("Error deleting product. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Delete Product</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Product Name:
            </label><br /><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Delete Product
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#555",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#61dafb", // Change heading color to match App-link color
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    color: "#fff",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#ddd",
    color: "#333",
    width: "100%",
    boxSizing: "border-box", // Ensure padding and border are included in width
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#61dafb", // Change button color to match App-link color
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
};

// Add hover effect
styles.button[':hover'] = {
  backgroundColor: "#0078d4", // Darker color on hover
};

// Add click effect
styles.button[':active'] = {
  transform: "scale(0.98)", // Slightly shrink the button on click
};

export default DeleteProductList;
