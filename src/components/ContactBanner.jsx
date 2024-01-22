import React from "react";
import "./ContactBanner.css";

export default function ContactBanner() {
  return (
    <div className="ContactBanner d-flex justify-content-around mt-3">
      <div className="contact-prompt">
        <h4>Interested in working together?</h4>
        <h5>Get in contact!</h5>
      </div>
      <div>
        <a href="/About.jsx" className="btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}
