import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join hands with us to have great Food Experience in Vizag
        </p>
        <div className="input-areas"></div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>About Us</h2>
            
            <Link to="/">Careers</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <p>uday@gmail.com</p>
            <p>+91-987654321</p>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
