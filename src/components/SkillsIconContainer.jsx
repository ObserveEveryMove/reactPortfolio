import html5Icon from "../assets/images/html5.png";
import css3Icon from "../assets/images/css3.png";
import jsIcon from "../assets/images/js1.png";
import bootstrapIcon from "../assets/images/bootStrap.png";
import sassIcon from "../assets/images/sass.png";
import tailwindIcon from "../assets/images/tailwind.png";
import reactIcon from "../assets/images/reactIcon2.png";
import reduxIcon from "../assets/images/redux1.png";
import mongoIcon from "../assets/images/mongoDb.png";

import SkillsIcon from "./SkillsIcon";

const row1 = [
  { src: reactIcon, alt: "React Icon" },
  { src: reduxIcon, alt: "Redux Icon" },
  { src: mongoIcon, alt: "Mongo-DB Icon" },
];
const row2 = [
  { src: sassIcon, alt: "Sass Icon" },
  { src: bootstrapIcon, alt: "BootStrap Icon" },
  { src: tailwindIcon, alt: "Tailwind Icon" },
];
const row3 = [
  { src: html5Icon, alt: "Html Icon" },
  { src: css3Icon, alt: "CSS Icon" },
  { src: jsIcon, alt: "JavaScript Icon" },
];

const SkillsIconContainer = () => {
  return (
    <>
      <div className="sm:secondary sm:dark:secondaryNight sm:w-72 sm:h-72 sm:rotate-12 sm:mb-20 sm:limeBorder sm:rounded-md">
        <div className="secondary dark:secondaryNight sm:primary sm:dark:primaryNight limeBorder rounded-md flex flex-col w-72 h-72 lg:w-full lg:h-auto mb-44 md:mb-24 lg:mb-20 xl:mb-12 sm:-rotate-12">
          <div className="flex flex-row h-1/3 w-full">
            {row1.map((el, i) => (
              <SkillsIcon
                src={el.src}
                alt={el.alt}
                key={i + 1}
              />
            ))}
          </div>
          <div className="flex flex-row h-1/3 w-full">
            {row2.map((el, i) => (
              <SkillsIcon
                src={el.src}
                alt={el.alt}
                key={i + 2}
              />
            ))}
          </div>
          <div className="flex flex-row h-1/3 w-full">
            {row3.map((el, i) => (
              <SkillsIcon
                src={el.src}
                alt={el.alt}
                key={i + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsIconContainer;
