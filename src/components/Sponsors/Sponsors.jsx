import React, { useEffect, useState } from "react";

const SponsorsPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Background assets
    const backgroundImage = isMobile
        ? "/mobile-background.png"
        : "/backgroundimg.png";
    const newspaperImage = isMobile
        ? "/mobile-newspaper.png"
        : "/Newspaper-bg.png";

    const newspaperBgSize = isMobile ? "100% 90%" : "90% 140%";

    return (
        <div className="relative w-full min-h-screen">
            {/* Desktop Side Borders */}
            {!isMobile && (
                <>
                    <img
                        src="/Left Border.png"
                        alt="Left Border"
                        className="absolute left-0 top-0 h-full z-10"
                    />
                    <img
                        src="/Right Border.png"
                        alt="Right Border"
                        className="absolute right-0 top-0 h-full z-10"
                    />
                </>
            )}

            {/* Background */}
            <div
                className={`bg-center bg-no-repeat bg-cover w-full ${isMobile ? "h-screen" : "min-h-screen"
                    } ${!isMobile ? "flex items-center justify-center" : ""}`}
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className={`max-w-screen-2xl w-full ${isMobile ? "px-2 h-full flex flex-col" : "px-2 md:px-8 text-center"}`}>
                    {/* Heading */}
                    <div className={`${isMobile ? "mb-4 mt-8 flex-shrink-0" : "mb-6 md:mb-8"}`}>
                        {isMobile ? (
                            <div className="flex justify-center">
                                <img
                                    src="/sponsors_heading.png"
                                    alt="Sponsors Heading"
                                    className="h-16 object-contain"
                                />
                            </div>
                        ) : (
                            <img
                                src="/SponsorsTitleDesktop.png"
                                alt="Sponsors"
                                className="mx-auto h-24 object-contain"
                            />
                        )}
                    </div>

                    {/* Newspaper Section */}
                    <div
                        className={`relative bg-center rounded-2xl shadow-2xl ${isMobile ? "py-8 px-4 flex-1 flex flex-col justify-center" : "py-20 px-6 md:px-32"}`}
                        style={{
                            backgroundImage: `url('${newspaperImage}')`,
                            backgroundSize: newspaperBgSize,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Newspaper Header */}
                        <h2
                            className={`font-unifraktur ${isMobile ? 'text-3xl text-center mt-5' : 'text-3xl md:text-5xl'} text-black mb-2 md:mb-4 ${isMobile ? 'mt-0' : '-mt-4'} leading-none`}
                        >
                            The Campus
                            {isMobile ? <br /> : " "}
                            Quest Gazette
                        </h2>
                        <p
                            className={`font-simonetta text-black ${isMobile ? 'text-xs mb-4 text-center' : 'text-[0.4rem] md:text-sm'}`}
                            style={
                                isMobile
                                    ? { marginTop: "-0.3rem" }
                                    : { marginTop: "1.75rem" }
                            }
                        >
                            Published by 10X Investigative Committee
                        </p>

                        {/* Desktop Sponsors */}
                        {!isMobile && (
                            <div className="flex justify-center items-center gap-10 mt-10">
                                <div className="w-48 h-72 bg-black/40 border border-gray-300 backdrop-blur-md" />
                                <div className="w-48 h-72 bg-black/40 border border-gray-300 backdrop-blur-md" />
                                <div className="w-48 h-72 bg-black/40 border border-gray-300 backdrop-blur-md" />
                            </div>
                        )}

                        {/* Mobile Sponsors - FIXED: Adjusted positioning to be responsive */}
                        {isMobile && (
                            <div className="relative w-full flex-1">
                                <div className="absolute top-[18%] left-[8%] w-[40%] h-[25%] bg-white/70 border border-black flex flex-col items-center justify-center p-2 shadow">
                                    <img
                                        src="/10xlogo.png"
                                        alt="10X Logo"
                                        className="w-10 object-contain mb-1"
                                    />
                                    <p className="text-[0.5rem] font-simonetta text-black">
                                        10X
                                    </p>
                                </div>
                                <div className="absolute top-[48%] right-[8%] w-[40%] h-[25%] bg-white/70 border border-black flex items-center justify-center shadow">
                                    <p className="text-[0.5rem] font-simonetta text-black">
                                        Logo 2
                                    </p>
                                </div>
                                <div className="absolute bottom-[5%] left-[8%] w-[40%] h-[25%] bg-white/70 border border-black flex items-center justify-center shadow">
                                    <p className="text-[0.5rem] font-simonetta text-black">
                                        Logo 3
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Mobile Bottom Border */}
                {isMobile && (
                    <img
                        src="/mobile-border.png"
                        alt="Mobile Bottom Border"
                        className="absolute bottom-0 left-0 w-full z-20"
                        style={{ pointerEvents: "none" }}
                    />
                )}
            </div>
        </div>
    );
};

export default SponsorsPage;
