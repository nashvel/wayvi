import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const roles = [
  { name: 'Superadmin', path: '/dashboard/superadmin' },
  { name: 'Admin', path: '/dashboard/admin' },
  { name: 'Client', path: '/dashboard/client' },
  { name: 'Driver', path: '/dashboard/driver' },
  { name: 'Rider', path: '/dashboard/rider' },
  { name: 'Users', path: '/dashboard/users' },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-full fixed top-0 left-0 p-4 flex flex-col">
      <Link to="/" className="text-2xl font-bold text-white mb-8">Wayvi</Link>
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Roles</h2>
      <nav>
        <ul>
          {roles.map(role => (
            <li key={role.name}>
              <Link to={role.path} className="block p-2 rounded-md hover:bg-gray-700 transition-colors">
                {role.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-8 ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
