import React from 'react';
import { MapIcon, ClockIcon, PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/24/outline';

const schedule = [
  { time: '08:00 AM', trip: 'Route 101 - Stop A to Stop B' },
  { time: '09:30 AM', trip: 'Route 101 - Stop B to Stop C' },
  { time: '11:00 AM', trip: 'Route 101 - Stop C to Stop A' },
  { time: '02:00 PM', trip: 'Route 202 - Stop X to Stop Y' },
  { time: '03:30 PM', trip: 'Route 202 - Stop Y to Stop Z' },
];

const DriverDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Driver Dashboard</h1>
      <p className="mt-2 text-gray-600">Your hub for daily routes, schedules, and status updates.</p>

      {/* Current Assignment Card */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6 border-l-4 border-indigo-600">
        <h2 className="text-xl font-semibold text-gray-900">Current Assignment</h2>
        <div className="mt-4 flex items-center">
          <MapIcon className="h-8 w-8 text-gray-500" />
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-800">Route 101 - Downtown Express</p>
            <p className="text-sm text-gray-600">Bus #54321</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-around">
          <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            <PlayIcon className="h-5 w-5 mr-2" />
            Start Route
          </button>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
            <PauseIcon className="h-5 w-5 mr-2" />
            Take Break
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            <StopIcon className="h-5 w-5 mr-2" />
            End Shift
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <ClockIcon className="h-6 w-6 mr-3 text-gray-500" />
          Today's Schedule
        </h2>
        <ul className="mt-4 divide-y divide-gray-200">
          {schedule.map((item, index) => (
            <li key={index} className="py-3 flex justify-between items-center">
              <span className="font-medium text-gray-700">{item.time}</span>
              <span className="text-gray-600">{item.trip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverDashboard;
