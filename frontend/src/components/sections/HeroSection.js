import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

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
        className="inline-block w-0.5 h-8 bg-blue-500 ml-1"
      />
    </span>
  );
};

const HeroSection = () => {
  const { isDark } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(0);
  const { funnyQuotes, personalInfo } = mockData;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % funnyQuotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [funnyQuotes.length]);

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/api/placeholder/resume.pdf';
    link.download = 'Valluru_Yashwanth_Reddy_Resume.pdf';
    link.click();
    
    // Save to local storage for mock behavior
    const downloads = JSON.parse(localStorage.getItem('resumeDownloads') || '0');
    localStorage.setItem('resumeDownloads', JSON.stringify(downloads + 1));
  };

  const handleScheduleMeet = () => {
    // Mock meeting scheduler
    window.open('https://calendly.com/yashwanth-valluru', '_blank');
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
               : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-blue-400/10' : 'bg-blue-200/20'}`}
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Funny Quote */}
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
                className={`text-lg md:text-xl font-light italic ${
                  isDark ? 'text-blue-300' : 'text-blue-600'
                } max-w-3xl mx-auto`}
              >
                "{funnyQuotes[currentQuote]}"
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typing Animation for Titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <TypingAnimation
                texts={personalInfo.titles}
                className={isDark ? 'text-gray-300' : 'text-gray-700'}
              />
            </h2>
          </motion.div>

          {/* CTA Buttons */}
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📄 Download Resume
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleScheduleMeet}
                variant="outline"
                size="lg"
                className={`px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 ${
                  isDark 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                } shadow-lg hover:shadow-xl`}
              >
                📅 Schedule a Meet
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-10 border-2 rounded-full ${
                isDark ? 'border-blue-400' : 'border-blue-600'
              } flex justify-center`}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-1 h-3 rounded-full mt-2 ${
                  isDark ? 'bg-blue-400' : 'bg-blue-600'
                }`}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;