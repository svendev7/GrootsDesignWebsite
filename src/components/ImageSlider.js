import React, { useEffect, useRef, useState } from 'react';
import '../styles/ImageSliderStyles.css';

const ImageSlider = ({ onImageClick, isFullScreen, selectedImage }) => {
    const trackRef = useRef(null);
    const [growingImage, setGrowingImage] = useState(null);

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
        setGrowingImage(index);
        setTimeout(() => {
            setGrowingImage(null);
            onImageClick(src);
        }, 500); 
    };

    const handleFullScreenMouseDown = (e) => {
        onImageClick(selectedImage);
    };

   return (
        <>
            <div id="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
                {Array.from({ length: 10 }, (_, index) => (
                    <img
                        key={index}
                        className={`image ${growingImage === index ? 'growing' : ''}`}
                        src={`/images/${index + 1}.jpg`}
                        alt={`Image ${index + 1}`}
                        draggable="false"
                        onClick={() => handleImageClick(`/images/${index + 1}.jpg`, index)}
                    />
                ))}
            </div>
            {isFullScreen && (
                <img
                    className={`full-screen-image ${isFullScreen ? 'active' : ''}`}
                    src={selectedImage}
                    alt="Full Screen"
                    onClick={() => onImageClick(selectedImage)}
                />
            )}
        </>
    );
};

export default ImageSlider;
