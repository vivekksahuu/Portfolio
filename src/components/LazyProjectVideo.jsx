import { useEffect, useRef } from "react";

const LazyProjectVideo = ({ src }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 1.0 } // 60% of the video in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className=" w-full mt-5">
      <video
        ref={videoRef}
        src={src}
        controls
        muted
        className="object-cover w-full h-full rounded-lg "
      />
    </div>
  );
};

export default LazyProjectVideo;
