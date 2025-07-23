import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const CertificationCard = ({ cert, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ 
      delay: index * 0.1, 
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      rotateY: 5,
      boxShadow: isDark 
        ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
        : "0 20px 40px rgba(0, 0, 0, 0.15)"
    }}
    className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
        : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
    } shadow-lg`}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
    </div>
    
    <div className="relative z-10 text-center">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
        className="text-4xl mb-4"
      >
        {cert.icon}
      </motion.div>
      <h3 className={`font-semibold text-sm leading-tight ${
        isDark ? 'text-gray-200' : 'text-gray-800'
      }`}>
        {cert.name}
      </h3>
    </div>

    {/* Shine effect */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileHover={{ x: 100, opacity: [0, 1, 0] }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform skew-x-12"
    />
  </motion.div>
);

const CertificationsSection = () => {
  const { isDark } = useTheme();
  const { certifications } = mockData;

  return (
    <section
      id="certifications"
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements 🏆
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Recognition of skills and academic excellence
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <CertificationCard 
              key={index} 
              cert={cert} 
              index={index} 
              isDark={isDark} 
            />
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`inline-block p-8 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700' 
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
          } shadow-lg`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { number: '5+', label: 'Certifications', icon: '📜' },
                { number: 'Top 5', label: 'SRM JEE Rank', icon: '🥇' },
                { number: '8.55', label: 'GPA Score', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className={`text-sm mt-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <blockquote className={`text-lg italic max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            "Continuous learning and skill validation are the keys to staying relevant in the ever-evolving tech landscape."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;