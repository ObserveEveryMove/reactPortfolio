import { Link } from "react-router-dom";
import GitHubIcon from "../assets/svgIcons/GitHubIcon";
import LinkedInIcon from "../assets/svgIcons/LinkedInIcon";
import NightDayBtn from "./NightDayBtn";

const NavBar = (props) => {
  return (
    <>
      <nav className="md:h-20 w-auto p-1 md:w-screen h-screen secondary dark:secondaryNight limeBorder flex flex-col md:flex-row justify-around items-center rounded-md">

        <div className="flex flex-col md:flex-row justify-between h-24 items-center">
          <a
            className="hover:text-violet-300 hover:scale-95"
            href="https://github.com/ObserveEveryMove"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>

          <a
          className="hover:text-violet-300 hover:scale-95"
            href="https://www.linkedin.com/in/observeeverymove/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <Link className="md:text-2xl hover:text-violet-300 hover:scale-95" to={"/"}>
          About
        </Link>

        <Link className="md:text-2xl hover:text-violet-300 hover:scale-95" to={"/projects"}>
          Projects
        </Link>

        <Link className="md:text-2xl hover:text-violet-300 hover:scale-95" to={"/skills"}>
          Skills
        </Link>

        <Link className="md:text-2xl hover:text-violet-300 hover:scale-95" to={"/contact"}>
          Contact
        </Link>

        <div>
          <NightDayBtn
            nightMode={props.nightMode}
            handleNightDay={props.handleNightDay}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
