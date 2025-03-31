import "./../component-styles/PreLoader.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const PreLoader = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const textAnimation = gsap.to(textRef.current, {
      opacity: 0,
      delay: 5,
      duration: 0.5,
    });
    const containerAnimation = gsap.to(containerRef.current, {
      y: 800,
      duration: 1.5,
      delay: 5.5,
    });
    return () => {
      textAnimation.kill(), containerAnimation.kill();
    };
  }, []);
  return (
    <div
      className=" h-screen flex-center lg:h-screen bg-[#0C0C0B]"
      ref={containerRef}
    >
      <svg viewBox="0 0 500 100">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="preloadText text-9xl sm:text-6xl  font-semibold tracking-tight fill-none stroke-[#E4DED7] stroke-[1] animate-draw"
          ref={textRef}
        >
          VS
        </text>
      </svg>
    </div>
  );
};

export default PreLoader;
