
"use client"

import { useState, useEffect, useRef } from "react"
import "./ReviewsCarousel.css"

const reviews = [
  {
    id: 1,
    text: "Van begin tot eind was het een fijne ervaring om <br /> met GrootsDesign samen te werken. Ilse combineert professionaliteit met een persoonlijke aanpak, waardoor we ons direct op ons gemak voelden. Ze heeft een uniek talent om ruimtes tot leven te brengen met een perfect samenspel van kleuren, materialen en licht. Ons huis voelt eindelijk als een plek waar we helemaal onszelf kunnen zijn!",
    author: "-S A N N E ",
  },
  {
    id: 2,
    text: "Van begin tot eind was het een fijne ervaring om <br /> met GrootsDesign samen te werken. Ilse combineert professionaliteit met een persoonlijke aanpak, waardoor we ons direct op ons gemak voelden. Ze heeft een uniek talent om ruimtes tot leven te brengen met een perfect samenspel van kleuren, materialen en licht. Ons huis voelt eindelijk als een plek waar we helemaal onszelf kunnen zijn!",
    author: "- A N N E M I E K E"
  },
  {
    id: 3,
    text: "Van begin tot eind was het een fijne ervaring om <br /> met GrootsDesign samen te werken. Ilse combineert professionaliteit met een persoonlijke aanpak, waardoor we ons direct op ons gemak voelden. Ze heeft een uniek talent om ruimtes tot leven te brengen met een perfect samenspel van kleuren, materialen en licht. Ons huis voelt eindelijk als een plek waar we helemaal onszelf kunnen zijn!",
    author: "- P E T E R ",
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
        <img src="/images/qoutes.png" width={50} height={50} className="quote-image" />
        <p className="review-text" dangerouslySetInnerHTML={{ __html: reviews[activeReview].text }} />
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

