import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900">
              IRCTC
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
