const HeroHeader = (props) => {
  return (
    <>
      <div className="md:w-2/3 lg:w-4/5 dark:secondaryNight secondary limeBorder rounded-lg -rotate-6 md:-rotate-3 flex flex-col items-center justify-center md:p-3">
        <div className="md:w-full flex justify-start">
          <h1 className="text-3xl md:text-5xl lg:m-1">{props.header}</h1>
        </div>

        <div className="flex flex-row items-center justify-end lg:justify-between md:m-0 md:w-full">
          <a
            className="hidden lg:block lg:text-2xl font-mono secondaryTxt lg:m-1"
            href="mailto:observeeverymove333@gmail.com"
          >
            ObserveEveryMove333@gmail.com
          </a>
          <div className="flex flex-row">
            <h2 className="secondaryTxt dark:text-white text-2xl md:text-3xl font-mono w-3/4 m-1">
              ObserveEveryMove
            </h2>
            <h3 className="animate-bounce text-xl md:text-2xl text-slate-900 font-mono m-1">
              {"<OeM/>"}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
