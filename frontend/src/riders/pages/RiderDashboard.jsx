import React from 'react';
import { StarIcon, MapIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const favoriteRoutes = [
  { id: 1, name: 'Route 101 - Downtown Express', status: 'On Time', nextBus: '5 min' },
  { id: 2, name: 'Route 303 - University Link', status: 'Delayed', nextBus: '15 min' },
];

const alerts = [
  { id: 1, message: 'Route 202 is experiencing minor delays due to downtown traffic.', type: 'warning' },
  { id: 2, message: 'Weekend service will run on a holiday schedule this Saturday.', type: 'info' },
];

const RiderDashboard = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Rider Dashboard</h1>
      <p className="mt-2 text-gray-400">Your personal hub for tracking buses and planning your journey.</p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Live Map Placeholder */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 h-96 flex flex-col justify-center items-center">
            <MapIcon className="h-16 w-16 text-gray-600" />
            <h2 className="mt-4 text-xl font-semibold text-white">Live Bus Tracking</h2>
            <p className="mt-2 text-gray-500">Map feature coming soon!</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Favorite Routes */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <StarIcon className="h-6 w-6 mr-3 text-yellow-400" />
              Favorite Routes
            </h2>
            <ul className="mt-4 divide-y divide-gray-700">
              {favoriteRoutes.map((route) => (
                <li key={route.id} className="py-3">
                  <p className="font-medium text-white">{route.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${route.status === 'On Time' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'}`}>
                      {route.status}
                    </span>
                    <span className="text-sm text-gray-400">Next bus: {route.nextBus}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <BellAlertIcon className="h-6 w-6 mr-3 text-red-400" />
              Service Alerts
            </h2>
            <ul className="mt-4 space-y-3">
              {alerts.map((alert) => (
                <li key={alert.id} className="text-sm text-gray-300">
                  {alert.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;
