import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  HomeIcon,
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/solid'; // Using solid for active state
import {
  MagnifyingGlassIcon,
  EllipsisHorizontalCircleIcon,
  MapIcon,
  MapPinIcon as MapPinOutlineIcon
} from '@heroicons/react/24/outline';

const LeftSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const navItems = [
    { name: 'Home', icon: HomeIcon, path: '/dashboard' },
    { name: 'Explore', icon: MagnifyingGlassIcon, path: '/dashboard/explore' },
    { name: 'Notifications', icon: BellIcon, path: '/dashboard/notifications' },
    { name: 'Messages', icon: EnvelopeIcon, path: '/dashboard/messages' },
    { name: 'Trips Today', icon: MapIcon, path: '/dashboard/trips-today' },
    { name: 'Profile', icon: UserIcon, path: '/dashboard/profile' },
    { name: 'More', icon: EllipsisHorizontalCircleIcon, path: '/dashboard/more' },
  ];

  return (
    <aside className="h-screen w-64 bg-white text-black flex flex-col p-2 justify-between fixed">
      <div>
        <div className="text-3xl font-bold p-3">Wayvi</div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-full transition-colors duration-200 ${location.pathname === item.path ? 'font-bold' : 'hover:bg-gray-100'}`}>
                  <item.icon className="h-7 w-7" />
                  <span className="text-xl">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 pr-4">
          <button className="w-full bg-black text-white font-bold py-3 px-4 rounded-full text-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
          <MapPinOutlineIcon className="h-6 w-6" />
          <span>Track</span>
        </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center p-2 rounded-full hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
            <img className="h-10 w-10 rounded-full mr-3" src="/logo.png" alt="User avatar" />
            <div className="flex-1">
                <div className="font-bold">Wayvi</div>
                <div className="text-sm text-gray-500">wayvi@wayvi.com</div>
            </div>
            <EllipsisHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
