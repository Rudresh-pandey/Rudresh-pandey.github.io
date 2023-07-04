import Navbar from "../components/Navbar";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar active={"home"} />
      <div className="hero">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p className="intro">
            Hello, <br /> I am{" "}
            <span style={{ fontWeight: "bold", fontSize: "32px" }}>
              Rudresh pandey
            </span>
            , I make{" "}
            <span style={{ fontWeight: "bold", fontSize: "32px" }}>
              Full Stack Web Apps
            </span>
          </p>
          <p>
            Currently i am BCA student learning Frameworks, languages, <br />{" "}
            tools, how to center a div, Android development, and more ...
          </p>
        </div>

        <div className="btn">
          <Link to={"/projects"}>View projects</Link>
          <Link to={"/contacts"}>Contact me</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
