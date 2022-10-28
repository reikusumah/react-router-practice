import React from "react";

function Footer() {
  return (
    <div style={myFooter}>
      <p>Copyright &copy; 2022</p>
    </div>
  );
}

export default Footer;

const myFooter = {
  display: "flex",
  background: "#655D8A",
  justifyContent: "center",
  color: "#fff",
  alignItems: "center",
  position: "absolute",
  bottom: "0",
  width: "100%",
};
