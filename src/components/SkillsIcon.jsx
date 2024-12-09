const SkillsIcon = ({src, alt}) => {
  return (
    <>
      <div className={`w-1/3 h-full p-2 animate-flip-up animate-once animate-duration-[3500ms]`}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
};

export default SkillsIcon;


// animate-flip-up animate-once animate-duration-[1500ms] animate-delay-[2000ms]