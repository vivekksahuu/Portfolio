import "./../component-styles/Home.css";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Home = React.forwardRef((_, ref) => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const bookingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, subHeadingRef.current, bookingRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay: 0.7,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.3,
      }
    );
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center 
      gap-8 lg:gap-0
      lg:justify-evenly 
    text-black 
    h-[90vh]"
      ref={ref}
    >
      <div className="flex flex-col gap-4">
        <p
          className="heading 
         text-center font-semibold -tracking-wider
        text-6xl md:text-[6rem] lg:text-[11rem] 2xl:text-[250px]
        opacity-0 "
          ref={headingRef}
        >
          VIVEK SAHU
        </p>
        <div
          className=" flex-center border-2 rounded opacity-0 "
          ref={subHeadingRef}
        >
          <p
            className=" subHeading 
            font-bold text-center 
            text-2xl lg:text-4xl 2xl:text-6xl"
          >
            Frontend Developer
          </p>
        </div>
      </div>

      <div
        className=" flex flex-col justify-between items-center 
        gap-6 lg:gap-0
        w-[80vw]
      lg:flex-row
      opacity-0  "
        ref={bookingRef}
      >
        <div
          className=" flex flex-col gap-5 
        lg:px-8"
        >
          <p
            className="text-xl lg:text-3xl
          font-semibold text-center ctaText"
          >{`Open for Opportunities!`}</p>

          <div
            className="rounded-md 
          transition-all duration-200 ease-in cursor-pointer 
          flex gap-4"
          >
            <a
              href="https://calendly.com/viveksah8020/30min"
              target="_blank"
              className=" ctaButton 
              text-sm md:text-[1rem] lg:text-xl 2xl:text-4xl
              text-white font-semibold
              bg-[#393632] 
              rounded-full cursor-pointer
              px-4 lg:px-8  py-4 lg:py-6 
              hover:bg-[#8C8C73] hover:text-black hover:scale-105
               transition-all duration-400 ease-in-out"
            >
              BOOK A CALL
            </a>

            <a
              href="/files/Resume.pdf"
              target="_blank"
              className=" ctaButton 
              text-sm md:text-[1rem] lg:text-xl 2xl:text-4xl
              text-white font-semibold rounded-full cursor-pointer
              bg-[#393632] 
              
              px-6 md:px-8 lg:px-12 py-4 lg:py-6 
              hover:bg-[#8C8C73] hover:text-black hover:scale-105
              transition-all duration-400 ease-in-out"
            >
              RESUME
            </a>
          </div>
        </div>

        <div>
          <div
            className="image-container
          w-[12rem] lg:w-[16rem] 
          h-[12rem] lg:h-[16rem] 
          rounded-full  
          transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
});
Home.displayName = "Home";

export default Home;
