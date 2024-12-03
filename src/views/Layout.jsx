import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = (props) => {
  return (
    <div className="primary dark:primaryNight h-screen flex md:flex-col">
      <NavBar
        nightMode={props.nightMode}
        handleNightDay={props.handleNightDay}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
