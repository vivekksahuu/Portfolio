import React, { useState, useEffect, useRef } from "react";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = React.forwardRef((_, ref) => {
  const [time, setTime] = useState("");

  const refs = {
    titleRef: useRef(null),
    headingRef: useRef(null),
    subHeadingRef: useRef(null),
    bookingRef: useRef(null),
    emailTextRef: useRef(null),
  };

  useEffect(() => {
    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 100%",
              end: "bottom 60%",
            },
          }
        );
      }
    });

    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="contact-section
bg-[#E8E8E3]
    h-screen
    flex-center
    flex-col
    gap-6
    py-0 lg:py-10"
      ref={ref}
    >
      <div
        className="bg-[#0C0C0B]
      text-white  
      w-[95%] lg:w-[90%] 
      h-[75vh] lg:h-[80vh]
      rounded-xl
      flex flex-col justify-around"
      >
        <div
          className="flex-center flex-col gap-8 lg:gap-6 
        py-0 lg:py-8"
        >
          <p ref={refs.titleRef} className="text-sm md:text-[1rem] text-center">
            (Got a question, proposal, or want to work together on something?)
          </p>
          <div className="flex flex-col gap-1">
            <p
              className="text-5xl lg:text-8xl text-[#E5E5E1] font-semibold"
              ref={refs.headingRef}
            >
              LET'S MAKE
            </p>
            <p
              className="text-5xl lg:text-8xl text-[#E5E5E1] font-semibold text-center"
              ref={refs.subHeadingRef}
            >
              IT HAPPEN
            </p>
          </div>

          <a
            href="https://calendly.com/viveksah8020/30min"
            target="_blank"
            className="px-10 py-6 
            rounded-full 
            bg-[#3f3c37] 
            text-xl md:text-2xl
            font-semibold
            hover:bg-[#8C8C73] hover:text-black hover:scale-110
            transition-all duration-500 ease-in-out
            active:scale-90 "
            ref={refs.bookingRef}
          >
            BOOK A CALL
          </a>
        </div>
        <div
          className=" flex 
        flex-col md:flex-row
        justify-between 
        items-start lg:items-center
        gap-4 lg:gap-0
        px-5 -mt-8"
        >
          <div className="flex md:flex-col gap-3 md:gap-0 ">
            <p className="text-lg">LOCAL TIME</p>
            <p className="text-lg">{time}, IND</p>
          </div>
          <div ref={refs.emailTextRef}>
            <p className="uppercase font-semibold">For Further Inqueries</p>
            <div className="flex-center gap-0 lg:gap-1">
              <p>
                <MdSubdirectoryArrowRight />
              </p>
              <a
                href="mailto:viveksah8020@gmail.com"
                className="hover:text-orange-500 transition-all duration-500 ease-in-out"
              >
                viveksah8020@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-section text-[#393632] 
      text-2xl md:text-3xl font-bold  px-5 text-center"
      >
        <p>©2025 Vivek Sahu</p>
        <p className="text-center">All rights reserved.</p>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
