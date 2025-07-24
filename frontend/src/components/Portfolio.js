import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TechnologiesSection from './sections/TechnologiesSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import LeadershipSection from './sections/LeadershipSection';
import MessageSection from './sections/MessageSection';
import ContactSection from './sections/ContactSection';
import Navigation from './Navigation';
import DevOpsBackground from './DevOpsBackground';
import { useTheme } from '../contexts/ThemeContext';

const Portfolio = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'technologies', 'experience', 'projects', 'certifications', 'leadership', 'message', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-black text-yellow-100 relative">
      {/* DevOps Cloud Background */}
      <DevOpsBackground />
      
      <Navigation activeSection={activeSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <LeadershipSection />
        <MessageSection />
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Portfolio;