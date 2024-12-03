const Blurb = () => {
  return (
    <>
      <div className="h-auto mb-20 md:mb-14 md:mt-14 flex justify-center">
        <div className="secondary limeBorder rounded-lg dark:secondaryNight w-60 md:w-2/3 p-3 rotate-6 md:rotate-3 flex items-center justify-center">

          <div className="p-4 xl:p-5 -rotate-6 md:-rotate-3">

            <p className="text-sm md:text-xl xl:text-3xl text-white font-semibold indent-3">
              I'm a passionate and dedicated junior web developer skilled in
              crafting dynamic and user-friendly web applications using the MERN
              stack. With a strong foundation in HTML, CSS, and JavaScript, I'm
              eager to contribute to innovative projects and continue to
              learn.
            </p>
            <p className="text-sm md:text-xl xl:text-3xl text-white font-semibold indent-3">
              My focus is on writing clean, efficient, and well-structured code.
              I value adhering to best practices and industry standards. Let's
              build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blurb;
