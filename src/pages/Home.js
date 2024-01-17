import { Link } from "react-router-dom";
import CurrentWorkSection from "../components/CurrentWorkSection";
import ContactBanner from "../components/ContactBanner";

export default function Home() {
  return (
    <div className="Home">
      <nav>
        <Link to="/About">About</Link>
      </nav>
      <header>
        <h1>Hayley Greenough</h1>
        <h3>Front-end Developer, based in California</h3>
        <a href="/">Contact Me</a>
      </header>
      <main>
        <p>Take a look at some of my current work</p>
        <CurrentWorkSection orient="image-left" alt="weather" />
        <CurrentWorkSection orient="image-right" alt="ai-petname" />
        <CurrentWorkSection orient="image-left" alt="portfolio" />
      </main>
      <ContactBanner />
    </div>
  );
}
