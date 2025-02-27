"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
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
    const scrollbarThumbRef = useRef(null);
    const [maxPercentage, setMaxPercentage] = useState(-10);
    const [posMulti, setPosMulti] = useState(0.1);
    const imageRefs = useRef([]);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isTapping, setIsTapping] = useState(false);
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
    
    useEffect(() => {
        // Add touch-action CSS property dynamically
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.style.touchAction = 'pan-x';
        }
    }, []);
    useEffect(() => {
        const updateVariablesBasedOnScreenWidth = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            let maxPercentage = 0;
            let posMulti = 1;
            const isFullscreen = document.fullscreenElement !== null;

            if (width >= 2400) {
                maxPercentage = -78;
                posMulti = 1.15;
            } else if (width >= 2350) {
                maxPercentage = -84;
                posMulti = 1.1;
            } else if (width >= 2300) {
                maxPercentage = -86;
                posMulti = 1.05;
            } else if (width >= 2250) {
                maxPercentage = -90;
                posMulti = 1.02;
            } else if (width >= 2200) {
                maxPercentage = -94;
                posMulti = 0.99;
            } else if (width >= 2150) {
                maxPercentage = -99;
                posMulti = 0.95;
            } else if (width >= 2100) {
                maxPercentage = -104;
                posMulti = 0.925;
            } else if (width >= 2050) {
                maxPercentage = -109;
                posMulti = 0.91;
            } else if (width >= 2000) {
                maxPercentage = -114;
                posMulti = 0.86;
            } else if (width >= 1950) {
                maxPercentage = -119;
                posMulti = 0.82;
            } else if (width >= 1900) {
                maxPercentage = -125;
                posMulti = 0.8;
            } else if (width >= 1850) {
                maxPercentage = -131;
                posMulti = 0.76;
            } else if (width >= 1800) {
                maxPercentage = -137;
                posMulti = 0.73;
            } else if (width >= 1750) {
                maxPercentage = -144;
                posMulti = 0.68;
            } else if (width >= 1700) {
                maxPercentage = -152;
                posMulti = 0.66;
            } else if (width >= 1650) {
                maxPercentage = -160;
                posMulti = 0.63;
            } else if (width >= 1600) {
                maxPercentage = -168;
                posMulti = 0.59;
            } else if (width >= 1550) {
                maxPercentage = -176;
                posMulti = 0.57;
            } else if (width >= 1500) {
                maxPercentage = -184;
                posMulti = 0.53;
            } else if (width >= 1450) {
                maxPercentage = -195;
                posMulti = 0.50;
            } else if (width >= 1400) {
                maxPercentage = -206;
                posMulti = 0.48;
            } else if (width >= 1350) {
                maxPercentage = -216;
                posMulti = 0.44;
            } else if (width >= 1300) {
                maxPercentage = -229;
                posMulti = 0.43;
            } else if (width >= 1250) {
                maxPercentage = -242;
                posMulti = 0.41;
            } else if (width >= 1200) {
                maxPercentage = -256;
                posMulti = 0.39;
            } else if (width >= 1150) {
                maxPercentage = -271;
                posMulti = 0.37;
            } else if (width >= 1100) {
                maxPercentage = -292;
                posMulti = 0.35;
            } else if (width >= 1050) {
                maxPercentage = -311;
                posMulti = 0.33;
            } else if (width >= 1000) {
                maxPercentage = -328;
                posMulti = 0.32;
            } else if (width >= 950) {
                maxPercentage = -350;
                posMulti = 0.29;
            } else if (width >= 900) {
                maxPercentage = -373;
                posMulti = 0.28;
            } else if (width >= 850) {
                maxPercentage = -398;
                posMulti = 0.28;
            } else if (width >= 800) {
                maxPercentage = -427;
                posMulti = 0.25;
            } else if (width >= 750) {
                maxPercentage = -294;
                posMulti = 0.33;
            } else if (width >= 700) {
                maxPercentage = -320;
                posMulti = 0.3;
            } else if (width >= 650) {
                maxPercentage = -347;
                posMulti = 0.28;
            } else if (width >= 600) {
                maxPercentage = -385;
                posMulti = 0.26;
            } else if (width >= 550) {
                maxPercentage = -425;
                posMulti = 0.23;
            } else if (width >= 500) {
                maxPercentage = -475;
                posMulti = 0.22;
            } else if (width >= 450) {
                maxPercentage = -535;
                posMulti = 0.205;
            } else if (width == 430) {
                maxPercentage = -565;
                posMulti = 0.2;    
            } else if (width >= 400) {
                maxPercentage = -610;
                posMulti = 0.18;
            } else if (width >= 350) {
                maxPercentage = -707;
                posMulti = 0.15;
            } else if (width >= 300) {
                maxPercentage = -835;
                posMulti = 0.14;
            }
            // i swear to god I FUCKING HATE THIS WHOLE FUCKING COMPONENT it WILL not FUCKING resize this is my only solution and its FUCKING SHIT FUCK this
            if (height >= 1080) {
                maxPercentage;
            } else if (width <= 1000) {
                maxPercentage;
            } else {
                maxPercentage;
            }
    
            setMaxPercentage(maxPercentage);
            setPosMulti(posMulti);
        };
    
        updateVariablesBasedOnScreenWidth();
    
        window.addEventListener("resize", updateVariablesBasedOnScreenWidth);
        document.addEventListener("fullscreenchange", updateVariablesBasedOnScreenWidth);

        return () => {
            window.removeEventListener("resize", updateVariablesBasedOnScreenWidth);
            document.removeEventListener("fullscreenchange", updateVariablesBasedOnScreenWidth);
        };
    }, []);
    
    
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
                transform: `translate(${percentage}%, 0%)`
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
            if (e.touches) {
                e.preventDefault();
            }
            if (sliderState.mouseDownAt === 0) return;
            setIsDragging(true);
            const mouseDelta = sliderState.mouseDownAt - clientX;
            const maxDelta = window.innerWidth / 1;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = sliderState.prevPercentage + percentage;

        
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
        const thumbWidth = thumb.offsetWidth;
        const clickPosition = (e.clientX - scrollbarRect.left - thumbWidth/2) / (scrollbarRect.width - thumbWidth);
        
        // Inverted percentage calculation for touch
        const percentage = Math.max(Math.min((1 - clickPosition) * maxPercentage, 0), maxPercentage);

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
    const thumb = scrollbarThumbRef.current;
    if (!scrollbar || !thumb) return;

    const scrollbarRect = scrollbar.getBoundingClientRect();
    const thumbWidth = thumb.offsetWidth;
    const position = (e.clientX - scrollbarRect.left - thumbWidth/2) / (scrollbarRect.width - thumbWidth);
    const percentage = Math.max(Math.min(position * maxPercentage, 0), maxPercentage);

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
    };

    const handleFullScreenClose = () => {
        setIsFullScreen(false);
        setSelectedImage(null);
        setImageTransitionState(prev => ({
            ...prev,
            rect: null
        }));
    };
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
        setIsDragging(false);
    };
    const handleTouchEnd = (e) => {
        const deltaX = Math.abs(e.changedTouches[0].clientX - touchStartX);
        if (deltaX < 5) { // Considered a tap
            handleImageClick(e, null, null);
        }
    };
    const handleScrollbarTouchStart = (e) => {
        if (isFullScreen) return;
        setIsDraggingScrollbar(true);
        const touch = e.touches[0];
        handleScrollbarMouseDown(touch);
    };

    const handleScrollbarTouchMove = (e) => {
        if (!isDraggingScrollbar || isFullScreen) return;
        const touch = e.touches[0];
        handleScrollbarMouseMove(touch);
    };
    const images = Array.from({ length: 9 }, (_, index) => `/images/${index + 1}.jpg`);

    return (
        <LayoutGroup>
            <div className="slider-container">
            <h1 style={{
                textAlign: 'center',
                fontFamily: 'Arial, sans-serif',
                color: 'white',
                margin: '0 0 50px 0',
                width: '100%',
                fontSize: '2.5rem',
                fontWeight: 500,
                letterSpacing: '1px'
            }}>
                Projecten
            </h1>
            <div 
                id="image-track" 
                ref={trackRef} 
                style={{ 
                    transform: `translate(${sliderState.percentage}%, 0%)`,
                    opacity: isFullScreen ? 0 : 1,
                    transition: 'opacity 0.4s ease-in-out',
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
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            cursor: 'pointer',
                            willChange: 'transform',
                            touchAction: 'pan-x'
                        }}
                        ref={(el) => (imageRefs.current[index] = el)}

                    />
                ))}
            </div>
            
            <div 
                className="image-scrollbar" 
                ref={scrollbarRef}
                onMouseDown={handleScrollbarMouseDown}
                    onTouchStart={handleScrollbarTouchStart}
                    onTouchMove={handleScrollbarTouchMove}
                    onTouchEnd={handleScrollbarMouseUp}
                style={{
                    position: 'relative',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    marginTop: '40px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    touchAction: 'none'
                }}
            >
                <div
                    ref={scrollbarThumbRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: `${(Math.abs(sliderState.percentage) / Math.abs(maxPercentage)) * 88}%`,
                        width: `${100 / (images.length - 1)}%`,
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                />
            </div>
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

