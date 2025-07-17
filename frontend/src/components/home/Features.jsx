import React from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, MapIcon, UserGroupIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Real-Time GPS Tracking',
    description: 'Monitor your entire fleet in real-time on a live map. Get precise location data, speed, and status for every vehicle.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Route Optimization',
    description: 'Automatically generate the most efficient routes based on traffic, schedules, and vehicle capacity to save time and fuel.',
    icon: MapIcon,
  },
  {
    title: 'Passenger Information Systems',
    description: 'Provide riders with accurate arrival times, service alerts, and mobile-friendly schedules to improve their journey.',
    icon: UserGroupIcon,
  },
  {
    title: 'Advanced Reporting & Analytics',
    description: 'Gain insights into fleet performance, on-time rates, and ridership trends with our comprehensive analytics dashboard.',
    icon: PresentationChartLineIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-transparent"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 text-indigo-600 mb-4">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
