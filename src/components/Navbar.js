import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={nav}>
      <h1>
        <Link to="/" style={myLogo}>
          reikusumah
        </Link>
      </h1>
      <ul style={myUl}>
        <li>
          <Link to="/" style={link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={link}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

// Styling
const myLogo = {
  textDecoration: "none",
  color: "#fff",
};

const nav = {
  padding: "0 6rem",
  display: "flex",
  background: "#655D8A",
  justifyContent: "space-between",
  color: "#fff",
  alignItems: "center",
};

const myUl = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "20%",
};

const link = {
  textDecoration: "none",
  color: "#fff",
};
