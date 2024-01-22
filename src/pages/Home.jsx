import { Link } from "react-router-dom";
import CurrentWorkSection from "../components/CurrentWorkSection";
import ContactBanner from "../components/ContactBanner";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <nav>
        <Link to="/About" className="navigation">
          About
        </Link>
      </nav>
      <header>
        <h1>Hayley Greenough</h1>
        <h3>Front-end Developer, based in California</h3>
        <Link to="/About" className="btn mt-5">
          Contact Me
        </Link>
      </header>
      <main>
        <p>Take a look at some of my current work!</p>
        <CurrentWorkSection
          orient="image-left"
          title="Weather App"
          imgpath="../images/weather.png"
          siteLink="https://weather-app-react-88.netlify.app/"
        />
        <CurrentWorkSection
          orient="image-right"
          title="AI Pet Name Generator"
          imgpath="../images/AIpetname.png"
          siteLink="https://rolypoly-petnames.netlify.app/"
        />
      </main>
      <ContactBanner />
      <footer className="d-flex justify-content-center">
        <div className="footLink">linkedin</div>
        <div className="footLink">github</div>
        <div className="footLink">instagram</div>
        <div className="footLink">site</div>
      </footer>
    </div>
  );
}
