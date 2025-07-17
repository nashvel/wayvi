import React from 'react';
import InteractiveMap from './InteractiveMap';
import { MapPinIcon, ClockIcon, WifiIcon } from '@heroicons/react/24/solid';

const BusInfoCard = ({ busNumber, status, location, eta }) => {
  const statusColor = status === 'On Time' ? 'bg-green-500' : 'bg-yellow-500';

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-shadow">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-800">Bus #{busNumber}</h3>
        <div className="flex items-center space-x-2">
          <span className={`h-3 w-3 rounded-full ${statusColor}`}></span>
          <span className="text-sm font-semibold text-gray-700">{status}</span>
        </div>
      </div>
      <div className="mt-3 text-gray-600 space-y-2">
        <div className="flex items-center space-x-2">
          <MapPinIcon className="h-5 w-5 text-gray-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-5 w-5 text-gray-400" />
          <span>ETA: {eta}</span>
        </div>
      </div>
    </div>
  );
};

const BusTrackingSidebar = () => {
  const buses = [
    { busNumber: '101', status: 'On Time', location: 'Main St & 2nd Ave', eta: '5 mins' },
    { busNumber: '204', status: 'Delayed', location: 'Oak St & 5th Ave', eta: '12 mins' },
    { busNumber: '33B', status: 'On Time', location: 'Pine St & 1st Ave', eta: '8 mins' },
  ];

  return (
    <aside className="h-full bg-white text-black p-4 space-y-4">
      <div className="h-72 rounded-lg overflow-hidden border border-gray-200">
        <InteractiveMap />
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl text-gray-800">Live Bus Tracking</h2>
            <WifiIcon className="h-6 w-6 text-green-500 animate-pulse" />
        </div>
        <div className="space-y-3">
          {buses.map(bus => (
            <BusInfoCard key={bus.busNumber} {...bus} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BusTrackingSidebar;
