import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import LeftSidebar from './LeftSidebar';
import BusTrackingSidebar from './BusTrackingSidebar';
import MobileHeader from './MobileHeader';

const DashboardLayout = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!isLeftSidebarOpen);
  const handleRightSidebarToggle = () => setRightSidebarOpen(!isRightSidebarOpen);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isLeftSidebarOpen) setLeftSidebarOpen(false);
      else setRightSidebarOpen(true);
    },
    onSwipedRight: () => {
      if (isRightSidebarOpen) setRightSidebarOpen(false);
      else setLeftSidebarOpen(true);
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (isLeftSidebarOpen || isRightSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLeftSidebarOpen, isRightSidebarOpen]);


  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto md:flex">
        {/* --- Desktop Left Sidebar --- */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <LeftSidebar />
        </div>

        <div className='flex-1'>
            {/* --- Mobile Header --- */}
            <MobileHeader 
                onLeftSidebarToggle={handleLeftSidebarToggle}
                onRightSidebarToggle={handleRightSidebarToggle}
            />

            <div className="flex">
                {/* --- Main Content --- */}
                <main {...swipeHandlers} className="flex-1 border-l border-r border-gray-200">
                    <Outlet />
                </main>

                {/* --- Desktop Right Sidebar --- */}
                <div className="hidden md:block w-96 flex-shrink-0 h-screen sticky top-0">
                    <BusTrackingSidebar />
                </div>
            </div>
        </div>

        {/* --- Mobile Left Sidebar Overlay --- */}
        <div className={`md:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out ${isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleLeftSidebarToggle}></div>
            <div className="relative w-64 h-full bg-white shadow-xl">
                <LeftSidebar />
            </div>
        </div>

        {/* --- Mobile Right Sidebar Overlay --- */}
        <div className={`md:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleRightSidebarToggle}></div>
            <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl">
                <BusTrackingSidebar />
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
