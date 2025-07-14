import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import SuperHeader from '../components/SuperHeader';

const resources = [
  {
    title: 'Getting Started Guide',
    description: 'A complete walkthrough of setting up your Wayvi account and adding your first vehicle.',
    category: 'Documentation',
    link: '#',
  },
  {
    title: 'Optimizing Routes with AI',
    description: 'Learn how our AI-powered tools can help you save fuel and reduce travel time.',
    category: 'Case Study',
    link: '#',
  },
  {
    title: 'API Reference',
    description: 'Integrate your own applications with the Wayvi platform using our powerful REST API.',
    category: 'Developers',
    link: '#',
  },
  {
    title: 'City of Metropolis Transit Success',
    description: 'How a major city improved rider satisfaction by 25% using our real-time tracking.',
    category: 'Case Study',
    link: '#',
  },
  {
    title: 'Troubleshooting Common Issues',
    description: 'Find quick solutions to common problems and get the most out of our platform.',
    category: 'Support',
    link: '#',
  },
  {
    title: 'Understanding Your Analytics',
    description: 'A deep dive into the data and insights available in your analytics dashboard.',
    category: 'Documentation',
    link: '#',
  },
];

const Resources = () => {
  return (
    <div className="bg-white">
      <SuperHeader 
        title="Resources & Insights"
        subtitle="Explore our guides, case studies, and developer documentation to get the most out of Wayvi."
      />

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-sm font-semibold text-indigo-600">{resource.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{resource.title}</h3>
                <p className="text-gray-600 mt-3 flex-grow">{resource.description}</p>
                <a href={resource.link} className="mt-6 flex items-center font-semibold text-indigo-600 hover:text-indigo-800">
                  Read more <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
