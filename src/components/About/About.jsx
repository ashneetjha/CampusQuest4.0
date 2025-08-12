import React, { useState, useEffect } from 'react';

const About = () => {
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Effect to update the state when the window is resized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the correct background image based on screen size
  const backgroundImage = isMobile ? '/mobile-background.png' : '/bg.png';

  return (
    // The main section now has a relative position to contain the borders and background
    <section id="about" className="relative text-center py-16 px-4 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Background Image - visible on both desktop and mobile */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          // FIXED: The background image is now dynamic
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Semi-transparent overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Borders are now only rendered on non-mobile screens */}
      {!isMobile && (
        <>
          {/* Left Border Image */}
          <img
            src="/Left Border.png"
            alt="Left Border"
            className="absolute top-0 left-0 h-full w-auto object-contain pointer-events-none z-20"
          />

          {/* Right Border Image */}
          <img
            src="/Right Border.png"
            alt="Right Border"
            className="absolute top-0 right-0 h-full w-auto object-contain pointer-events-none z-20"
          />
        </>
      )}

      {/* Content container with relative positioning to appear above background */}
      <div className="relative z-30">
        {/* This is the image you provided for the title. */}
        <img
          src="/AboutTitle.png" // This path works if the image is in the 'public' folder.
          alt="About Campus Quest"
          className="mx-auto mb-8 w-1/2 max-w-xs"
        />

        {/* This div contains the main descriptive text for the section. */}
        <div className="max-w-3xl mx-auto text-lg text-gray-300">
          <p className="mb-4">
            Gear up for an unforgettable intellectual adventure with Campus Quest 4.0! If you're someone who enjoys the thrill of a treasure hunt, cracking through code and solving puzzles, this is the perfect event to showcase your skills.
          </p>
          <p>
            Campus Quest 4.0 offers a one-of-a-kind platform for college students to put their programming and problem-solving skills to the test in a competitive and dynamic online environment. Participants will navigate through a series of challenging levels, each applying core programming concepts, reasoning creatively, and off-course solving puzzles just like Sherlock Holmes.
          </p>
        </div>

        {/* "Rules" Button - FIXED: Wrapped in an anchor tag to download the PDF */}
        <a href="/rule book.pdf" download="CampusQuest_RuleBook.pdf">
          <button className="mt-12 px-8 py-3 bg-transparent border-2 border-golden rounded-lg text-golden font-semibold hover:bg-golden hover:text-black transition-colors duration-300">
            RULES
          </button>
        </a>
      </div>

    </section>
  );
};

export default About;
