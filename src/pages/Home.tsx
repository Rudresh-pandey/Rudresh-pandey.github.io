import Navbar from "../components/Navbar";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar active={"home"} />
      <div className="hero">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem" }}>
            <p className="intro">
              Hello, <br /> I am{" "}
              <span style={{ fontWeight: "bold", fontSize: "32px" }}>
                Rudresh pandey
              </span>
              , I make{" "}
            </p>
            <div className="animated-text">
              <div className="line">Full Stack Web Apps</div>
              <div className="line">Discord Bots</div>
              <div className="line">Python Web Scraper</div>
              <div className="line">telegram Bots</div>
            </div>
          </div>
          <p style={{ maxWidth: "30rem" }}>
            Currently i am BCA student learning Frameworks, languages, tools,
            how to center a div, Android development, and more ...
          </p>
        </div>

        <div className="btn">
          <Link to={"/projects"}>View projects 🔗</Link>
          <Link to={"/contacts"}>Contact me 📬</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
