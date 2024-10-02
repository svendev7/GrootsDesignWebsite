"use client"

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
  "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
]

export default function ImageTrack() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [mouseDownAt, setMouseDownAt] = useState("0")
  const [prevPercentage, setPrevPercentage] = useState(0)
  const [percentage, setPercentage] = useState(0)

  const handleOnDown = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) {
      setMouseDownAt(e.touches[0].clientX.toString())
    } else {
      setMouseDownAt(e.clientX.toString())
    }
  }

  const handleOnUp = () => {
    setMouseDownAt("0")
    setPrevPercentage(percentage)
  }

  const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (mouseDownAt === "0") return

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const mouseDelta = parseFloat(mouseDownAt) - clientX
    const maxDelta = window.innerWidth / 2

    const nextPercentageUnconstrained = (mouseDelta / maxDelta) * -100 + prevPercentage
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

    setPercentage(nextPercentage)

    if (trackRef.current) {
      trackRef.current.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
      )

      for (const image of Array.from(trackRef.current.getElementsByClassName("image") as HTMLCollectionOf<HTMLImageElement>)) {
        image.animate(
          { objectPosition: `${100 + nextPercentage}% center` },
          { duration: 1200, fill: "forwards" }
        )
      }
    }
  }

  useEffect(() => {
    const handleMouseUp = () => handleOnUp()
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [percentage])

  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-[4vmin] absolute left-1/2 top-1/2 -translate-y-1/2 select-none"
        style={{
          transform: 'translate(0%, -50%)',
          width: `${images.length * 40 + (images.length - 1) * 4}vmin`,
        }}
        onMouseDown={handleOnDown}
        onTouchStart={handleOnDown}
        onMouseMove={handleOnMove}
        onTouchMove={handleOnMove}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Track image ${index + 1}`}
            className="image w-[40vmin] h-[56vmin] object-cover object-[100%_center]"
            draggable="false"
          />
        ))}
      </div>
    </div>
  )
}