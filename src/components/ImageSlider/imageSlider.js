"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import './imageSliderStyles.css';
const ImageSlider = ({ startFullScreen = false, initialImage = null }) => {
    const trackRef = useRef(null);
    const scrollbarRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(startFullScreen);
    const [selectedImage, setSelectedImage] = useState(initialImage);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [opacityDelayed, setOpacityDelayed] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const scrollbarThumbRef = useRef(null);
    const [maxPercentage, setMaxPercentage] = useState(-80);
    const [posMulti, setPosMulti] = useState(1.1);
    const [imageTransitionState, setImageTransitionState] = useState({
        rect: startFullScreen ? {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        } : null,
        objectPosition: '100% center',
        scale: 1
    });

    const [sliderState, setSliderState] = useState({
        mouseDownAt: 0,
        prevPercentage: 0,
        percentage: 0
    });

    const imageRefs = useRef([]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isFullScreen) {
            const timer = setTimeout(() => {
                setOpacityDelayed(false);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setOpacityDelayed(true);
        }
    }, [isFullScreen]);

    useEffect(() => {
        const track = trackRef.current;
        const scrollbar = scrollbarRef.current;
        
        if (!track || !scrollbar) return;

        const handleScroll = () => {
            const scrollPercentage = (scrollbar.scrollRight / scrollbar.scrollWidth) * 100;
            setSliderState((prevState) => ({
                ...prevState,
                percentage: -scrollPercentage
            }));
        };

        scrollbar.addEventListener('scroll', handleScroll);

        return () => {
            scrollbar.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const updateTrackPosition = (percentage) => {
        const track = trackRef.current;
        if (!track) return;
        
        track.animate(
            {
                transform: `translate(${percentage}%, -50%)`
            },
            { 
                duration: 600, 
                fill: 'forwards',
                easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)' 
            }
        );

        const images = track.getElementsByClassName("image");
        Array.from(images).forEach((image) => {
            image.animate(
                {
                    objectPosition: `${100 + percentage * posMulti}% center`
                },
                { 
                    duration: 600, 
                    fill: 'forwards',
                    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                }
            );
        });
    };
    useEffect(() => {
        const widthConfig = [
            { minWidth: 2400, maxPercentage: -78, posMulti: 1.15 },
            { minWidth: 2350, maxPercentage: -84, posMulti: 1.1 },
            { minWidth: 2300, maxPercentage: -86, posMulti: 1.05 },
            { minWidth: 2250, maxPercentage: -90, posMulti: 1.02 },
            { minWidth: 2200, maxPercentage: -94, posMulti: 0.99 },
            { minWidth: 2150, maxPercentage: -99, posMulti: 0.95 },
            { minWidth: 2100, maxPercentage: -104, posMulti: 0.925 },
            { minWidth: 2050, maxPercentage: -109, posMulti: 0.91 },
            { minWidth: 2000, maxPercentage: -114, posMulti: 0.86 },
            { minWidth: 1950, maxPercentage: -119, posMulti: 0.82 },
            { minWidth: 1900, maxPercentage: -126, posMulti: 0.8 },
            { minWidth: 1850, maxPercentage: -131, posMulti: 0.76 },
            { minWidth: 1800, maxPercentage: -137, posMulti: 0.73 },
            { minWidth: 1750, maxPercentage: -144, posMulti: 0.68 },
            { minWidth: 1700, maxPercentage: -152, posMulti: 0.66 },
            { minWidth: 1650, maxPercentage: -160, posMulti: 0.63 },
            { minWidth: 1600, maxPercentage: -168, posMulti: 0.59 },
            { minWidth: 1550, maxPercentage: -176, posMulti: 0.57 },
            { minWidth: 1500, maxPercentage: -184, posMulti: 0.53 },
            { minWidth: 1450, maxPercentage: -195, posMulti: 0.51 },
            { minWidth: 1400, maxPercentage: -206, posMulti: 0.485 },
            { minWidth: 1350, maxPercentage: -216, posMulti: 0.46 },
            { minWidth: 1300, maxPercentage: -229, posMulti: 0.44 },
            { minWidth: 1250, maxPercentage: -242, posMulti: 0.42 },
            { minWidth: 1200, maxPercentage: -256, posMulti: 0.4 },
            { minWidth: 1150, maxPercentage: -271, posMulti: 0.39 },
            { minWidth: 1100, maxPercentage: -287, posMulti: 0.38 },
            { minWidth: 1050, maxPercentage: -295, posMulti: 0.36 },
            { minWidth: 1000, maxPercentage: -297, posMulti: 0.35 },
            { minWidth: 950, maxPercentage: -294, posMulti: 0.35 },
            { minWidth: 900, maxPercentage: -294, posMulti: 0.35 },
            { minWidth: 850, maxPercentage: -294, posMulti: 0.35 },
            { minWidth: 800, maxPercentage: -294, posMulti: 0.34 },
            { minWidth: 750, maxPercentage: -294, posMulti: 0.33 },
            { minWidth: 700, maxPercentage: -385, posMulti: 0.3 },
            { minWidth: 650, maxPercentage: -385, posMulti: 0.3 },
            { minWidth: 600, maxPercentage: -385, posMulti: 0.26 },
            { minWidth: 550, maxPercentage: -385, posMulti: 0.23 },
            { minWidth: 500, maxPercentage: -478, posMulti: 0.22 },
            { minWidth: 450, maxPercentage: -478, posMulti: 0.2 },
            { minWidth: 400, maxPercentage: -478, posMulti: 0.2 },
            { minWidth: 350, maxPercentage: -478, posMulti: 0.2 },
            { minWidth: 300, maxPercentage: -478, posMulti: 0.2 },
        ];
    
        const updateVariablesBasedOnScreenWidth = () => {
            const width = window.innerWidth;
            const config = widthConfig.find((entry) => width >= entry.minWidth) || {
                maxPercentage: -166,
                posMulti: 3.25,
            };
            setMaxPercentage(config.maxPercentage);
            setPosMulti(config.posMulti);
        };
    
        // Call the function initially
        updateVariablesBasedOnScreenWidth();
    
        // Add resize listener to update values dynamically
        window.addEventListener('resize', updateVariablesBasedOnScreenWidth);
    
        // Cleanup
        return () => {
            window.removeEventListener('resize', updateVariablesBasedOnScreenWidth);
        };
    }, []);


    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleOnDown = (e) => {
            if (isFullScreen || isDraggingScrollbar) return;
        
            const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
            setSliderState(prev => ({
                ...prev,
                mouseDownAt: clientX
            }));
            setIsDragging(false); 
        };

        const handleOnUp = () => {
            if (isFullScreen || isDraggingScrollbar) return;
            
            setSliderState(prev => ({
                ...prev,
                mouseDownAt: 0,
                prevPercentage: prev.percentage
            }));
        };

        const handleOnMove = (e) => {
            if (isFullScreen || isDraggingScrollbar) return;
            
            const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
            
            if (sliderState.mouseDownAt === 0) return;
            setIsDragging(true);
            const mouseDelta = sliderState.mouseDownAt - clientX;
            const maxDelta = window.innerWidth / 1;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = sliderState.prevPercentage + percentage;

            // 2400
            // 2350
            // 2300
            // 2250
            // 2200
            // 2150
            // 2100
            // 2050
            // 2000
            // 1950
            // 1900
            // 1850
            // 1800
            // 1750
            // 1700
            // 1650
            // 1600
            // 1550
            // 1500
            // 1450
            // 1400
            // 1350
            // 1300
            // 1250
            // 1200
            // 1150
            // 1100
            // 1050
            // 1000
            // 950
            // 900
            // 850
            // 800
            // 750
            // 700
            // 650
            // 600
            // 550
            // 500
            // 450
            // 400
            // 350
            // 300
            
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), maxPercentage);
            setSliderState(prev => ({
                ...prev,
                percentage: nextPercentage
            }));

            updateTrackPosition(nextPercentage);
        };

        window.addEventListener('mousedown', handleOnDown);
        window.addEventListener('mousemove', handleOnMove);
        window.addEventListener('mouseup', handleOnUp);
        
        window.addEventListener('touchstart', handleOnDown);
        window.addEventListener('touchmove', handleOnMove);
        window.addEventListener('touchend', handleOnUp);

        return () => {
            window.removeEventListener('mousedown', handleOnDown);
            window.removeEventListener('mousemove', handleOnMove);
            window.removeEventListener('mouseup', handleOnUp);
            
            window.removeEventListener('touchstart', handleOnDown);
            window.removeEventListener('touchmove', handleOnMove);
            window.removeEventListener('touchend', handleOnUp);
        };
    }, [isFullScreen, sliderState, isDraggingScrollbar]);

    const handleScrollbarMouseDown = (e) => {
        if (isFullScreen) return;
        
        setIsDraggingScrollbar(true);
        const scrollbar = scrollbarRef.current;
        const thumb = scrollbarThumbRef.current;
        
        if (!scrollbar || !thumb) return;

        const scrollbarRect = scrollbar.getBoundingClientRect();
        const clickPosition = (e.clientX - scrollbarRect.left) / scrollbarRect.width;
        const percentage = Math.max(Math.min(clickPosition * -100, 0), -97);

        setSliderState(prev => ({
            ...prev,
            percentage: percentage,
            prevPercentage: percentage
        }));

        updateTrackPosition(percentage);
    };

    const handleScrollbarMouseMove = (e) => {
        if (!isDraggingScrollbar || isFullScreen) return;

        const scrollbar = scrollbarRef.current;
        if (!scrollbar) return;

        const scrollbarRect = scrollbar.getBoundingClientRect();
        const position = (e.clientX - scrollbarRect.left) / scrollbarRect.width;
        const percentage = Math.max(Math.min(position * -100, 0), -97);

        setSliderState(prev => ({
            ...prev,
            percentage: percentage,
            prevPercentage: percentage
        }));

        updateTrackPosition(percentage);
    };

    const handleScrollbarMouseUp = () => {
        setIsDraggingScrollbar(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleScrollbarMouseMove);
        window.addEventListener('mouseup', handleScrollbarMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleScrollbarMouseMove);
            window.removeEventListener('mouseup', handleScrollbarMouseUp);
        };
    }, [isDraggingScrollbar]);

    const handleImageClick = (e, src, index) => {
        if (isDragging) return;
        // window.location.href = index;
    };

    const handleFullScreenClose = () => {
        setIsFullScreen(false);
        setSelectedImage(null);
        setImageTransitionState(prev => ({
            ...prev,
            rect: null
        }));
    };

    const images = Array.from({ length: 9 }, (_, index) => `/images/${index + 1}.jpg`);

    return (
        <LayoutGroup>
            <div 
                id="image-track" 
                ref={trackRef} 
                style={{ 
                    transform: `translate(${sliderState.percentage}%, -50%)`,
                    opacity: isFullScreen ? 0 : 1,
                    transition: 'opacity 0.4s ease-in-out',
                    width: '100%',
                    maxWidth: '100%'
                }}
            >
                {images.map((src, index) => (
                    <motion.img
                        layoutId={`image-${index}`}
                        key={src}
                        className="image"
                        src={src}
                        alt={`Image ${index + 1}`}
                        draggable="false"
                        onClick={(e) => handleImageClick(e, src, index)}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            cursor: 'pointer',
                            willChange: 'transform'
                        }}
                        ref={(el) => (imageRefs.current[index] = el)}
                    />
                ))}
            </div>
            
            <div 
                className="image-scrollbar" 
                ref={scrollbarRef}
                onMouseDown={handleScrollbarMouseDown}
                style={{
                    position: 'relative',
                    width: '100%',
                    top: '-35px',
                    height: isMobile ? '15px' : '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    marginTop: isMobile ? '40px' : '80px',
                    cursor: 'pointer',
                    borderRadius: isMobile ? '5px' : '10px',
                }}
            >
                <div
                    ref={scrollbarThumbRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: `${Math.abs(sliderState.percentage / (images.length - 2) * 37.15) * 0.2}%`,
                        width: isMobile ? '20%' : '10%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: isMobile ? '5px' : '10px',
                        cursor: 'pointer'
                    }}
                />
            </div>

            <AnimatePresence>
                {isFullScreen && imageTransitionState.rect && (
                    <motion.div
                        initial={{
                            position: 'fixed',
                            top: imageTransitionState.rect.top,
                            left: imageTransitionState.rect.left,
                            width: imageTransitionState.rect.width,
                            height: imageTransitionState.rect.height,
                            scale: imageTransitionState.scale,
                            backgroundColor: 'black',
                            zIndex: 1000,
                            overflow: 'hidden'
                        }}
                        animate={{
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            scale: 1
                        }}
                        exit={{
                            top: imageTransitionState.rect.top,
                            left: imageTransitionState.rect.left,
                            width: imageTransitionState.rect.width,
                            height: imageTransitionState.rect.height,
                            scale: imageTransitionState.scale
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                        onClick={handleFullScreenClose}
                    >
                        <motion.img
                            src={selectedImage}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: imageTransitionState.objectPosition,
                                transform: `scale(${imageTransitionState.scale})`,
                                transformOrigin: 'center center'
                            }}
                            alt="Full screen view"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </LayoutGroup>
    );
};

export default ImageSlider;

