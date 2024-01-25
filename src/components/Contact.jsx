import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Information</h2>;
      <div className="contact-details">
        <div className="email">
          <h3>Email Me!</h3>
          <a href="mailto:greenough.hayley@gmail.com">
            greenough.hayley@gmail.com
          </a>{" "}
        </div>
        <div className="linkedIn">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/hayley-greenough/"
            target="_blank"
            rel="noreferrer"
          >
            Profile
          </a>
        </div>
        <div className="github">
          <h3>Github</h3>
          <a
            href="https://github.com/greenough-h"
            target="_blank"
            rel="noreferrer"
          >
            Profile
          </a>
        </div>
        <div className="art-instagram">
          <h3>Art Instagram</h3>
          <a
            href="https://www.instagram.com/hayleygreenough.art/"
            target="_blank"
            rel="noreferrer"
          >
            Art Profile
          </a>
        </div>
      </div>
      <div className="break">
        <Link to="/" className="returnHome">
          Return Home
        </Link>
      </div>
    </div>
  );
}
