import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import SuperadminDashboard from '../superadmin/pages/SuperadminDashboard.jsx';
import AdminDashboard from '../admin/pages/AdminDashboard.jsx';
import ClientDashboard from '../client/pages/ClientDashboard.jsx';
import DriverDashboard from '../driver/pages/DriverDashboard.jsx';
import RiderDashboard from '../riders/pages/RiderDashboard.jsx';
import UsersManagement from '../users/pages/UsersManagement.jsx';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const dashboardComponents = {
    superadmin: SuperadminDashboard,
    admin: AdminDashboard,
    client: ClientDashboard,
    driver: DriverDashboard,
    rider: RiderDashboard,
    users: UsersManagement,
  };

  if (!user || !user.role) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Authentication Error</h1>
        <p className="mt-2 text-lg text-gray-600">Could not determine user role. Please try signing in again.</p>
      </div>
    );
  }

  const SpecificDashboard = dashboardComponents[user.role];

  if (!SpecificDashboard) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Invalid Role</h1>
        <p className="mt-2 text-lg text-gray-600">The dashboard for your role ({user.role}) could not be found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Log Out
            </button>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <SpecificDashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
