import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/solid';

// Custom Line Chart Component
const LineChart = () => {
  const data = [65, 59, 80, 81, 56, 55, 40, 50, 70, 90];
  const width = 100;
  const height = 50;
  const points = data.map((point, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (point / 100) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
      <motion.polyline
        fill="none"
        stroke="#4f46e5" // indigo-600
        strokeWidth="2.5"
        points={points}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

// Custom Circular Progress Bar Component
const CircularProgress = ({ percentage }) => {
  const radius = 55;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="-rotate-90">
      <circle
        stroke="#374151" // gray-700
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        stroke="#4f46e5" // indigo-600
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        animate={{
          strokeDashoffset: [circumference, strokeDashoffset]
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

const AnimatedDashboardPreview = () => {
  const [stats, setStats] = useState({ onTime: 92, fleet: 245 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        onTime: Math.floor(Math.random() * (98 - 88 + 1) + 88),
        fleet: Math.floor(Math.random() * (260 - 240 + 1) + 240),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl p-6 overflow-hidden">
      {/* Background gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-gray-900/40 to-blue-900/30 backdrop-blur-3xl -m-4"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="absolute inset-0.5 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl" style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-white font-bold text-xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Live Fleet Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <h4 className="text-sm text-gray-300 font-medium mb-2">On-Time</h4>
            <div className="relative my-2 w-full h-full flex items-center justify-center">
              <div className="relative w-[120px] h-[120px]">
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <CircularProgress percentage={stats.onTime} />
                  </div>
                  <div className="absolute inset-0 z-30 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {stats.onTime}%
                    </span>
                  </div>
                </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-400/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            <h4 className="text-sm text-gray-300 font-medium mb-2">Active Vehicles</h4>
            <div className="text-5xl font-bold text-white my-2">
                {stats.fleet}
              </div>
            <p className="text-xs text-gray-500">across 12 routes</p>
          </motion.div>
        </div>
        <motion.div 
          className="mt-6 bg-white/5 backdrop-blur-lg rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-glow shadow-green-400/50"></div>
          <p className="text-sm text-gray-200">All systems operational</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedDashboardPreview;
