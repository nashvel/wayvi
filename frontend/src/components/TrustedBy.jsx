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
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow-300 rounded-2xl mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>
        </div>
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
