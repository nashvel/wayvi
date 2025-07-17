import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SuperHeader from '../components/common/SuperHeader';
import { useAuth } from '../context/AuthContext';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import SocialLogins from '../components/common/SocialLogins';

const credentials = {
  'superadmin@test.com': { password: 'password', role: 'superadmin' },
  'admin@test.com': { password: 'password', role: 'admin' },
  'client@test.com': { password: 'password', role: 'client' },
  'driver@test.com': { password: 'password', role: 'driver' },
  'rider@test.com': { password: 'password', role: 'rider' },
  'user@test.com': { password: 'password', role: 'users' },
};

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Bypass actual authentication and log in with a default role
    login('superadmin'); 
    navigate('/dashboard');
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <SuperHeader 
        title="Sign In to Your Account"
        subtitle="Access your dashboard to manage your fleet and view real-time analytics."
      />
      <div className="flex justify-center -mt-16">
        <div
          className="max-w-md w-full bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 relative"
        >
          <form onSubmit={handleSignIn}>
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input 
                  id="email-address" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Email address" 
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Password" 
                />
              </div>
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Sign in
              </button>
            </div>
            <SocialLogins />
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
