import { Link } from "react-router-dom";
import CurrentWorkSection from "../components/CurrentWorkSection";
import ContactBanner from "../components/ContactBanner";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <nav>
        <Link to="/About">About</Link>
      </nav>
      <header>
        <h1>Hayley Greenough</h1>
        <h3>Front-end Developer, based in California</h3>
        <a href="/" className="btn mt-5">
          Contact Me
        </a>
      </header>
      <main>
        <p>Take a look at some of my current work</p>
        <CurrentWorkSection
          orient="image-left"
          title="Weather App"
          imgpath="../images/weather.png"
        />
        <CurrentWorkSection
          orient="image-right"
          title="AI Pet Name Generator"
          imgpath="../images/AIpetname.png"
        />
      </main>
      <ContactBanner />
    </div>
  );
}
