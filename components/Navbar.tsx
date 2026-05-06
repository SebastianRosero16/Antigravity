import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 glass-panel border-b-0">
      <div className="text-xl font-display tracking-widest font-bold">FRZN</div>
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="p-2 hover:text-ice-blue transition-colors">
          <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
        <button aria-label="Menu" className="p-2 hover:text-ice-blue transition-colors">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
