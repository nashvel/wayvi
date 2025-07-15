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
    <div className="text-white">
      <h1 className="text-3xl font-bold">Driver Dashboard</h1>
      <p className="mt-2 text-gray-400">Your hub for daily routes, schedules, and status updates.</p>

      {/* Current Assignment Card */}
      <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold text-white">Current Assignment</h2>
        <div className="mt-4 flex items-center">
          <MapIcon className="h-8 w-8 text-gray-500" />
          <div className="ml-4">
            <p className="text-lg font-medium text-white">Route 101 - Downtown Express</p>
            <p className="text-sm text-gray-400">Bus #54321</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-around">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            <PlayIcon className="h-5 w-5 mr-2" />
            Start Route
          </button>
          <button className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors">
            <PauseIcon className="h-5 w-5 mr-2" />
            Take Break
          </button>
          <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
            <StopIcon className="h-5 w-5 mr-2" />
            End Shift
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="mt-8 bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white flex items-center">
          <ClockIcon className="h-6 w-6 mr-3 text-gray-500" />
          Today's Schedule
        </h2>
        <ul className="mt-4 divide-y divide-gray-700">
          {schedule.map((item, index) => (
            <li key={index} className="py-3 flex justify-between items-center">
              <span className="font-medium text-white">{item.time}</span>
              <span className="text-gray-400">{item.trip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DriverDashboard;
