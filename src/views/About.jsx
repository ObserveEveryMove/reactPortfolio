import HeroHeader from "../components/HeroHeader";
import Blurb from "../components/Blurb"

const About = () => {
  return (
    <div className="flex flex-col mt-10 justify-between items-center w-screen md:h-screen">
      <HeroHeader header="Patrick Keller" />
      <Blurb/>
    </div>
  );
};

export default About;
