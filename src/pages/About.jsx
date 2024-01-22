import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <Link to="/">Home</Link>
      <div className="row">
        <div className="col">
          <h2>Hello! I'm</h2>
          <h1>Hayley Greenough</h1>
          <h4>A little about me</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nam,
            eum dolor sunt quisquam, iste voluptas itaque voluptates
            voluptatibus vero maxime provident velit neque nemo optio est
            distinctio eligendi quaerat.
          </p>
        </div>
        <div className="col">
          <img src="/" alt="" />
        </div>
      </div>
      <h3>Contact Information</h3>
    </div>
  );
}
