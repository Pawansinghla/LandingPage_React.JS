import React, { Component, Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AboutUs from '../Home/AboutUs'
import HowContainer from '../Home/HowContainer'
import LandingContainer from '../Home/LandingContainer'
import WelcomeComponent from '../Home/WelcomeComponent'
import "../../css/style.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <WelcomeComponent />
                <LandingContainer />
                <AboutUs />
                <HowContainer />
                <Footer />

            </div>
        );
    }
}

export default Home;
