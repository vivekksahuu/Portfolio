import projectsArray from "./../assets/projectsArray";
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyProjectVideo from "./LazyProjectVideo";

gsap.registerPlugin(ScrollTrigger);

const Projects = React.forwardRef((_, ref) => {
  const nameRefs = useRef([]);
  const descRefs = useRef([]);
  const techRefs = useRef([]);

  useEffect(() => {
    gsap.set([...nameRefs.current, ...descRefs.current, ...techRefs.current], {
      opacity: 0,
      x: -20,
    });

    nameRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }
    });

    descRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      }
    });

    techRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
          },
        });
      }
    });
  }, []);
  return (
    <div
      className="project-section 
    flex flex-col items-center gap-10 
    min-h-screen 
    bg-[#0C0C0B] 
    text-white 
    px-5 py-20"
      ref={ref}
    >
      {projectsArray.map((project, index) => (
        <div
          key={index}
          className="border border-white rounded-xl
          w-full 
          py-6 px-3 lg:px-8 
          flex flex-col lg:flex-row"
        >
          {/* Project Details */}
          <div
            className="flex flex-col 
          gap-10 md:gap-15 text-black 
          text-2xl md:text-3xl font-bold"
          >
            {/* GitHub & Live Link Icons */}
            <div className="flex gap-6">
              <div
                className="rounded-full 
              bg-white 
              hover:scale-120 transition-all duration-700 ease-in-out 
              flex-center 
              w-12 md:w-15 h-12 md:h-15"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
              </div>
              <div
                className="rounded-full bg-white hover:scale-120 transition-all duration-700 ease-in-out flex-center 
              w-12 md:w-15 h-12 md:h-15"
              >
                <a
                  href={`https://${project.live}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>

            {/* Project Name & Description */}
            <div
              className="flex flex-col 
              gap-10 lg:gap-15 
              lg:mt-5 
            w-full lg:w-[40vw]"
            >
              <div className="flex flex-col gap-4">
                <p
                  ref={(el) => (nameRefs.current[index] = el)}
                  className="text-xl md:text-4xl font-bold text-white opacity-0"
                >
                  {project.name}
                </p>
                <p
                  ref={(el) => (descRefs.current[index] = el)}
                  className="text-gray-400 text-[1rem] leading-6 sm:leading-normal lg:text-lg opacity-0"
                >
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div
                className="flex flex-wrap gap-6 opacity-0"
                ref={(el) => (techRefs.current[index] = el)}
              >
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-lg md:text-2xl text-white font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Video */}
          <LazyProjectVideo src={project.video} />
        </div>
      ))}
    </div>
  );
});

Projects.displayName = "Projects";

export default Projects;
