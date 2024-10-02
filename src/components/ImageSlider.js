import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ImageSliderStyles.css';

const ImageSlider = ({ onImageClick, isFullScreen, selectedImage }) => {
    const trackRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        const track = trackRef.current;

        const handleOnDown = (e) => {
            track.dataset.mouseDownAt = e.clientX;
        };

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = (e) => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage;

            track.animate(
                {
                    transform: `translate(${nextPercentage}%, -50%)`
                },
                { duration: 1200, fill: "forwards" }
            );

            for (const image of track.getElementsByClassName("image")) {
                image.animate(
                    {
                        objectPosition: `${100 + nextPercentage}% center`
                    },
                    { duration: 1200, fill: "forwards" }
                );
            }
        };

        window.onmousedown = (e) => handleOnDown(e);
        window.ontouchstart = (e) => handleOnDown(e.touches[0]);
        window.onmouseup = handleOnUp;
        window.ontouchend = handleOnUp;
        window.onmousemove = (e) => handleOnMove(e);
        window.ontouchmove = (e) => handleOnMove(e.touches[0]);

        return () => {
            window.onmousedown = null;
            window.ontouchstart = null;
            window.onmouseup = null;
            window.ontouchend = null;
            window.onmousemove = null;
            window.ontouchmove = null;
        };
    }, []);

    const handleImageClick = (src, index) => {
        setSelectedIndex(index);
        onImageClick(src);
    };

    return (
        <>
            <div id="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
                {Array.from({ length: 10 }, (_, index) => (
                    <motion.img
                        key={index}
                        layoutId={`image-${index}`}
                        className="image"
                        src={`/images/${index + 1}.jpg`}
                        alt={`Image ${index + 1}`}
                        draggable="false"
                        onClick={() => handleImageClick(`/images/${index + 1}.jpg`, index)}
                    />
                ))}
            </div>
            <AnimatePresence>
                {isFullScreen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                zIndex: 999,
                            }}
                            onClick={() => onImageClick(selectedImage)}
                        />
                        <motion.div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1000,
                                pointerEvents: 'none',
                            }}
                        >
                            <motion.img
                                layoutId={`image-${selectedIndex}`}
                                src={selectedImage}
                                alt="Full Screen"
                                style={{
                                    width: '100vw',
                                    height: '100vh',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageSlider;