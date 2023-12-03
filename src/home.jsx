import React from "react";
import NavBar from "./pages/navBar/NavBar";
import Hero from "./pages/hero/Hero";
import HowWeWork from "./pages/howWeWork/HowWeWork";
import Downloads from "./pages/downloads/Downloads";
import CardDeals from "./pages/cardDeals/CardDeals";
import AboutUs from "./pages/aboutUs/AboutUs";
import Companies from "./pages/companies/Companies";
import Services from "./pages/services/Services";
import "../src/App.css";
const Home = () => {
  return (
    <div className="d-flex flex-column bg-navbar">
      <NavBar />
      <Hero />
      <HowWeWork />
      <Downloads />
      <CardDeals />
      <AboutUs />
      <Companies />
      <Services />
    </div>
  );
};

export default Home;
