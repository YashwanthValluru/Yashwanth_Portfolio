import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';
import { Button } from '../ui/button';

const MessageSection = () => {
  const { isDark } = useTheme();
  const { personalInfo } = mockData;

  const handleConnectClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="message"
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
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="mb-8"
          >
            <div className={`w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center text-6xl ${
              isDark 
                ? 'border-blue-500 bg-gray-700' 
                : 'border-blue-400 bg-white'
            } shadow-lg`}>
              👨‍💻
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              A Message from Yashwanth 💬
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className={`p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' 
                : 'bg-gradient-to-br from-white to-blue-50 border border-gray-200'
            }`}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform translate-x-32 -translate-y-32" />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className={`text-6xl mb-4 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                    "
                  </div>
                  <p className={`text-lg md:text-xl leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {personalInfo.message}
                  </p>
                  <div className={`text-6xl mt-4 text-right ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                    "
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-right mb-8"
                >
                  <div className={`text-lg font-semibold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    - Valluru Yashwanth Reddy
                  </div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    DevOps Engineer & Cloud Enthusiast
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleConnectClick}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      🤝 Let's Connect
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => window.open('https://calendly.com/yashwanth-valluru', '_blank')}
                      variant="outline"
                      size="lg"
                      className={`px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-300 ${
                        isDark 
                          ? 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900' 
                          : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                      } shadow-lg hover:shadow-xl`}
                    >
                      📅 Schedule Call
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="mt-12 flex justify-center items-center space-x-8">
            {[
              { emoji: '🚀', label: 'Innovation' },
              { emoji: '🤝', label: 'Collaboration' },
              { emoji: '💡', label: 'Ideas' },
              { emoji: '⚡', label: 'Energy' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <div className={`text-xs font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;