import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


import './PastEvents.css';


const eventsData = [
  {
    id: 1,
    title: 'CAD 2.0 ',
    image: '/cad1bg.png',
  },
  {
    id: 3,
    title: 'CAD 3.0',
    image: '/CAD2.png', 
  },
  {
    id: 4,
    title: 'CAMPUS QUEST 3.0',
    image: '/CAD3.png', 
  },
];

export default function PastEvents() {
  const [activeEventTitle, setActiveEventTitle] = useState(eventsData[0].title);
  // State to track if the screen is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Dynamic title for Past Events
  useEffect(() => {
    document.title = 'Campus Quest 4.0';
  }, []);

  // Effect to update the state when the window is resized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    const activeSlide = eventsData[swiper.realIndex];
    setActiveEventTitle(activeSlide.title);
  };

  return (
    <div className="past-events-section" style={{ backgroundImage: 'url("/cg.png")' }}>
      {/* Borders are now only rendered on non-mobile screens */}
      {!isMobile && (
        <>
          <img 
            src="/Left Border.png" 
            alt="Left Border" 
            className="absolute top-0 left-0 h-full w-auto object-contain pointer-events-none z-20" 
          />
          <img 
            src="/Right Border.png" 
            alt="Right Border" 
            className="absolute top-0 right-0 h-full w-auto object-contain pointer-events-none z-20" 
          />
        </>
      )}
      
      <img
        src="/ps.png"  // Path relative to the public folder
        alt="Past Events Title"
        className="past-events-title"
      />

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        initialSlide={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {eventsData.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="event-card">
              <div className="event-content">
                {/* Check for image and render the event image */}
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px',  // Rounded corners for the image
                    }}
                  />
                ) : (
                  <div className="other-event">
                    <div className="other-event-logo">{event.logo}</div>
                    <h2 className="other-event-title">{event.title}</h2>
                  </div>
                )}

                {/* Event-specific content */}
                {event.id === 5 ? (
                  <div className="cad-event">
                    <p className="cad-subtitle">{event.subtitle}</p>
                    <h2 className="cad-main-title">{event.mainTitle}</h2>
                    <p className="cad-tagline">{event.tagline}</p>
                    <h3 className="cad-version">{event.version}</h3>
                    <div className="cad-tags">
                      {event.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="other-event">
                    <div className="other-event-logo">{event.logo}</div>
                    <h2 className="other-event-title">{event.title}</h2>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="active-event-button">{activeEventTitle}</div>
    </div>
  );
}
