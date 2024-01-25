import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Contact from "../components/Contact";

export default function About() {
  return (
    <div className="About">
      <nav className="container">
        <Link to="/" className="navigation">
          Home
        </Link>
        <Link to="/About" className="navigation active">
          About
        </Link>
      </nav>
      <div className="row">
        <div className="col">
          <h4>A little bit about</h4>
          <h1>Hayley Greenough</h1>
          <p>
            I've always had an artistic eye. Whether it be studio art or dance,
            creativity always drove me and has brought me joy. I also thoroughly
            enjoy the puzzle that coding presents. I have a few years of data
            science and ML experience in R and sought to find a way to marry
            these two with front-end development.
          </p>
          <p>
            I have experience building websites with HTML, CSS, JavaScript, and
            React. I am happily open to work on new projects - feel free to
            reach out to me if you're interested in working together!
          </p>
        </div>
        <div className="col">
          <img
            src={require("../images/me.jpeg")}
            alt="Headshot of Hayley Greenough"
            className="img-fluid"
          />
        </div>
      </div>
      <Contact />
    </div>
  );
}
