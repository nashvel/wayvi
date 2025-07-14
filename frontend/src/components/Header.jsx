import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/20/solid';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-gray-900 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Wayvi</Link>
        <div className="hidden md:flex items-center space-x-6">
          {/* Dropdown for Products */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:text-white focus:outline-none">
              Products
              <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/products/tracking" className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        Real-Time Tracking
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/products/optimization" className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        Route Optimization
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          
          {/* Dropdown for Solutions */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:text-white focus:outline-none">
              Solutions
              <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/solutions/public" className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        For Public Transit
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/solutions/schools" className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-900'} group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        For School Buses
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link to="/developers" className="text-sm font-medium text-gray-200 hover:text-white">Developers</Link>
          <Link to="/resources" className="text-sm font-medium text-gray-200 hover:text-white">Resources</Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-200 hover:text-white">Pricing</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-sm font-medium text-gray-200 hover:text-white">Dashboard</Link>
          <Link to="/signin" className="flex items-center text-sm font-medium text-gray-200 hover:text-white">
            Sign In <ArrowRightIcon className="ml-1 w-4 h-4" />
          </Link>
          <Link to="/contact-sales" className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Contact sales
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
