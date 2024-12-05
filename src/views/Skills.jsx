import HeroHeader from "../components/HeroHeader";
import SkillsIconContainer from "../components/SkillsIconContainer";

const Skills = (props) => {
  return (
    <>
      <div className="flex flex-col mt-10 justify-between items-center w-screen md:h-screen">
        <HeroHeader header="Skills" />
        <SkillsIconContainer />
      </div>
    </>
  );
};

export default Skills;
