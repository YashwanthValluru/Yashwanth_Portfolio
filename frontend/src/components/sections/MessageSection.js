import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const MessageSection = () => {
  const { isDark } = useTheme();
  const { personalMessage } = mockData;

  const handleConnectClick = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="message"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/5"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              A Message from Yashwanth 💭
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="interactive-card p-8 md:p-12 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/95 via-black to-gray-800/95 shadow-2xl">
            {/* Decorative quote marks */}
            <div className="absolute top-6 left-8">
              <div className="text-6xl text-yellow-400/40">
                "
              </div>
            </div>
            
            <div className="absolute bottom-6 right-8">
              <div className="text-6xl text-yellow-400/40 transform rotate-180">
                "
              </div>
            </div>

            <div className="relative z-10 pt-8 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {personalMessage.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-lg leading-relaxed text-yellow-100"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 text-right"
              >
                <div className="text-xl font-semibold text-yellow-300 mb-2">
                  - Valluru Yashwanth Reddy
                </div>
                <div className="text-sm text-yellow-200/60">
                  DevOps Engineer | ML Enthusiast | Cloud Architect-in-Progress
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleConnectClick}
              size="lg"
              className="interactive-button px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🤝 Let's Connect!
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 hidden md:block">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="text-6xl opacity-20"
          >
            💡
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-10 hidden md:block">
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="text-6xl opacity-20"
          >
            🚀
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;