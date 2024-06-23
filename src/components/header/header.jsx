import React from "react";
import { motion } from "framer-motion";

const stretchJiggleVariants = {
  initial: {
    scaleY: 1,
    y: 0,
    color: "transparent", // Set the initial color to transparent
    background: "linear-gradient(45deg, #FF0080, #7928CA)", // Set the initial gradient background
    WebkitBackgroundClip: "text", // Clip the gradient to the text
    WebkitTextFillColor: "transparent", // Make the text transparent
  },
  hover: {
    scaleY: [1, 1.5, 1.2, 1], // Stretch effect
    y: [0, -2, 2, -1, 0], // Jiggle effect
    color: "transparent", // Keep the color transparent
    background: "linear-gradient(45deg, #FF0080, #7928CA)", // Keep the gradient background
    WebkitBackgroundClip: "text", // Keep the gradient clipped to the text
    WebkitTextFillColor: "transparent", // Keep the text transparent
    transition: {
      duration: 0.5, // Duration of the stretch and jiggle effect
      ease: "easeInOut",
    },
  },
};

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      variants={stretchJiggleVariants}
      initial="initial"
      whileHover="hover"
      className="inline-block"
    >
      {char}
    </motion.span>
  ));
};

const Header = () => {
  return (
    <div className="absolute top-24 left-0 p-8 text-white">
      <div className="flex items-start justify-start mb-4">
        <motion.p className="text-6xl font-extrabold">
          {splitText("Hi, I'm ")}
        </motion.p>
      </div>
      <div className="flex flex-col">
        <motion.h1 className="text-5xl font-bold">
          {splitText("Muhammad Affan Saleem")}
        </motion.h1>
        <motion.h2 className="text-3xl mt-2">
          {splitText("I Build your mobile and web apps")}
        </motion.h2>
      </div>
    </div>
  );
};

export default Header;
