import React from "react";
import "../css/style.css";


export default function Footer() {
  return (
    <footer className="Footer">

      <h1>REACH OUT TO US ON.</h1>
      <div className="reach-links">

        <a href="https://github.com/OpenSouceCode" >
          <img alt="../png/footer-github.png" src={require('../png/footer-github.png')} />
        </a>
        <a href="https://join.slack.com/t/opensourcecode/shared_invite/zt-dcirfg6f-IYydr1qUsAAYaq_ZA48jmg">
          <img alt="../png/footer-slack.png" src={require('../png/footer-slack.png')} />
        </a>

        <a href="https://www.linkedin.com/company/opensourcecode"> <img alt="../png/footer-linkedin.png" src={require('../png/footer-linkedin.png')} />
        </a>
      </div>
    </footer>
  );
}
