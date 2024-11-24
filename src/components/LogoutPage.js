import React from "react";
import { Link } from "react-router-dom";

const LogoutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "250px",
        height: "auto",
        margin: "20px",
        padding: "20px",
        backgroundColor: "skyblue",
        textAlign: "center",
      }}
    >
      <h1>Logout</h1>
      <h4>You are now Logout</h4>
      <Link to="/">Return to Login Page</Link>
    </div>
  );
};

export default LogoutPage;
