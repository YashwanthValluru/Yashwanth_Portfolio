import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const TechCard = ({ tech, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="tech-card p-4 rounded-xl cursor-pointer"
  >
    <div className="text-center">
      <motion.span 
        className="text-3xl mb-2 block"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {tech.icon}
      </motion.span>
      <h3 className="font-semibold text-sm text-yellow-300">
        {tech.name}
      </h3>
    </div>
  </motion.div>
);

const TechSection = ({ title, techs, isDark, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-yellow-400">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {techs.map((tech, index) => (
        <TechCard 
          key={tech.name} 
          tech={tech} 
          index={index} 
          isDark={isDark} 
        />
      ))}
    </div>
  </motion.div>
);

const TechnologiesSection = () => {
  const { isDark } = useTheme();
  const { technologies } = mockData;

  const techSections = [
    { title: 'Languages', key: 'languages' },
    { title: 'Cloud & AWS', key: 'cloud' },
    { title: 'DevOps & Infrastructure', key: 'devops' },
    { title: 'ML & Data Science', key: 'mlData' },
    { title: 'Tools & Monitoring', key: 'tools' },
  ];

  return (
    <section
      id="technologies"
      className="py-20 bg-black transition-colors duration-500"
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
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent gradient-text">
              Technologies I've Worked On ⚡
            </span>
          </h2>
          <p className="mt-4 text-lg text-yellow-200">
            My technical arsenal for building scalable, cloud-ready solutions
          </p>
        </motion.div>

        <div className="space-y-16">
          {techSections.map((section, index) => (
            <TechSection
              key={section.key}
              title={section.title}
              techs={technologies[section.key]}
              isDark={true}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '20+', label: 'Technologies' },
            { number: '5+', label: 'Cloud Services' },
            { number: '10+', label: 'DevOps Tools' },
            { number: '8+', label: 'ML Libraries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="interactive-card text-center p-6 rounded-xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm mt-2 text-yellow-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;