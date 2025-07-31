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
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              Professional Experience 💼
            </span>
          </h2>
          <p className="text-lg text-yellow-200 max-w-2xl mx-auto">
            My journey in DevOps and Cloud
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full opacity-60" />

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1 px-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="interactive-card p-6 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90 shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-yellow-400">{exp.position}</h3>
                        <h4 className="text-lg text-yellow-200">{exp.company}</h4>
                        <p className="text-sm text-yellow-300/80">{exp.duration}</p>
                      </div>
                      <div className="text-2xl">{exp.icon}</div>
                    </div>

                    <p className="text-yellow-100 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-yellow-400 mr-2 mt-1">•</span>
                          <span className="text-sm text-yellow-200">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative z-10 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg glow-pulse"
                />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;