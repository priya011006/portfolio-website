import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30 border border-primary-500/20 hover:scale-110 active:scale-95 transition-all duration-200"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-6 h-6 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
