import ProjectCard from "../components/ProjectCard";
import regexCheckerImg from "../assets/images/regexChecker.png";
import drumMachineImg from "../assets/images/drumMachine.png";
import pomodoroImg from "../assets/images/pomodoro.png";
import quoteMachinePic from "../assets/images/quoteMachine.png";

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap w-full h-full p-1">
        <div className="w-full h-1/2 flex flex-row">
          <ProjectCard
            href="https://observeeverymove.github.io/regexChecker/"
            src={regexCheckerImg}
            alt="Regex Checker"
            title="Regex Checker"
            description="A simple regex testing tool written in vanilla JavaScript, Html, and CSS. Currently only desktop version available."
          />
          <ProjectCard
            href="https://observeeverymove.github.io/drumDeploy/"
            src={drumMachineImg}
            alt="Drum Machine"
            title="Drum Machine"
            description="This is a drum machine built in React. It features reusable components as well as dynamic styling and responsiveness."
          />
        </div>

        <div className="w-full h-1/2 flex flex-row">
          <ProjectCard
            href="https://observeeverymove.github.io/pomodoroDeploy/"
            src={pomodoroImg}
            alt="Pomodoro Clock"
            title="Pomodoro Clock"
            description="This is a pomodoro clock timer made with React and Redux. It features dynamic styling and is responsive. This project has a dark mode as well as a random theme button."
          />
          <ProjectCard
            href="https://observeeverymove.github.io/quoteDeploy/"
            src={quoteMachinePic}
            alt="Quote Machine"
            title="Quote Machine"
            description="An app that generates random quotes built with React."
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
