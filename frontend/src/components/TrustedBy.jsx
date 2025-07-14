import React from 'react';

const logos = ['City Transit', 'MetroLink', 'UrbanGo', 'NextGen Transport', 'Public-Ways', 'SchoolBus Co.'];

const TrustedBy = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Powering the world’s top transit authorities</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <span className="text-xl font-semibold text-gray-400">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
