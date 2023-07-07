import Navbar from "../components/Navbar";
import "./projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Navbar active={"projects"} />
      <div className="projects">
        <div className="project">
          <h2 className="title">
            <Link
              to={"https://github.com/Rudresh-pandey/Event_management"}
              target="blank"
            >
              Event Management <i className="fa fa-github"></i>{" "}
              <span style={{ fontSize: "14px" }} className="tooltiptext">
                click to view code
              </span>
            </Link>
          </h2>
          <div className="projectdetails">
            <div className="projectimg"></div>
            <div className="desc">
              <p style={{ fontSize: "18px" }}>
                User can create or join an Event
              </p>
              <div>
                <h3 style={{ color: "#FFEB3B" }}>Tech used -</h3>
                <div className="tech">
                  <p>React</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                  <p>Express</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2rem" }} className="linkbtn">
                <Link to={""}>Live</Link>
                <Link to={""}>Github</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
