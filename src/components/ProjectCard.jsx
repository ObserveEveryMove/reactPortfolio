const ProjectCard = ({ href, title, src, description }) => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-around animate-flip-up animate-once animate-duration-[3500ms]">
        <a
          className="hover:text-violet-300 h-full w-full flex flex-col items-center justify-between text-center"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-2xl">{title}</h1>
          <div className="w-full flex items-center justify-center">
            <img className="w-1/2 h-auto" alt={title} src={src} />
          </div>
        </a>
          <p className="text-white">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
