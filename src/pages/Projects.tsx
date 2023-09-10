import Navbar from "../components/Navbar";
import "./projects.css";
import { Link } from "react-router-dom";
import Data from "../data.json";

import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiGraphql,
  SiSocketdotio,
  SiPython,
  SiTypescript,
  SiCss3,
} from "react-icons/si";
import { HiGlobeAlt } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { Suspense } from "react";

function Projects() {
  const icons = [
    ["React", <FaReact />],
    ["Node", <FaNodeJs />],
    ["MongoDB", <SiMongodb />],
    ["Express", <SiExpress />],
    ["Postgresql", <SiPostgresql />],
    ["Graphql", <SiGraphql />],
    ["Socket.io", <SiSocketdotio />],
    ["Python", <SiPython />],
    ["Typescript", <SiTypescript />],
    ["HTML", <FaHtml5 />],
    ["CSS", <SiCss3 />],
  ];
  return (
    <>
      <Navbar active={"projects"} />
      <div className="projects">
        <Suspense fallback={<div>Loading...</div>}>
          {Data.map((project) => {
            return (
              <div className="project">
                <h2 className="title">
                  <Link to={project.githubLink} target="blank">
                    {project.title} <i className="fa fa-github"></i>{" "}
                    <span style={{ fontSize: "14px" }} className="tooltiptext">
                      click to view code
                    </span>
                  </Link>
                </h2>
                <div className="projectdetails">
                  <img
                    className="projectimg"
                    src={project.imgsrc}
                    alt="projectImg"
                  />
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
                          // const icon = getIcon(tech[1]);
                          return (
                            <p style={{}}>
                              {icons.filter((icon) => {
                                if (icon[0] === tech) {
                                  return icon;
                                }
                              })}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", gap: "2rem" }}
                      className="linkbtn"
                    >
                      <Link to={`${project.liveLink}`} target="blank">
                        Live
                        <HiGlobeAlt />
                      </Link>
                      <Link to={`${project.githubLink}`} target="blank">
                        Github
                        <VscGithub />
                      </Link>
                    </div>
                    <div>
                      <h3 style={{ color: "#FFEB3B" }}>Issues -</h3>
                      <p>{project.issue}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}

export default Projects;
