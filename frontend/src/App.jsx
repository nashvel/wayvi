import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Developers from './pages/Developers';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import SuperadminDashboard from './superadmin/pages/SuperadminDashboard.jsx';
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import ClientDashboard from './client/pages/ClientDashboard.jsx';
import DriverDashboard from './driver/pages/DriverDashboard.jsx';
import RiderDashboard from './riders/pages/RiderDashboard.jsx';
import UsersManagement from './users/pages/UsersManagement.jsx';

// Placeholder component for pages to be created
const Placeholder = ({ title }) => (
  <div className="container mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="text-gray-600 mt-4">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="developers" element={<Developers />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="resources" element={<Resources />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="superadmin" element={<SuperadminDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="client" element={<ClientDashboard />} />
          <Route path="driver" element={<DriverDashboard />} />
          <Route path="riders" element={<RiderDashboard />} />
          <Route path="users" element={<UsersManagement />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
