import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const ExperienceSection = () => {
  const { isDark } = useTheme();
  const { experience } = mockData;

  return (
    <section
      id="experience"
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
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience Timeline 🚀
            </span>
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            My journey in DevOps, Cloud, and Infrastructure
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          } rounded-full`} />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${
                  isDark 
                    ? 'bg-blue-500 border-gray-800' 
                    : 'bg-blue-500 border-gray-50'
                }`}
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: isDark 
                    ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                    : "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${
                  isDark 
                    ? 'bg-gray-900 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                } ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-500 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className={`text-lg font-semibold ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {exp.company}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {exp.period}
                  </p>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (achIndex * 0.1), duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-green-500 text-lg">⚡</span>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className={`inline-flex items-center px-6 py-3 rounded-full ${
              isDark 
                ? 'bg-green-900 text-green-300 border border-green-700' 
                : 'bg-green-100 text-green-800 border border-green-200'
            }`}>
              <span className="animate-pulse w-3 h-3 bg-green-500 rounded-full mr-3" />
              Currently seeking full-time opportunities in DevOps & Cloud Engineering
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;