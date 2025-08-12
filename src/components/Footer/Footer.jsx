import React, { useEffect } from 'react';

const Footer = ({ onNavigate }) => {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/coding-ninjas-club-srm/posts/?feedView=all", imgSrc: "/linkedinicon.png" },
    { name: "Instagram", href: "https://www.instagram.com/srm_cn/", imgSrc: "/instagramicon.png" },
  ];

  // Dynamic title for Footer
  useEffect(() => {
    document.title = 'Campus Quest 4.0 - Join the Mystery';
  }, []);

  return (
    <div 
      className="relative w-full bg-cover bg-center bg-no-repeat font-serif text-white antialiased py-16"
      style={{ backgroundImage: "url('/footer-bg.png')" }}
    >
      {/* Dark overlay - Exact from original */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Border overlay - Exact from original */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/border.jpg')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Main Content - Centered without navbar */}
        <main className="flex flex-col items-center justify-center text-center py-10">
          <div className="flex flex-col items-center mb-8" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            {/* 10X Club Logo - FIXED: Increased size */}
            <img src="/10xlogo.png" alt="10X Club Logo" className="w-24 sm:w-32 md:w-40 h-auto mb-4" />
            
            {/* Campus Quest Logo with Stamp - Exact from original */}
            <div className="relative">
              <img 
                src="/CAMPUS-QUEST.png" 
                alt="Campus Quest Logo" 
                className="w-full max-w-md md:max-w-lg lg:max-w-2xl h-auto" 
              />
              <img 
                src="/10x-stamp.png" 
                alt="10X Stamp" 
                className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-90 rotate-12 pointer-events-none"
              />
            </div>
          </div>

          {/* Register Button - FIXED: Updated link */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf58AyoFSQuUo1bEBK7PgUMEhF6cvg1iVvpyiQYopF0cmpb-Q/viewform?usp=dialog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img src="/RegisterLogo.png" alt="Register" className="h-14 sm:h-16 w-auto" />
          </a>
        </main>

        {/* Footer Social Links - Only social icons */}
        <footer className="w-full py-6">
          <div className="flex items-center justify-center space-x-8 sm:space-x-10">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="group flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/50 border-2 border-gray-600/50 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.6)]"
              >
                <div className="group-hover:scale-110 transition-transform duration-300 p-2">
                  <img src={social.imgSrc} alt={`${social.name} icon`} className="w-full h-full object-contain" />
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
