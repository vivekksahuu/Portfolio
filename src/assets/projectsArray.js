import NumbShootVideo from "/videos/numbShoot.mp4"
import FintrackVideo from "/videos/fintrack.mp4"
const projectsArray = [
  {
    name: "NumbShoot",
    description: "A luck-based number shooting game for 2 to 4 players. Players take turns shooting to randomly land on a number between 1 and 10. With two different modes to play, the first player to reach the pre-set winning score wins the game.",
    github: "https://github.com/vivekksahuu/Number-Shooting-Game",
    live: "number-shooting-game.netlify.app/",
    techStack: ["HTML", "CSS", "JS", "Jquery"],
    video: NumbShootVideo,
  },

  {
    name: "Fintrack",
    description: "An expense tracker that helps you track, visualize your spendings, and gain insights into your financial habits with intuitive charts and real-time analytics.",
    github: "https://github.com/vivekksahuu/Fintrack",
    live: "fintrackproject.netlify.app/",
    techStack: ["React", "Tailwind", "GSAP", "Rechart JS"],
    video: FintrackVideo,
  },
];

export default projectsArray;