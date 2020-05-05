import React from "react";
import "./css/style.css";
import WelcomeComponent from "./Components/WelcomeComponent";
import LandingContainer from "./Components/LandingContainer";
import AboutUs from "./Components/AboutUs";
import Footer from "./Footer";
import HowContainer from "./Components/HowContainer";
import Header from "./Components/Header"
import Settings from "./Components/Settings";


export default function App() {
  return (
    <div className="App">
      <Settings />
    </div>
  );
}