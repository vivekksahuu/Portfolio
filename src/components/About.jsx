import "./../component-styles/About.css";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutDescription from "./AboutDescription";

gsap.registerPlugin(ScrollTrigger);

const About = React.forwardRef((_, ref) => {
  const [revealText, setRevealText] = useState({});
  const textRefs = useRef([]);

  const handleRevealText = (e) => {
    if (e.target.tagName === "BUTTON") {
      const key = e.target.getAttribute("data-key");
      setRevealText((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    }
  };
  useEffect(() => {
    textRefs.current.forEach((ref) => {
      const letters = ref.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "top 50%",
          },
        }
      );
    });
  }, []);

  const splittedText = (text, index) => (
    <p
      className="text-5xl md:text-6xl lg:text-8xl 
  font-semibold"
      ref={(el) => (textRefs.current[index] = el)}
    >
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char}
        </span>
      ))}
    </p>
  );
  return (
    <div
      className="aboutSection 
    flex flex-col gap-10 
    bg-[#0C0C0B] 
    rounded-lg 
    py-10"
      ref={ref}
    >
      <div
        className="flex justify-around
      flex-col md:flex-row"
      >
        <div className="w-full md:w-[40%] hidden md:block"></div>

        {/* Short About */}
        <div
          className="w-fit 
          mb-4 lg:mb-0
          px-4 lg:px-0
        shortAbout 
        flex flex-col gap-2
        text-[#ccccc3]"
        >
          {" "}
          {splittedText("<Learner,", 0)}
          {splittedText("Coder,", 1)}
          {splittedText("Creator/>", 2)}
        </div>
      </div>

      <div
        className="flex justify-around items-center 
        flex-col md:flex-row
        gap-4 lg:gap-20 
      lg:px-10
       "
      >
        <div
          className="w-full md:w-[60%] lg:w-[30%]  
          flex-center
          lg:-mt-2 
         "
        >
          {/* Image */}
          <div
            className="abtImgCont 
          w-[80%] lg:w-[80%] 
          h-[50vh] lg:h-[20rem]
          rounded-xl"
          ></div>
        </div>

        {/* About Text */}
        <div
          className="aboutDesc 
        w-full lg:w-[70%] 
        px-5 lg:px-0"
          onClick={handleRevealText}
        >
          <p
            className=" text-[#ccccc3]
          text-lg lg:text-xl 
          leading-8 lg:leading-12"
          >
            <p className="text-[#ccccc3] text-lg lg:text-xl leading-8 lg:leading-12">
              <AboutDescription
                label="Software"
                text=" developer based in Mumbai, India passionate about delivering modern, responsive, and user-friendly web interfaces and solutions. "
                keyName="Software"
                revealText={revealText}
              />
              <AboutDescription
                label="Graduated"
                text=" in 2024 with a Bachelor's degree in Computer Science, and currently "
                keyName="graduated"
                revealText={revealText}
              />
              <AboutDescription
                label="specialize"
                text=" in frontend technologies, with expertise in JavaScript, jQuery, React.js, Zustand, Tailwind CSS, and GSAP. I'm always striving to grow as a developer and am currently "
                keyName="specialize"
                revealText={revealText}
              />
              <AboutDescription
                label="expanding"
                text="  my skills into backend development to gain a more comprehensive understanding of the full web stack. I'm eager to contribute to dynamic teams and deliver high-quality digital experiences."
                keyName="expanding"
                revealText={revealText}
              />
            </p>
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
