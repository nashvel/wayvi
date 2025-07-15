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
import AdminDashboard from './admin/pages/AdminDashboard.jsx';
import ClientDashboard from './client/pages/ClientDashboard.jsx';
import DriverDashboard from './driver/pages/DriverDashboard.jsx';
import RiderDashboard from './riders/pages/RiderDashboard.jsx';
import UsersManagement from './users/pages/UsersManagement.jsx';
import SuperadminHome from './superadmin/pages/Home.jsx';
import Explore from './superadmin/pages/Explore';
import Notifications from './superadmin/pages/Notifications';
import TripsToday from './superadmin/pages/TripsToday';
import Profile from './superadmin/pages/Profile';
import More from './superadmin/pages/More';

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
          <Route index element={<SuperadminHome />} />
          <Route path="explore" element={<Explore />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Placeholder title="Messages" />} />
          <Route path="trips-today" element={<TripsToday />} />
          <Route path="profile" element={<Profile />} />
          <Route path="more" element={<More />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
