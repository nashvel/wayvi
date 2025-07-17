import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SuperHeader from '../components/common/SuperHeader';
import SocialLogins from '../components/common/SocialLogins';

const SignUp = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <SuperHeader 
        title="Create Your Account"
        subtitle="Join thousands of fleets already optimizing their routes and saving costs with Wayvi."
      />
      <div className="flex justify-center -mt-16">
        <motion.div
          className="max-w-md w-full bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="first-name" className="sr-only">First name</label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="First name"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="last-name" className="sr-only">Last name</label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create account
              </button>
            </div>
            <SocialLogins />
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
