import React from 'react';
import { motion } from 'framer-motion';

// 3D-styled SVGs (simple gradients, shadows, transforms for effect)
const AwsLogo3D = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ filter: 'drop-shadow(0 4px 16px #ff990055)' }}><ellipse cx="32" cy="32" rx="26" ry="16" fill="url(#aws3d)" /><defs><linearGradient id="aws3d" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFB347"/><stop offset="100%" stopColor="#FF9900"/></linearGradient></defs><ellipse cx="32" cy="36" rx="18" ry="6" fill="#fff" opacity="0.15"/></svg>
);
const AzureLogo3D = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ filter: 'drop-shadow(0 4px 16px #0078d455)' }}><polygon points="32,10 56,54 8,54" fill="url(#az3d)" /><defs><linearGradient id="az3d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7FDBFF"/><stop offset="100%" stopColor="#0078D4"/></linearGradient></defs></svg>
);
const GcpLogo3D = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ filter: 'drop-shadow(0 4px 16px #4285f455)' }}><circle cx="32" cy="32" r="26" fill="url(#gcp3d)" /><defs><radialGradient id="gcp3d" cx="0.5" cy="0.5" r="0.5"><stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#4285F4"/></radialGradient></defs><circle cx="32" cy="32" r="14" fill="#fff" opacity="0.12"/></svg>
);
const CloudLogo3D = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ filter: 'drop-shadow(0 4px 16px #e0e7ef55)' }}><ellipse cx="32" cy="40" rx="22" ry="12" fill="url(#cloud3d)" /><defs><linearGradient id="cloud3d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#e0e7ef"/></linearGradient></defs><ellipse cx="22" cy="36" rx="10" ry="6" fill="#fff" opacity="0.18"/><ellipse cx="42" cy="36" rx="10" ry="6" fill="#fff" opacity="0.18"/></svg>
);
const LaptopLogo3D = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" style={{ filter: 'drop-shadow(0 4px 16px #2228)' }}><rect x="12" y="20" width="40" height="20" rx="3" fill="url(#lap3d)" /><defs><linearGradient id="lap3d" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#bbb"/><stop offset="100%" stopColor="#222"/></linearGradient></defs><rect x="16" y="26" width="32" height="8" rx="2" fill="#fff" opacity="0.18"/><rect x="10" y="44" width="44" height="6" rx="3" fill="#888" opacity="0.7"/></svg>
);

const DevOpsBackground = () => {
  // Fixed, non-intrusive logo positions (corners/edges)
  const logos = [
    { Logo: AwsLogo3D, style: { top: 24, left: 24 } }, // top-left
    { Logo: AzureLogo3D, style: { top: 24, right: 24 } }, // top-right
    { Logo: GcpLogo3D, style: { bottom: 24, left: 24 } }, // bottom-left
    { Logo: CloudLogo3D, style: { bottom: 24, right: 24 } }, // bottom-right
    { Logo: LaptopLogo3D, style: { bottom: 40, left: '50%', transform: 'translateX(-50%)' } }, // bottom center
  ];

  // Subtle floating/rotating/scale animation variants
  const floatAnim = (delay = 0) => ({
    initial: { opacity: 0.18, scale: 1, y: 0, rotate: 0 },
    animate: { opacity: 0.22, scale: [1, 1.08, 1], y: [0, -10, 0], rotate: [0, 6, 0] },
    transition: { duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Subtle grid pattern for depth */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      {/* 3D Animated Logos in fixed, non-intrusive positions */}
      {logos.map(({ Logo, style }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ ...style, zIndex: 1, opacity: 0.22, filter: 'blur(0.5px)' }}
          {...floatAnim(i * 1.5)}
        >
          <Logo />
        </motion.div>
      ))}
      {/* Subtle animated particles for extra visual interest */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            filter: 'blur(1.5px)',
            zIndex: 0
          }}
          animate={{
            opacity: [0, 0.18, 0],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default DevOpsBackground;