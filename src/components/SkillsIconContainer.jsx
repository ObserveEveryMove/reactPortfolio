import { useId } from "react";

import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js1.png";
import bootstrapIcon from "../assets/images/bootStrap1.png";
import sassIcon from "../assets/images/sass.png";
import tailwindIcon from "../assets/images/tailwind.png";
import reactIcon from "../assets/images/reactIcon2.png";
import reduxIcon from "../assets/images/redux1.png";
import mongoIcon from "../assets/images/mongoDb.png";

import SkillsIcon from "./SkillsIcon";

const row1 = [
  { src: htmlIcon, alt: "Html Icon" },
  { src: cssIcon, alt: "CSS Icon" },
  { src: jsIcon, alt: "JavaScript Icon" },
];
const row2 = [
  { src: sassIcon, alt: "Sass Icon" },
  { src: bootstrapIcon, alt: "BootStrap Icon" },
  { src: tailwindIcon, alt: "Tailwind Icon" },
];
const row3 = [
  { src: reactIcon, alt: "React Icon" },
  { src: reduxIcon, alt: "Redux Icon" },
  { src: mongoIcon, alt: "Mongo-DB Icon" },
];

const SkillsIconContainer = () => {
  const itemId = useId();
  return (
    <>
      <div className="sm:animate-pulse">
        <div className="sm:secondary sm:dark:secondaryNight sm:w-72 sm:h-72 sm:rotate-12 sm:mb-20 sm:limeBorder sm:rounded-md ">
          <div className="secondary dark:secondaryNight sm:primary sm:dark:primaryNight limeBorder rounded-md flex flex-col w-72 h-72 lg:w-full lg:h-auto mb-44 md:mb-24 lg:mb-20 xl:mb-12 sm:-rotate-12">
            <div className="flex flex-row h-1/3 w-full">
              {row1.map((el) => (
                <SkillsIcon src={el.src} alt={el.alt} key={itemId} />
              ))}
            </div>
            <div className="flex flex-row h-1/3 w-full">
              {row2.map((el) => (
                <SkillsIcon src={el.src} alt={el.alt} key={itemId} />
              ))}
            </div>
            <div className="flex flex-row h-1/3 w-full">
              {row3.map((el) => (
                <SkillsIcon src={el.src} alt={el.alt} key={itemId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsIconContainer;
