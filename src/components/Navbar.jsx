import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = ({ scrollToSection }) => {
  const [menuOpening, setMenuOpening] = useState(false);
  const menuContainerRef = useRef(null);
  const navNameRef = useRef(null);
  const menuBarRef = useRef(null);
  const menuLinksRef = useRef([]);

  const menuLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    if (menuOpening) {
      tl.set(menuContainerRef.current, { display: "flex" })
        .to(menuContainerRef.current, {
          opacity: 1,
          x: 0, // Slide in
          duration: 0.5,
          ease: "power2.out",
        })
        .fromTo(
          menuLinksRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
    } else {
      tl.to(menuLinksRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.inOut",
      })
        .to(menuContainerRef.current, {
          opacity: 0,
          x: "100%", // Slide out
          duration: 0.5,
          ease: "power2.in",
        })
        .set(menuContainerRef.current, { display: "none" }); // Completely remove it
    }

    return () => tl.kill(); // Cleanup
  }, [menuOpening]);

  useEffect(() => {
    gsap.fromTo(
      [navNameRef.current, menuBarRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        delay: 0.2,
        duration: 1,
        y: 0,
        ease: "power2.out",
      }
    );
  }, []);

  const handleMenuOpening = () => {
    setMenuOpening(!menuOpening);
  };

  return (
    <div
      className=" flex justify-between items-center 
      text-white 
      py-4 
      px-5  lg:px-10
      relative

"
    >
      {/* Call-to-action Button */}

      <div className="navName opacity-0" ref={navNameRef}>
        <p
          className=" text-lg lg:text-xl 
        text-black font-semibold"
        >
          By Vivek
          <sup className="text-xl">©</sup>
        </p>
      </div>

      {/* Menu Button */}
      <div
        className="rounded-full 
        bg-black 
        text-2xl lg:text-3xl 
        text-white 
        p-2 
        cursor-pointer  
        transition-all duration-500 ease-out 
        z-100  opacity-0"
        onClick={handleMenuOpening}
        ref={menuBarRef}
      >
        {menuOpening ? <IoClose /> : <IoMenu />}
      </div>

      {/* Sliding Menu */}
      <div
        ref={menuContainerRef}
        className=" absolute top-0 right-0 
        opacity-0 
        w-[100%] lg:w-[40%] 
        h-screen 
        px-8 py-6   
        bg-[#46403af7] 
        z-50 
        flex flex-col gap-30
        rounded-lg"
      >
        <div
          className="flex flex-col 
        space-y-10 lg:space-y-8"
        >
          {menuLinks.map((link, index) => (
            <a
              href="#"
              className="nav-link 
              text-5xl lg:text-6xl 
              font-semibold cursor-pointer 
              hover:animate-pulse"
              key={index}
              ref={(el) => (menuLinksRef.current[index] = el)}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.section);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <div className="mailContainer">
            <p
              className="text-white text-lg 
            font-bold"
            >
              EMAIL ADDRESS
            </p>
            <a
              href="mailto:viveksah8020@gmail.com"
              className="text-orange-500 sm:text-white text-lg
              hover:text-orange-500 transition-all duration-500 ease-in-out font-bold"
            >
              viveksah8020@gmail.com
            </a>
          </div>

          <div className="extLinkContainer">
            <a
              href="https://github.com/vivekksahuu"
              target="_blank"
              className=" text-white 
              border border-white 
              px-4 py-2 
              text-lg 
              rounded-full
              hover:bg-white hover:text-black
              transition-all duration-300 ease-in-out"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
