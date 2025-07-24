import React from 'react';
import { motion } from 'framer-motion';

const DevOpsBackground = () => {
  // DevOps conceptual labels for floating animations
  const devopsLabels = [
    "CI/CD Pipeline",
    "Infrastructure as Code", 
    "Container Orchestration",
    "Automated Deployment",
    "Monitoring & Alerts",
    "Load Balancing",
    "Auto Scaling",
    "Microservices Architecture"
  ];

  // Cloud shapes data
  const cloudShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 150 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 15
  }));

  // Data flow points for animated connections
  const dataFlowPoints = [
    { x: 10, y: 20, delay: 0 },
    { x: 30, y: 40, delay: 1 },
    { x: 50, y: 30, delay: 2 },
    { x: 70, y: 50, delay: 3 },
    { x: 90, y: 35, delay: 4 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated Cloud Shapes */}
      {cloudShapes.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            width: cloud.size,
            height: cloud.size * 0.6,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 5, 0],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "easeInOut"
          }}
        >
          {/* Multi-part cloud shape */}
          <div className="relative">
            <div className="absolute w-16 h-16 bg-yellow-400/10 rounded-full" />
            <div className="absolute left-4 w-20 h-20 bg-yellow-400/15 rounded-full" />
            <div className="absolute left-8 w-12 h-12 bg-yellow-400/12 rounded-full" />
            <div className="absolute left-2 top-2 w-14 h-14 bg-yellow-400/8 rounded-full" />
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-yellow-400/5 rounded-full blur-xl" />
          </div>
        </motion.div>
      ))}

      {/* Local Machine Icons */}
      <motion.div
        className="absolute bottom-10 left-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="p-3 bg-yellow-400/20 rounded-lg border border-yellow-400/30"
          >
            <div className="w-8 h-6 bg-yellow-400/40 rounded-sm relative">
              <div className="absolute top-1 left-1 w-2 h-1 bg-yellow-400/60 rounded-full" />
              <div className="absolute top-1 right-1 w-2 h-1 bg-yellow-400/60 rounded-full" />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs text-yellow-400/60 font-mono"
          >
            Local Dev
          </motion.div>
        </div>
      </motion.div>

      {/* Cloud Services Icon */}
      <motion.div
        className="absolute top-20 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative"
        >
          {/* Cloud cluster representing services */}
          <div className="flex items-center space-x-2">
            <div className="p-4 bg-yellow-400/20 rounded-2xl border border-yellow-400/30">
              <div className="w-12 h-8 relative">
                <div className="absolute w-3 h-3 bg-yellow-400/60 rounded-full top-0 left-1" />
                <div className="absolute w-4 h-4 bg-yellow-400/50 rounded-full top-0 left-3" />
                <div className="absolute w-3 h-3 bg-yellow-400/60 rounded-full top-0 left-7" />
                <div className="absolute w-8 h-2 bg-yellow-400/40 rounded-full bottom-0" />
              </div>
            </div>
            
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-xs text-yellow-400/60 font-mono"
            >
              Cloud Services
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Data Flow */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0)" />
            <stop offset="50%" stopColor="rgba(255, 215, 0, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
          </linearGradient>
        </defs>

        {/* Data flow lines */}
        {dataFlowPoints.slice(0, -1).map((point, index) => {
          const nextPoint = dataFlowPoints[index + 1];
          return (
            <motion.line
              key={index}
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${nextPoint.x}%`}
              y2={`${nextPoint.y}%`}
              stroke="url(#flowGradient)"
              strokeWidth="2"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: point.delay,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Data packets moving along the flow */}
        {dataFlowPoints.map((point, index) => (
          <motion.circle
            key={`packet-${index}`}
            r="3"
            fill="rgba(255, 215, 0, 0.8)"
            initial={{ 
              cx: `${dataFlowPoints[0].x}%`,
              cy: `${dataFlowPoints[0].y}%`,
              opacity: 0
            }}
            animate={{
              cx: dataFlowPoints.map(p => `${p.x}%`),
              cy: dataFlowPoints.map(p => `${p.y}%`),
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating DevOps Labels */}
      {devopsLabels.map((label, index) => (
        <motion.div
          key={label}
          className="absolute text-xs font-mono text-yellow-400/40 pointer-events-none"
          style={{
            left: `${10 + (index * 11) % 80}%`,
            top: `${20 + (index * 7) % 60}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [20, -10, 20],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 12 + (index * 2),
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut"
          }}
        >
          {label}
        </motion.div>
      ))}

      {/* Subtle animated particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default DevOpsBackground;