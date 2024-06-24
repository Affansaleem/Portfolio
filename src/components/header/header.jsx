import { motion } from "framer-motion";

const stretchJiggleVariants = {
  initial: {
    scaleY: 1,
    y: 0,
    color: "transparent",
    background: "linear-gradient(45deg, #FF0080, #7928CA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  hover: {
    scaleY: [1, 1.5, 1.2, 1],
    y: [0, -2, 2, -1, 0],
    color: "transparent",
    background: "linear-gradient(45deg, #FF0080, #7928CA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const splitText = (text) => {
  // Split text by spaces and keep track of space presence
  const words = text.split(" ");
  const spans = [];

  // Iterate through words
  words.forEach((word, index) => {
    // Add span for each character in the word
    spans.push(
      ...word.split("").map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          variants={stretchJiggleVariants}
          initial="initial"
          whileHover="hover"
          className="inline-block"
        >
          {char}
        </motion.span>
      ))
    );

    if (index < words.length - 1) {
      spans.push(<span key={`space-${index}`}>&nbsp;</span>);
    }
  });

  return spans;
};

const Header = () => {
  return (
    <div id="home" className="absolute top-24 left-0 p-8 text-white">
      <div className="flex items-start justify-start mb-4">
        <motion.p className="text-6xl font-extrabold">
          {splitText("Hi, I'm ")}
        </motion.p>
      </div>
      <div className="flex flex-col">
        <motion.h1 className="text-7xl font-bold">
          {splitText("Muhammad Affan Saleem.")}
        </motion.h1>
        <motion.h2 className="text-6xl mt-2">
          {splitText("I Build Custom Mobile & Web Applications")}
        </motion.h2>
      </div>

      <div className="max-w-lg mt-10 rounded-lg shadow-lg text-left">
        <div className="font-mono mt-4 text-lg text-white">
          EXPERIENCED FLUTTER AND REACT JS DEVELOPER. PASSIONATE ABOUT CLEAN
          DESIGN AND ARCHITECTURE.
        </div>
        <div className="font-mono mt-4 text-lg text-white">
          COMMITMENT TO DELIVERY OF SEAMLESS USER EXPERIENCE AND DESIGNS
        </div>
      </div>
    </div>
  );
};

export default Header;
