import React from 'react';
import { MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Active Routes', stat: '42', icon: MapPinIcon },
  { name: 'On-Time Departures', stat: '98.5%', icon: ClockIcon },
  { name: 'Drivers on Duty', stat: '128', icon: UserGroupIcon },
];

const routes = [
  { id: 1, name: 'Route 101 - Downtown Express', status: 'Active', buses: 5 },
  { id: 2, name: 'Route 202 - Crosstown Shuttle', status: 'Active', buses: 8 },
  { id: 3, name: 'Route 303 - University Link', status: 'Inactive', buses: 0 },
];

const AdminDashboard = () => {
  return (
    <div class="text-white">
      <h1 class="text-3xl font-bold">Admin Dashboard</h1>
      <p class="mt-2 text-gray-400">Oversee daily operations and manage system configurations.</p>

      {/* Stats Cards */}
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} class="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <item.icon class="h-6 w-6 text-gray-500" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-400 truncate">{item.name}</dt>
                    <dd class="text-lg font-medium text-white">{item.stat}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Route Management Table */}
      <div class="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-white">Route Management</h2>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                Add New Route
            </button>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-700">
                <thead class="bg-gray-800">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Route Name</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Assigned Buses</th>
                        <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-gray-900 divide-y divide-gray-700">
                    {routes.map((route) => (
                        <tr key={route.id}>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{route.name}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${route.status === 'Active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                                    {route.status}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{route.buses}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-blue-400 hover:text-blue-300">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
