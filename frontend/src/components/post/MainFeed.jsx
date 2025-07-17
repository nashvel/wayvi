import React from 'react';

const MainFeed = ({ children }) => {
  return (
    <div className="flex-1 p-5">
      <div className="border-b border-gray-700 pb-3">
        <h1 className="text-xl font-bold">Home</h1>
      </div>
      <div className="mt-5">
        {children}
      </div>
    </div>
  );
};

export default MainFeed;
