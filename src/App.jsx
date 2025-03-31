import { useState, useEffect, useRef } from "react";
import PreLoader from "./components/PreLoader";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <main className={`bg-[#E8E8E3] min-h-screen animate-fadeIn`}>
            <Navbar scrollToSection={scrollToSection} />
            <Home ref={homeRef} />
          </main>
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </>
      )}
    </div>
  );
};

export default App;
