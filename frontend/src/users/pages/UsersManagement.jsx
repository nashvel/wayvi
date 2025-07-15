import React from 'react';
import { UserCircleIcon, KeyIcon, BellIcon } from '@heroicons/react/24/outline';

const UsersManagement = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Account Settings</h1>
      <p className="mt-2 text-gray-400">Manage your profile, security, and notification preferences.</p>

      <div className="mt-8 space-y-8">
        {/* Profile Information */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <UserCircleIcon className="h-6 w-6 mr-3 text-gray-400" />
            Profile Information
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Full Name</label>
              <p className="mt-1 text-white">Wayvi</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Email Address</label>
              <p className="mt-1 text-white">wayvi@wayvi.com</p>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button className="px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <KeyIcon className="h-6 w-6 mr-3 text-gray-400" />
            Security
          </h2>
          <div className="mt-4">
            <button className="px-4 py-2 border border-gray-600 rounded-md text-sm font-medium text-white hover:bg-gray-700">
              Change Password
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <BellIcon className="h-6 w-6 mr-3 text-gray-400" />
            Notifications
          </h2>
          <ul className="mt-4 divide-y divide-gray-700">
            <li className="py-3 flex justify-between items-center">
              <span className="text-white">Email Notifications</span>
              {/* This would be a toggle switch component in a real app */}
              <button className="px-4 py-2 text-sm font-medium bg-green-900 text-green-300 rounded-md">Enabled</button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-white">Push Notifications</span>
              <button className="px-4 py-2 text-sm font-medium bg-gray-700 text-gray-300 rounded-md">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
