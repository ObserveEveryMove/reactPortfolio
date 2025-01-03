const ProjectCard = ({ href, title, src, description }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-around animate-flip-up animate-once animate-duration-[3500ms]">
      <h1 className="text-2xl">{title}</h1>
      <div className="w-full flex items-center justify-center">
        <a
          className="hover:text-violet-300 h-full w-full flex flex-col items-center justify-between text-center"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          
          
            <img className="w-1/2 h-auto" alt={title} src={src} />
            </a>
          </div>
        
          <p className="text-white text-center">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
