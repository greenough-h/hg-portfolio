import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <Link to="/">Home</Link>
      <h1>This is the about page</h1>
    </div>
  );
}
