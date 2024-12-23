import React from "react";

const Body = ({ user }) => {
  return (
    <div style={styles.container}>
      {user ? (
        <h2 style={styles.heading}>Welcome, {user}!</h2>
      ) : (
        <h2 style={styles.heading}>Welcome to CRM Master!</h2>
      )}
      <p style={styles.text}>
        This is your one-stop solution for managing customer relationships. Sign in or create an account to get started!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    marginTop: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    color: "#2c3e50",
  },
  text: {
    fontSize: "1rem",
    color: "#7f8c8d",
    marginTop: "1rem",
  },
};

export default Body;
