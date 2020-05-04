import React from "react";
import "./styles.css";
import WelcomeComponent from "./Components/WelcomeComponent";
import LandingContainer from "./Components/LandingContainer";
import AboutUs from "./Components/AboutUs";
import Footer from "./Footer";
import HowContainer from "./Components/HowContainer";

export default function App() {
  return (
    <div className="App">
      <WelcomeComponent />
      <LandingContainer />

      <AboutUs />
      <HowContainer />
      <Footer />
    </div>
  );
}
