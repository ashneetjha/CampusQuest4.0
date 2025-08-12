import React from 'react';

const PrizePool = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Coin background - Exact from original */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/coin_bg_poster_page.png')`,
        }}
      />
      
      {/* Golden border frame - Exact from original */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/border for all bg.png')`,
        }}
      />
      
      {/* Main content container - Exact layout from original */}
      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        {/* Top section - Prize Pool text (mobile) / Left side (desktop) */}
        {/* FIXED: Changed justify-start to justify-center and items-start to items-center */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
          <div className="text-center w-full">
            
            {/* The text-based H1 titles have been replaced with the image below */}
            {/* FIXED: Changed md:mx-0 to md:mx-auto to center on desktop */}
            <img
              src="/PrizePoolTitle.png" // Assumes the image is in the 'public' folder
              alt="Prize Pool"
              className="mx-auto mb-8 w-3/4 max-w-md" // Centers on all screen sizes
            />

          </div>
        </div>

        {/* Bottom section - Poster (mobile) / Right side (desktop) */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative">
          <div className="h-full w-full md:w-auto relative">
            {/* Main poster image - Exact from original */}
            <img 
              src="/poster-brick wall with nails.png"
              alt="Prize Pool Poster"
              className="w-full h-[650px] md:h-full md:w-auto object-cover opacity-80"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
              }}
            />
            {/* Top blur overlay for mobile only - Exact from original */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent md:hidden"></div>
          </div>
          
          {/* 10x Stamp Overlay - Exact positioning from original */}
          <div className="absolute top-1/4 right-1/4 transform -rotate-12" style={{ 
            top: 'clamp(calc(25% + 180px), calc(25% + 15vw), calc(25% + 200px))', 
            right: 'clamp(calc(25% + 10px), calc(25% + 2vw), calc(25% + 30px))' 
          }}>
            <img 
              src="/10x stamp.png"
              alt="10x Stamp"
              className="w-16 h-16 md:w-32 md:h-32 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
