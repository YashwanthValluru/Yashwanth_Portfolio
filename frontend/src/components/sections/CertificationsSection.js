import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const CertificationCard = ({ cert, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      rotateY: 5 
    }}
    className="interactive-card group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90 p-6 h-full">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          {/* Conditional rendering for icon: SVG image or emoji/text */}
          {typeof cert.icon === 'string' && cert.icon.endsWith('.svg') ? (
            <img src={cert.icon} alt={`${cert.name} icon`} className="w-10 h-10 object-contain" />
          ) : (
            <div className="text-3xl">{cert.icon}</div>
          )}
          <div className="text-xs text-yellow-300/60">{cert.year}</div>
        </div>
        
        <h3 className="text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
          {cert.name}
        </h3>
        
        <p className="text-sm text-yellow-200/80 mb-4">
          {cert.issuer}
        </p>
        
        {cert.credentialId && (
          <div className="text-xs text-yellow-300/60">
            ID: {cert.credentialId}
          </div>
        )}
        
        {cert.link && (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-4 py-2 text-xs bg-yellow-400/20 text-yellow-300 rounded-full border border-yellow-400/30 hover:bg-yellow-400/30 transition-all duration-300"
          >
            View Credential
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const CertificationsSection = () => {
  const { isDark } = useTheme();
  const { certifications, achievements } = mockData;

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black transition-colors duration-500 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent gradient-text">
              Certifications & Achievements 🏆
            </span>
          </h2>
          <p className="text-lg text-yellow-200 max-w-2xl mx-auto">
            Professional certifications and academic achievements that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.name}
              cert={cert}
              index={index}
              isDark={true}
            />
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Academic Achievements
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="interactive-card p-6 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-4">{achievement.icon}</span>
                  <div>
                    <h4 className="font-bold text-yellow-400">{achievement.title}</h4>
                    <p className="text-sm text-yellow-200/80">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center">
                  {achievement.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '5+', label: 'Certifications' },
            { number: '2+', label: 'Academic Awards' },
            { number: '8.55', label: 'CGPA' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="interactive-card text-center p-6 rounded-xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-yellow-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
