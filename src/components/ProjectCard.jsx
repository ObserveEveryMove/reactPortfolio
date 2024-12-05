const ProjectCard = (props) => {
  return (
    <>
      <div className="h-full w-full flex flex-col items-center justify-around">
        <a
          className="hover:text-violet-300 border-2 hover:border-blue-700 h-full w-full flex flex-col items-center justify-between text-center"
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="text-2xl">{props.title}</h1>
          <div className="w-full flex items-center justify-center">
            <img className="w-1/2 h-auto" alt={props.alt} src={props.src} />
          </div>
          <p className="text-white">{props.description}</p>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
