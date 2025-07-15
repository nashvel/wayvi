import React from 'react';
import { useAuth } from '../context/AuthContext';

// Import the new layout components
import LeftSidebar from '../components/LeftSidebar';
import MainFeed from '../components/MainFeed';
import RightSidebar from '../components/RightSidebar';

// Import the role-specific dashboards
import SuperadminDashboard from '../superadmin/pages/SuperadminDashboard.jsx';
import AdminDashboard from '../admin/pages/AdminDashboard.jsx';
import ClientDashboard from '../client/pages/ClientDashboard.jsx';
import DriverDashboard from '../driver/pages/DriverDashboard.jsx';
import RiderDashboard from '../riders/pages/RiderDashboard.jsx';
import UsersManagement from '../users/pages/UsersManagement.jsx';

const Dashboard = () => {
  const { user } = useAuth();

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
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Authentication Error</h1>
        <p className="mt-2 text-lg">Could not determine user role. Please try signing in again.</p>
      </div>
    );
  }

  const SpecificDashboard = dashboardComponents[user.role];

  if (!SpecificDashboard) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h1 className="text-4xl font-bold">Invalid Role</h1>
        <p className="mt-2 text-lg">The dashboard for your role ({user.role}) could not be found.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <LeftSidebar />
      <main className="flex-1 border-l border-r border-gray-700">
        <MainFeed>
          <SpecificDashboard />
        </MainFeed>
      </main>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
