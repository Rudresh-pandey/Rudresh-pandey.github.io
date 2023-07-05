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
          <div className="projectdetails"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
