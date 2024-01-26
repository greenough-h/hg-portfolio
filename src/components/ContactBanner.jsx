import React from "react";
import "./ContactBanner.css";
import { Link } from "react-router-dom";

export default function ContactBanner() {
  return (
    <div className="ContactBanner d-flex justify-content-around mt-3">
      <div></div>
      <div className="contact-prompt">
        <h4>Let's work together!</h4>
        <h5>Get in contact here</h5>
      </div>
      <div>
        <Link to="/Contact" className="btn">
          Contact Me
        </Link>
      </div>
      <div></div>
    </div>
  );
}
