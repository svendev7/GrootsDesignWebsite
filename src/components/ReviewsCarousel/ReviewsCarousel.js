
"use client"

import { useState, useEffect, useRef } from "react"
import "./ReviewsCarousel.css"

const reviews = [
  {
    id: 1,
    text: "Ilse heeft ons geweldig geholpen met het opnieuw inrichten van onze woonkamer. Van salontafel tot muurkleur: alles werd uitgedacht. Zeer tevreden!",
    author: "-Danny",
  },
  {
    id: 2,
    text: "Superblij met Ilse haar expertise! Zelf zie ik door de bomen het bos niet meer in woonwinkels en showrooms. We hadden hulp nodig bij de styling van ons huis en Ilse heeft ons daar fantastisch in begeleid.",
    author: "-Naomi",
  },
  {
    id: 3,
    text: "Van begin tot eind was het een fijne ervaring om met GrootsDesign samen te werken. Ilse combineert professionaliteit met een persoonlijke aanpak, waardoor we ons direct op ons gemak voelden. Ze heeft een uniek talent om ruimtes tot leven te brengen met een perfect samenspel van kleuren, materialen en licht. Ons huis voelt eindelijk als een plek waar we helemaal onszelf kunnen zijn!",
    author: "-Sanne & Bastiaan",
  },
]

const ReviewsCarousel = () => {
  const [activeReview, setActiveReview] = useState(0)
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => setActiveReview((prevIndex) => (prevIndex + 1) % reviews.length), 5000)

    return () => {
      resetTimeout()
    }
  }, [activeReview, resetTimeout]) 

  const handleRectClick = (index) => {
    setActiveReview(index)
  }
  const handlePrev = () => {
    setActiveReview(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
    resetTimeout();
  };

  const handleNext = () => {
    setActiveReview(prev => (prev + 1) % reviews.length);
    resetTimeout();
  };
  return (
    <div
      className="reviews-carousel"
      onMouseEnter={resetTimeout}
      onMouseLeave={() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() => setActiveReview((prevIndex) => (prevIndex + 1) % reviews.length), 3500)
      }}
    >
      <div className="review-container">
        
      <div className="arrow-nav arrow-left" onClick={handlePrev}>❮</div>
      <div className="arrow-nav arrow-right" onClick={handleNext}>❯</div>

      <p className="review-text">
          {/* <img src="/images/qoutes.png" width={50} height={50} className="quote-image" /> */}
          {reviews[activeReview].text}
        </p>
        <p className="review-author" dangerouslySetInnerHTML={{ __html: reviews[activeReview].author }} />

      </div>
      <div className="review-rects">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`rect ${index === activeReview ? "active" : ""}`}
            onClick={() => handleRectClick(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ReviewsCarousel

