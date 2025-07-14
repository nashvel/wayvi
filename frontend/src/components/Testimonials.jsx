import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: 'Since implementing Wayvi, our on-time performance has increased by 25%. Their route optimization is a game-changer for our city.',
    author: 'Elon Musk',
    title: 'CEO, Tesla',
  },
  {
    quote: 'The passenger information system has been a huge hit with our riders. We have seen a significant increase in rider satisfaction.',
    author: 'Jay Nashvel',
    title: 'CEO, CityLink',
  },
  {
    quote: 'Wayvi\'s analytics dashboard provides deep insights that have helped us optimize our entire operation. It\'s an indispensable tool.',
    author: 'Nacht',
    title: 'Transit Planner, Urban Mobility Group',
  }
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

const Testimonials = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-base font-semibold text-indigo-400 uppercase">What our partners say</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Trusted by transit leaders worldwide</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col"
              variants={itemVariants}
            >
              <FaQuoteLeft className="text-indigo-400 text-3xl mb-6" />
              <p className="text-gray-300 text-lg mb-6 leading-relaxed flex-grow">{testimonial.quote}</p>
              <div className="flex items-center">
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
