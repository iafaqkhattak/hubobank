import React from "react";
import NavBar from "./pages/navBar/NavBar";
import Hero from "./pages/hero/Hero";
import "../src/App.css";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
