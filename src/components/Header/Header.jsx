import React, { useState, useEffect } from 'react';

// Helper component for navigation links
const NavLink = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`font-kanit text-lg md:text-xl text-white hover:text-[#ffcd84] transition-colors duration-300 ${className}`}
  >
    {children}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // URLs for assets from your working project
  const backgroundUrl2 = 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-31/EufuTGcN3v.png';
  const backgroundUrl3 = 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-31/E7mouu3Xqu.png';
  const presentsLogoUrl = 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-31/DSfCrNjTJ4.png';
  const backgroundUrl4 = 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-31/0G9W93nodD.png';
  const backgroundUrl5 = 'https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-31/3S7faOAiaa.png';

  return (
    <>
      {/* Main container - Ensures it takes at least the full screen height but can grow */}
      <div className="main-container bg-[#0a0602] min-h-screen w-full relative text-white flex flex-col">

        {/* Background Image Layers */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundUrl2})` }} />
        <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundUrl3})` }} />
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-cover bg-no-repeat bg-bottom z-0" style={{ backgroundImage: `url(${backgroundUrl4})` }} />
        <div className="absolute bottom-0 right-0 w-full h-3/4 bg-cover bg-no-repeat bg-bottom opacity-15 z-0" style={{ backgroundImage: `url(${backgroundUrl5})` }} />
        
        {/* New Sherlock Holmes image positioned on the top left */}
        <img 
          src="/sh.png" 
          alt="Sherlock Holmes" 
          className="absolute top-1/4 left-0 h-1/2 md:h-2/3 w-auto object-contain pointer-events-none z-10" 
        />

        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col flex-grow">

          {/* Header Section */}
          <header className="w-full p-4 md:p-6 flex-shrink-0">
            <div className="max-w-screen-2xl mx-auto flex justify-center items-center relative">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
                <NavLink href="#header" className="text-[#ffcd84]">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#timeline">Timeline</NavLink>
                <NavLink href="#prize-pool">Prize Pool</NavLink>
                <NavLink href="#sponsors">Sponsors</NavLink>
                <NavLink href="#past-events">Past Events</NavLink>
              </nav>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden absolute right-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[rgba(10,6,2,0.95)] p-6 absolute top-[72px] left-0 w-full z-50">
              <nav className="flex flex-col items-center space-y-6">
                <NavLink href="#header" className="text-[#ffcd84] text-xl">Home</NavLink>
                <NavLink href="#about" className="text-xl">About</NavLink>
                <NavLink href="#timeline" className="text-xl">Timeline</NavLink>
                <NavLink href="#prize-pool" className="text-xl">Prize Pool</NavLink>
                <NavLink href="#sponsors" className="text-xl">Sponsors</NavLink>
                <NavLink href="#past-events" className="text-xl">Past Events</NavLink>
              </nav>
            </div>
          )}

          {/* Main Content Area - FIXED: Simplified flex structure and added padding */}
          <main className="flex-grow flex flex-col items-center justify-between text-center p-4">
            
            {/* Top content block for spacing */}
            <div></div>

            {/* Centered Content Block */}
            <div className="w-full">
              <div className="mb-4 md:mb-8">
                <img src={presentsLogoUrl} alt="10x Club" className="w-28 md:w-36 lg:w-40 mx-auto" />
                <p className="font-kanit text-2xl md:text-3xl lg:text-4xl font-extralight text-white tracking-tighter -mt-2">presents</p>
              </div>

              {/* Campus Quest Logo */}
              <div className="relative w-full flex flex-col items-center justify-center">
                <div className="relative z-20">
                  <img 
                    src="/CAMPUS-QUEST.png" 
                    alt="Campus Quest Logo" 
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                    style={{ 
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Registration Section */}
            <div className="w-full flex flex-col items-center justify-center pt-8 pb-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf58AyoFSQuUo1bEBK7PgUMEhF6cvg1iVvpyiQYopF0cmpb-Q/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-52 h-16 flex items-center justify-center bg-[rgba(0,0,0,0.18)] rounded-full border border-[#ffe2b7] shadow-[0_0_26px_0_rgba(171,122,54,0.79)] hover:bg-black/30 transition-all duration-300 group">
                  <span className="font-kanit text-2xl font-semibold text-[#ffcd84] tracking-widest group-hover:scale-105 transition-transform">REGISTER</span>
                </button>
              </a>
              <p className="font-kanit font-light text-white/80 mt-4 text-sm md:text-base px-4">
                *this event is exclusive for 1<sup>st</sup> year students only
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Header;
