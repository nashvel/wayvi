import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for the new dashboard preview component
const DashboardPreview = () => (
  <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
    <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Bus Tracking Dashboard</p>
    </div>
    <div className="mt-4 space-y-2">
      <div className="h-8 bg-gray-100 rounded"></div>
      <div className="h-8 bg-gray-100 rounded w-5/6"></div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-30 blur-3xl"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            The Future of Urban Mobility
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0">
            Join the transit systems that use Wayvi to accept payments, power custom rider experiences, and build a more efficient operation.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
            <input type="email" placeholder="Email address" className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
            <button type="submit" className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition-colors">
              Start Now
            </button>
          </form>
        </motion.div>
        <motion.div
          className="relative h-full min-h-[300px] md:min-h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
