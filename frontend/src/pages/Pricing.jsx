import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import SuperHeader from '../components/common/SuperHeader';

const tiers = [
  {
    name: 'Starter',
    price: '49',
    description: 'For small fleets and startups getting off the ground.',
    features: ['Up to 10 vehicles', 'Real-time tracking', 'Basic reporting', 'Email support'],
    cta: 'Choose Starter',
  },
  {
    name: 'Professional',
    price: '99',
    description: 'For growing businesses that need more power and support.',
    features: [
      'Up to 50 vehicles',
      'Advanced route optimization',
      'Passenger information system',
      'Priority support',
    ],
    cta: 'Choose Professional',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'For large-scale operations with custom needs.',
    features: [
      'Unlimited vehicles',
      'Dedicated account manager',
      'Custom integrations',
      '24/7/365 support',
    ],
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <div className="bg-white">
      <SuperHeader 
        title="Flexible pricing for any fleet size"
        subtitle="Choose a plan that fits your needs. All plans come with a 14-day free trial."
      />

      {/* Pricing Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                className={`border rounded-2xl p-8 flex flex-col ${tier.featured ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200'}`}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
              >
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="text-gray-500 mt-2 flex-grow">{tier.description}</p>
                <div className="mt-6">
                  {tier.price === 'Contact Us' ? (
                    <p className="text-4xl font-bold text-gray-900">{tier.price}</p>
                  ) : (
                    <p className="text-4xl font-bold text-gray-900">${tier.price}<span className="text-lg font-medium text-gray-500">/mo</span></p>
                  )}
                </div>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className={`mt-8 block w-full text-center rounded-lg px-6 py-3 font-semibold ${tier.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'}`}>
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
