import React from 'react';

// Placeholder logos - in a real app, you'd import these as SVGs or images
const logos = [
  { name: 'CityTransit', logo: 'CITY TRANSIT' },
  { name: 'MetroLink', logo: 'METRO LINK' },
  { name: 'County Connect', logo: 'COUNTY CONNECT' },
  { name: 'UrbanGo', logo: 'URBAN GO' },
  { name: 'NextGen Transport', logo: 'NEXTGEN TRANSPORT' },
  { name: 'Public Way', logo: 'PUBLIC WAY' },
];

const TrustedBy = () => {
  return (
    <section className="relative bg-white pt-20 sm:pt-32">
      {/* Gradient mask at the top */}
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-transparent to-white"
        style={{ transform: 'translateY(-100%)' }}
      ></div>
      <div className="relative container mx-auto px-4">

        <div className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Trusted by transit leaders worldwide
            </h2>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {logos.map((company) => (
                <div key={company.name} className="flex justify-center items-center p-4">
                  <p className="text-xl font-semibold text-gray-500">{company.logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
