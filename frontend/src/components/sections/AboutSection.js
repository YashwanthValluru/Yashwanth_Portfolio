import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const AboutSection = () => {
  const { isDark } = useTheme();
  const { personalInfo } = mockData;

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who Am I? 🤔
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`p-8 rounded-2xl shadow-lg ${
              isDark 
                ? 'bg-gray-900 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <p className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {personalInfo.about}
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center items-center space-x-8">
            {[
              { icon: '🎓', label: 'SRM IST' },
              { icon: '⭐', label: 'GPA 8.55' },
              { icon: '☁️', label: 'Cloud Native' },
              { icon: '🤖', label: 'ML & AI' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-white'
                } shadow-md`}
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;