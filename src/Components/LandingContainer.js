import React from 'react';
import "../styles.css";
export default function LandingContainer() {
  return (
<div className="landing-container">
<div className="row">
  <div class="left-col-img">
  <img alt="left-svg" src={ require('../png/left-SVG.png') } />
  </div>

  <div className="left-col">
  
    <div className="sign-in-buttons">
      <button className="email-button" type="submit">
        <img alt="icon-mat-email" src={require('../png/Iconmaterial-email.png')} />
        <p>Sign in with email</p>
      </button>
  
      <button className="google-button" type="submit">
        <img alt="Icon-simple-google" src={require('../png/Icon-simple-google.png')} />
        <p>Sign in with Google</p>
      </button>
  
      <button className="github-button" type="submit">
        <img alt="Icon-awesome-github.png" src={require('../png/Iconawesome-github.png')} />
        <p>Sign in with Github</p>
      </button>
  
    </div>
    
    <div className="email-section">
      <h3>Sign in with email.</h3>
      <form className="email">
        
        
        <input
          type="email"
          class="email-input sign-in-input"
          placeholder="Email"
        />
    
        <div className="name">
          <input
            type="text"
            className="name-fname sign-in-input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="name-lname sign-in-input"
            placeholder="Last Name"
          />
        </div>

        <input type="password"
          className="password-input sign-in-input" placeholder="Choose password" />
        <div className="email-buttons">
          <button type="submit" class="email-submit">Submit</button>
          <button type="submit" class="email-next">Next</button>
          <button class="email-cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>

  <div className="right-col">
    <img alt="right-svg.png" src={require('../png/right-svg.png')} />
  </div>
</div>
</div>
  );
}