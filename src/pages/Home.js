import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <h1>This is Home</h1>
      <Link to="/About">About</Link>
    </div>
  );
}
