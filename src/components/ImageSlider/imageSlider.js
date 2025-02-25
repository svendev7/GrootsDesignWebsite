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
    const scrollbarThumbRef = useRef(null);

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
                    objectPosition: `${100 + percentage * 1.035}% center`
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
            
            if (sliderState.mouseDownAt === 0) return;
            setIsDragging(true);
            const mouseDelta = sliderState.mouseDownAt - clientX;
            const maxDelta = window.innerWidth / 1;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = sliderState.prevPercentage + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -97);

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

    const images = Array.from({ length: 10 }, (_, index) => `/images/${index + 1}.jpg`);

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
                    height: '10px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    marginTop: '80px',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    userSelect: 'none'
                }}
            >
                <div
                    ref={scrollbarThumbRef}
                    style={{
                        userSelect: 'none',
                        position: 'absolute',
                        top: 0,
                        left: `${Math.abs(sliderState.percentage)}%`,
                        width: '10%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '5px',
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

