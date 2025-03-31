const AboutDescription = ({ label, text, keyName, revealText }) => (
  <span>
    <button
      className="reveal-trigger hover:text-orange-500 transition-all duration-500 ease-in-out"
      data-key={keyName}
    >
      {label}
    </button>
    <span
      className={`${
        revealText[keyName] ? "blur-none opacity-100" : "blur-md"
      } transition-all duration-700 ease-in-out`}
    >
      {text}
    </span>
  </span>
);

export default AboutDescription;
