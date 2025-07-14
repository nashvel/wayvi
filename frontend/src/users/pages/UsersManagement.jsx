import React from 'react';
import { UserCircleIcon, KeyIcon, BellIcon } from '@heroicons/react/24/outline';

const UsersManagement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
      <p className="mt-2 text-gray-600">Manage your profile, security, and notification preferences.</p>

      <div className="mt-8 space-y-8">
        {/* Profile Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <UserCircleIcon className="h-6 w-6 mr-3 text-gray-500" />
            Profile Information
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <p className="mt-1 text-gray-900">John Doe</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <p className="mt-1 text-gray-900">user@test.com</p>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <KeyIcon className="h-6 w-6 mr-3 text-gray-500" />
            Security
          </h2>
          <div className="mt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Change Password
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <BellIcon className="h-6 w-6 mr-3 text-gray-500" />
            Notifications
          </h2>
          <ul className="mt-4 divide-y divide-gray-200">
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-800">Email Notifications</span>
              {/* This would be a toggle switch component in a real app */}
              <button className="px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-md">Enabled</button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span className="text-gray-800">Push Notifications</span>
              <button className="px-4 py-2 text-sm font-medium bg-gray-200 text-gray-700 rounded-md">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
