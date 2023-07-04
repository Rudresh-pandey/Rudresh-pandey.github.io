import { Link } from "react-router-dom";
import "./navbar.css";

type navProps = {
  active: string;
};

function Navbar({ active }: navProps) {
  return (
    <div className="nav">
      <h1>
        <Link to={"/"}>
          Rudresh<span style={{ fontSize: "medium", color: "white" }}>.me</span>
        </Link>
      </h1>
      <div className="navlinks">
        <Link to={"/"} className={active === "home" ? "active" : ""}>
          Home
        </Link>
        <Link
          to={"/projects"}
          className={active === "projects" ? "active" : ""}
        >
          Projects
        </Link>
        <Link
          to={"/contacts"}
          className={active === "contacts" ? "active" : ""}
        >
          Contacts
        </Link>
      </div>
      <Link id="resume" to={"/myresume"}>
        Resume →
      </Link>
    </div>
  );
}

export default Navbar;
