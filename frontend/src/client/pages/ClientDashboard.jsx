import React from 'react';
import { DocumentTextIcon, CreditCardIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Contract Status', stat: 'Active', icon: DocumentTextIcon },
  { name: 'Active Services', stat: '3 Routes', icon: ChartBarIcon },
  { name: 'Next Invoice', stat: '$12,500 on Aug 1, 2025', icon: CreditCardIcon },
];

const invoices = [
  { id: 'INV-00123', date: 'July 1, 2025', amount: '$12,500', status: 'Paid' },
  { id: 'INV-00122', date: 'June 1, 2025', amount: '$12,500', status: 'Paid' },
  { id: 'INV-00121', date: 'May 1, 2025', amount: '$11,800', status: 'Paid' },
];

const ClientDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
      <p className="mt-2 text-gray-600">Manage your account, billing, and view service performance.</p>

      {/* Stats Cards */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd className="text-lg font-medium text-gray-900">{item.stat}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Billing History Table */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Billing History</h2>
            <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All Invoices
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Download</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {invoice.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" className="text-indigo-600 hover:text-indigo-900">Download</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
