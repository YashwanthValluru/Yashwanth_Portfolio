import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';
import DevOpsBackground from '../DevOpsBackground';
import yash from "../../data/tech-logos/yashwanth.jpg";
import yash2 from "../../data/tech-logos/Image (3).jpg";
import { Icon } from 'lucide-react';

const TypingAnimation = ({ texts, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-yellow-500 ml-1"
      />
    </span>
  );
};

const HeroSection = () => {
  const { isDark } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const { funnyQuotes, personalInfo } = mockData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [funnyQuotes.length]);

  const handleDownloadResume = () => {
    setShowResume(!showResume);
  };

  const handleScheduleMeet = () => {
    window.open('https://calendar.app.google/SfJudM192JJ7UnSe7', '_blank');
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <DevOpsBackground />
      <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top--10 -left-20 sm:-left-28 md:-left-36 lg:-left-48 xl:-left-64 2xl:-left-80 z-20"
        >
          <img
            src= {yash2}
            alt="Profile"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover border-4 border-yellow-500 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
          />
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl font-light italic text-yellow-400 max-w-3xl mx-auto"
              >
                "{funnyQuotes[currentQuote]}"
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <TypingAnimation
                texts={personalInfo.titles}
                className="text-yellow-200"
              />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="interactive-button px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {showResume ? 'Close Resume' : 'View Resume'}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleScheduleMeet}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl glow-pulse"
              >
                📅 Schedule a Meet
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-full max-h-[80vh] pt-16"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="/Yashwanth_resume_upt_mnfy.pdf"
                className="w-full h-full border-0 rounded-lg shadow-2xl"
                title="Yashwanth's Resume"
              />
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-4 right-4 text-red-500 text-2xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;