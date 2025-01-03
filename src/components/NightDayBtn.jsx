import MoonIcon from "../assets/svgIcons/MoonIcon";
import SunIcon from "../assets/svgIcons/SunIcon";
const NightDayBtn = (props) => {
  return (
    <>
      <button
        className="hover:text-violet-300 hover:scale-95"
        onClick={props.handleNightDay}
      >
        {props.nightMode ? <SunIcon/> : <MoonIcon/>}
      </button>
    </>
  );
};

export default NightDayBtn;
