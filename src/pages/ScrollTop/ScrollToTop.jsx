// components/ScrollToTopButton.js
import { motion } from "framer-motion";
import "./ScrollToTop.scss";

const ScrollToTopButton = ({ showButton }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <motion.div
        className="scroll-to-top"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <i className="fas fa-chevron-up"></i>
      </motion.div>
    )
  );
};

export default ScrollToTopButton;
