"use client";

import React, { useEffect, useRef } from "react";

const Slide = ({ slide, current, index, children }) => {
  const vidRef = useRef(null);

  useEffect(() => {
    if (vidRef.current) {
      if (current !== index) {
        vidRef.current.pause();
      } else {
        vidRef.current.currentTime = 0;
        vidRef.current.play();
        vidRef.muted = true;
      }
    }
  }, [vidRef, current]);

  return (
    <li
      style={{
        display: current === index ? "inline-block" : "none",
      }}
    >
      {children}
      {slide?.video && (
        <video
          className="video"
          ref={vidRef}
          src={slide?.video}
          width="100%"
          height="100%"
          autoPlay
          playsInline
          muted
        ></video>
      )}
      {slide?.image && <img src={slide.image} alt={slide.title} />}
    </li>
  );
};

export default Slide;
