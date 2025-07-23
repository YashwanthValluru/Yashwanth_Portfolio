import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';
import { Button } from '../ui/button';

const ProjectCard = ({ project, index, isDark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleDemoClick = () => {
    window.open(project.liveDemo, '_blank');
  };

  const handleGithubClick = () => {
    window.open(project.githubLink, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Video/Demo Section */}
        <div className="relative group">
          <div className={`aspect-video relative overflow-hidden ${
            isDark ? 'bg-gray-900' : 'bg-gray-100'
          }`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-full flex items-center justify-center cursor-pointer"
              onClick={() => setVideoPlaying(!videoPlaying)}
            >
              {!videoPlaying ? (
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto ${
                      isDark ? 'bg-blue-600' : 'bg-blue-500'
                    } text-white`}
                  >
                    ▶️
                  </motion.div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Click to view demo
                  </p>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className={`text-center p-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
                    <p>Demo video would play here</p>
                    <p className="text-xs mt-2">(Mock implementation)</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h3>
          
          <p className={`text-sm mb-6 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="mb-6">
            <h4 className={`text-sm font-semibold mb-3 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              Key Highlights:
            </h4>
            <div className="space-y-2">
              {project.highlights.slice(0, isExpanded ? project.highlights.length : 2).map((highlight, hIndex) => (
                <motion.div
                  key={hIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: hIndex * 0.1 }}
                  className="flex items-start space-x-2"
                >
                  <span className="text-green-500 text-xs mt-1">✓</span>
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
            
            {project.highlights.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-xs mt-2 ${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}
              >
                {isExpanded ? 'Show less' : `Show ${project.highlights.length - 2} more...`}
              </button>
            )}
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className={`text-sm font-semibold mb-3 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIndex) => (
                <motion.span
                  key={tIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tIndex * 0.05 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleDemoClick}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                🚀 Live Demo
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleGithubClick}
                variant="outline"
                className={`w-full sm:w-auto ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                🐙 GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const { projects } = mockData;

  return (
    <section
      id="projects"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects 🌟
            </span>
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showcasing innovation in ML, Computer Vision, and Cloud Technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${
            isDark 
              ? 'bg-blue-900 text-blue-300 border border-blue-700' 
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            <span className="mr-2">💡</span>
            More projects available on my GitHub profile
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;