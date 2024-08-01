// components/ScrollAnimation.js
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollAnimation = ({ children, className, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to allow repeated animation
    threshold: 0.1, // Adjust the threshold for triggering the animation
  });

  // Variants for the animation states
  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.6, // Increased duration for smoother transition
        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier easing for smooth effect
        staggerChildren: 0.1, // Stagger children animations (if any)
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
