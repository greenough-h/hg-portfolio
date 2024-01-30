import { Link } from "react-router-dom";
import CurrentWorkSection from "../components/CurrentWorkSection";
import ContactBanner from "../components/ContactBanner";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <nav className="container">
        <Link to="/" className="navigation active">
          Home
        </Link>
        <Link to="/About" className="navigation">
          About
        </Link>
      </nav>
      <header>
        <h2>Hi I'm</h2>
        <h1>Hayley Greenough</h1>
        <h3 className="mt-2 mb-2">Front-end Developer, based in California</h3>
        <Link to="/Contact" className="btn mt-5">
          Contact Me
        </Link>
      </header>
      <main>
        <p>Take a look at a few of the applications I've created here:</p>
        <CurrentWorkSection orient="image-left" content="Weather" />
        <CurrentWorkSection orient="image-right" content="PetName" />
      </main>
      <ContactBanner />
      <div>
        <a href="mailto:greenough.hayley@gmail.com" className="email">
          greenough.hayley@gmail.com
        </a>
      </div>
      <footer className="d-flex justify-content-center">
        <a
          href="https://www.linkedin.com/in/hayley-greenough/"
          target="_blank"
          rel="noreferrer"
          className="footLink"
        >
          linkedin
        </a>
        <a
          href="https://github.com/greenough-h"
          target="_blank"
          rel="noreferrer"
          className="footLink"
        >
          github
        </a>
        <a
          href="https://www.instagram.com/hayleygreenough.art/"
          target="_blank"
          rel="noreferrer"
          className="footLink"
        >
          instagram
        </a>
      </footer>
    </div>
  );
}
