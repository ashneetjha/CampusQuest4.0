import React from "react";

const Timeline = () => {
  return (
    <div className="w-full bg-black flex items-center justify-center p-4 sm:p-8">
      {/* =================================================================
          DESKTOP VIEW
          ================================================================= */}
      <div className="hidden lg:block w-full">
        <div className="w-full flex flex-col items-center justify-center bg-cover bg-center relative overflow-hidden py-16" 
              style={{ backgroundImage: "url('/background_Timeline.png')" }}>
          
          {/* Side scrollers and corner brackets for decoration */}
          <img src="/scroller.png" alt="side scroller" className="absolute left-0 top-0 h-full w-10 object-cover z-20 select-none pointer-events-none" />
          <img src="/scroller.png" alt="side scroller" className="absolute right-0 top-0 h-full w-10 object-cover z-20 select-none pointer-events-none scale-x-[-1]" />
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-yellow-600 text-3xl select-none">⎾</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-600 text-3xl select-none">⏋</div>

          <img src="/TimelineTitle.png" alt="Timeline" className="mb-8 h-24 object-contain" />

          {/* Main timeline container with removed decorations */}
          <div 
            className="relative w-full max-w-5xl h-[450px] flex items-center justify-center mx-auto" 
            style={{ 
              border: '19px solid', 
              borderRadius: '100px', 
              borderImage: 'linear-gradient(135deg, #785338 0%, #FFD67D 50%, #593D00 100%) 1', 
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)' 
            }}
          >
            <img src="/box_main.png" alt="main box" className="absolute w-full h-full object-cover rounded-xl shadow-2xl" style={{ zIndex: 1 }} />
            <div className="absolute w-full h-full rounded-xl" style={{ background: "linear-gradient(135deg, #785338 0%, #FFD67D 50%, #593D00 100%)", opacity: 0.7, filter: "blur(12px)", zIndex: 2 }} />
            
            {/* Screws are in place */}
            <img src="/screws.png" alt="corner screw 1" className="absolute left-3 top-3 w-10 h-10 z-10" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.2) contrast(1.1)' }} />
            <img src="/screws.png" alt="corner screw 2" className="absolute right-3 top-3 w-10 h-10 z-10" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.2) contrast(1.1)' }} />
            <img src="/screws.png" alt="corner screw 3" className="absolute left-3 bottom-3 w-10 h-10 z-10" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.2) contrast(1.1)' }} />
            <img src="/screws.png" alt="corner screw 4" className="absolute right-3 bottom-3 w-10 h-10 z-10" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.2) contrast(1.1)' }} />
            
            {/* Your new image for the timeline - size has been adjusted to prevent cutting */}
            <img 
              src="/TimelineMainImage.png" 
              alt="Timeline Main Image" 
              className="absolute inset-0 w-full h-full object-contain px-1"
              style={{ zIndex: 5, pointerEvents: 'none' }}
            />

            <img src="/corner_badge.png" alt="corner badge" style={{ position: 'absolute', width: '120px', height: '62px', top: '10px', right: '10px', transform: 'rotate(15deg)', mixBlendMode: 'multiply', zIndex: 15, pointerEvents: 'none', opacity: 0.9 }} />
          </div>
        </div>
      </div>

      {/* =================================================================
          NEW MOBILE VIEW
          ================================================================= */}
      <div className="lg:hidden w-full bg-cover bg-center flex flex-col items-center justify-start p-4 py-8 min-h-screen" style={{ backgroundImage: "url('/background_Timeline.png')" }}>
        <img src="/TimelineTitle.png" alt="Timeline" className="mb-8 h-16 object-contain flex-shrink-0" />
        
        {/* Mobile Timeline Board - FIXED: Corrected the image file extension */}
        <img
          src="/TimelineMainImageMobile.jpg"
          alt="Timeline Board"
          className="w-full max-w-sm h-auto object-contain"
        />

      </div>
    </div>
  );
};

export default Timeline;
