import React from 'react';
import { Bars3Icon, MapIcon } from '@heroicons/react/24/outline';

const MobileHeader = ({ onLeftSidebarToggle, onRightSidebarToggle }) => {
  return (
    <div className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-20">
      <button onClick={onLeftSidebarToggle}>
        <Bars3Icon className="h-6 w-6 text-gray-800" />
      </button>
      <div className="text-xl font-bold text-gray-800">Wayvi</div>
      <button onClick={onRightSidebarToggle}>
        <MapIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default MobileHeader;
