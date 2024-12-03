import MoonIcon from "../assets/svgIcons/MoonIcon";
import SunIcon from "../assets/svgIcons/SunIcon";
const NightDayBtn = (props) => {
  return (
    <>
      <button
        // className="nightDayBtn secondaryTxt"
        className={props.nightMode ? "nightDayBtn secondaryTxt" : "nightDayBtn primaryTxt"}
        onClick={props.handleNightDay}
      >
        {props.nightMode ? <SunIcon/> : <MoonIcon/>}
      </button>
    </>
  );
};

export default NightDayBtn;
