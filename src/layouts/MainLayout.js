import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
