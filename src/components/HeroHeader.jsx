const HeroHeader = (props) => {
  return (
    <>
      <div className="w-4/5 dark:secondaryNight secondary limeBorder rounded-lg -rotate-6 flex flex-col items-center justify-center p-2">
        <h1>Patrick Keller</h1>
        <div className="flex flex-row items-center justify-center p-1">
          <h2 className="secondaryTxt">ObserveEveryMove</h2>
          <h3 className="animate__animated animate__bounce">{"<OeM/>"}</h3>
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
