import React from 'react';
import SuperHeader from '../components/SuperHeader';

const Developers = () => {
  return (
    <div className="bg-white">
      <SuperHeader 
        title="Developer Hub"
        subtitle="This project showcases a modern, responsive web application using cutting-edge technologies."
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
                <p className="text-gray-600 mt-2">React, Vite, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">UI/UX</h3>
                <p className="text-gray-600 mt-2">Framer Motion, Headless UI</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Routing</h3>
                <p className="text-gray-600 mt-2">React Router</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <a href="https://dev-nacht.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 transition-colors">
                  Developer: Nacht
                </a>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                This bus tracking UI is a demonstration of skills in modern frontend development, from component architecture to subtle animations that enhance usability. Visit the portfolio to see more work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developers;
