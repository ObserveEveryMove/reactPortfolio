import NavBarLink from "./NavBarLink";
import GitHubIcon from "../assets/svgIcons/GitHubIcon";
import LinkedInIcon from "../assets/svgIcons/LinkedInIcon";
import NightDayBtn from "./NightDayBtn";

const links = [
  { text: "About", route: "/" },
  { text: "Projects", route: "/projects" },
  { text: "Skills", route: "/skills" },
  { text: "Contact", route: "/contact" },
];

const NavBar = (props) => {
  return (
    <>
      <nav className="md:h-20 w-auto p-1 md:w-screen h-screen secondary dark:secondaryNight limeBorder rounded-md flex flex-col md:flex-row justify-around items-center ">
        <div className="flex flex-col md:flex-row justify-between h-24 items-center">
          <a
            className="hover:text-violet-300"
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

        {links.map((el, i) => (
          <NavBarLink text={el.text} route={el.route} key={i} />
        ))}

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
