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
    <div className="relative w-full h-full bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-700 overflow-hidden">
      <GlobeAltIcon className="absolute -top-8 -left-8 w-48 h-48 text-gray-700 opacity-20" />
      <div className="absolute inset-0 z-0 opacity-20 p-4"><LineChart /></div>
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-white font-bold text-lg mb-4">Live Fleet Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-sm text-gray-400 font-semibold">On-Time</h4>
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
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center text-center border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-sm text-gray-400 font-semibold">Active Vehicles</h4>
            <div className="text-5xl font-bold text-white my-2">
                {stats.fleet}
              </div>
            <p className="text-xs text-gray-500">across 12 routes</p>
          </motion.div>
        </div>
        <motion.div 
          className="mt-4 bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <p className="text-sm text-gray-300">All systems operational</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedDashboardPreview;
