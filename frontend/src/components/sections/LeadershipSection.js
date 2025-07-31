import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { mockData } from '../../data/mockData';

const LeadershipCard = ({ role, index, isDark }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.03, 
      y: -8,
      rotateY: -5,
      rotateX: 5
    }}
    className="interactive-card group cursor-pointer h-full"
  >
    <div className="relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90 p-6 h-full">
      {/* Decorative background elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="inline-block p-3 rounded-lg bg-yellow-400/20 border border-yellow-400/30 mb-4"
            >
              <span className="text-2xl">{role.icon}</span>
            </motion.div>
            
            <h3 className="text-xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-200 transition-colors">
              {role.title}
            </h3>
            
            <p className="text-yellow-200/80 mb-2">{role.organization}</p>
            <p className="text-sm text-yellow-300/60 mb-4">{role.duration}</p>
          </div>
        </div>
        
        <p className="text-yellow-100 mb-4 leading-relaxed">
          {role.description}
        </p>
        
        <div className="space-y-2 mb-4">
          {role.achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <span className="text-yellow-400 mr-2 mt-1 text-sm">✦</span>
              <span className="text-sm text-yellow-200">{achievement}</span>
            </motion.div>
          ))}
        </div>
        
        {role.skills && (
          <div className="flex flex-wrap gap-2">
            {role.skills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 text-xs rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        )}
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
              Leadership & Cultural Work 👑
            </span>
          </h2>
          <p className="text-lg text-yellow-200 max-w-2xl mx-auto">
            Leading teams and driving cultural initiatives that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((role, index) => (
            <LeadershipCard
              key={role.title}
              role={role}
              index={index}
              isDark={true}
            />
          ))}
        </div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="interactive-card max-w-4xl mx-auto p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-4xl mb-4"
            >
              💡
            </motion.div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Leadership Philosophy</h3>
            <p className="text-lg text-yellow-100 leading-relaxed">
              "Great leaders don't create followers, they create more leaders. My approach focuses on 
              empowering teams, fostering innovation, and building inclusive environments where everyone 
              can contribute their best work towards achieving collective goals."
            </p>
          </div>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '300+', label: 'Team Members Led' },
            { number: '3+', label: 'Years Experience' },
            { number: '40+', label: 'Events Organized' },
            { number: '100%', label: 'Team Satisfaction' },
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

export default LeadershipSection;