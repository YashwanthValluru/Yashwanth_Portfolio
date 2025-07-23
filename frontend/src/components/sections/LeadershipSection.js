import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const LeadershipCard = ({ leadership, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.02, 
      y: -5,
      boxShadow: isDark 
        ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
        : "0 20px 40px rgba(0, 0, 0, 0.15)"
    }}
    className={`p-8 rounded-2xl transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
        : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
    } shadow-lg relative overflow-hidden`}
  >
    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
      <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform translate-x-16 -translate-y-16" />
    </div>

    <div className="relative z-10">
      <div className="flex items-start space-x-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
            isDark ? 'bg-blue-600' : 'bg-blue-500'
          } text-white`}>
            👑
          </div>
        </motion.div>

        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-2 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}>
            {leadership.title}
          </h3>
          <h4 className={`text-lg font-semibold mb-3 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}>
            {leadership.organization}
          </h4>
          <p className={`text-sm leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {leadership.description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const LeadershipSection = () => {
  const { isDark } = useTheme();
  const { leadership } = mockData;

  return (
    <section
      id="leadership"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership & Cultural Work 👥
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Building communities and leading initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {leadership.map((item, index) => (
            <LeadershipCard 
              key={index} 
              leadership={item} 
              index={index} 
              isDark={isDark} 
            />
          ))}
        </div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`inline-block p-8 rounded-2xl ${
            isDark 
              ? 'bg-gradient-to-r from-purple-900 to-pink-900 border border-gray-700' 
              : 'bg-gradient-to-r from-purple-50 to-pink-50 border border-gray-200'
          } shadow-lg`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: '🎭', number: '1', label: 'Major Cultural Fest' },
                { icon: '👥', number: '500+', label: 'Students Impacted' },
                { icon: '🏆', number: '2', label: 'Leadership Roles' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

        {/* Leadership Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className={`max-w-3xl mx-auto p-8 rounded-2xl ${
            isDark 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-gray-50 border border-gray-200'
          }`}>
            <blockquote className={`text-lg italic leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              "Leadership is not about being in charge. It's about taking care of those in your charge and creating environments where everyone can thrive."
            </blockquote>
            <div className={`mt-4 text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              - My leadership philosophy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;