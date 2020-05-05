
import React from "react";
import "./css/style.css";


export default function Footer() {
  return (
    <div className="Footer1">

      <h1>REACH OUT TO US ON.</h1>
      <div className="reach-links">

        <a href="https://github.com/OpenSouceCode" >
          <img alt="footer-github.png" src={require('./png/footer-github.png')} />
        </a>
        <a href="https://join.slack.com/t/opensourcecode/shared_invite/zt-dcirfg6f-IYydr1qUsAAYaq_ZA48jmg">
          <img alt="footer-slack.png" src={require('./png/footer-slack.png')} />
        </a>

        <a href="https://www.linkedin.com/company/opensourcecode"> <img alt="footer-linkedin.png" src={require('./png/footer-linkedin.png')} />
        </a>
      </div>
    </div>
  );
}
