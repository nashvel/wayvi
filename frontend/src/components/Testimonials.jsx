import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Since implementing Wayvi, our on-time performance has increased by 25%. Their route optimization is a game-changer for our city.',
    author: 'Jane Doe',
    title: 'Director of Operations, Metro Transit',
  },
  {
    quote: 'The passenger information system has been a huge hit with our riders. We have seen a significant increase in rider satisfaction.',
    author: 'John Smith',
    title: 'CEO, CityLink',
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

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-left max-w-2xl mb-12">
          <p className="text-base font-semibold text-indigo-600 uppercase">What our partners say</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Trusted by transit leaders worldwide</h2>
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
              className="bg-transparent"
              variants={itemVariants}
            >
              <p className="text-gray-800 text-2xl font-medium mb-6 leading-snug">\"{testimonial.quote}\"</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
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
