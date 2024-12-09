import { NavLink } from "react-router-dom";

const NavBarLink = ({route, text}) => {
  return (
    <>
      <NavLink
        className="md:text-2xl hover:text-violet-300"
        // activeClassName="active"
        activeclassname="active"
        to={route}
      >
        {text}
      </NavLink>
    </>
  );
};

export default NavBarLink;
