import Navbar from "../components/Navbar";
import "./projects.css";
import { Link } from "react-router-dom";
import Data from "../data.json";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiGraphql,
  SiSocketdotio,
  SiPython,
} from "react-icons/si";

function Projects() {
  function getIcon(icon: any) {
    const iconMap = {
      FaReact,
      FaNodeJs,
    };
    return iconMap[icon] || null;
  }
  return (
    <>
      <Navbar active={"projects"} />
      <div className="projects">
        {Data.map((project) => {
          return (
            <div className="project">
              <h2 className="title">
                <Link
                  to={"https://github.com/Rudresh-pandey/Event_management"}
                  target="blank"
                >
                  {project.title} <i className="fa fa-github"></i>{" "}
                  <span style={{ fontSize: "14px" }} className="tooltiptext">
                    click to view code
                  </span>
                </Link>
              </h2>
              <div className="projectdetails">
                <img className="projectimg" src={project.imgsrc} alt="" />
                {/* <iframe
                  src="https://event-management-three.vercel.app/"
                  width="400px"
                  height="200px"
                  title="Embedded Website"
                ></iframe> */}

                <div className="desc">
                  <p style={{ fontSize: "18px" }}>{project.desc}</p>
                  <div>
                    <h3 style={{ color: "#FFEB3B" }}>Tech used -</h3>
                    <div className="tech">
                      {project.tech.map((tech) => {
                        const icon = getIcon(tech[1]);
                        return (
                          <p>
                            {tech[0]}
                            {/* <span
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(tech[1]),
                              }}
                            ></span> */}
                            {/* <span>{icon}</span> */}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", gap: "2rem" }}
                    className="linkbtn"
                  >
                    <Link to={""}>Live</Link>
                    <Link to={""}>Github</Link>
                  </div>
                  <div>
                    <h3 style={{ color: "#FFEB3B" }}>Issues -</h3>
                    <p>Backend not connected yet </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
