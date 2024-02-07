"use client";

import React from "react";

const Slide = ({ slide, current, index, children }) => {
  return (
    <li
      style={{
        display: current === index ? "inline-block" : "none",
      }}
    >
      {children}

      {slide?.image && (
        <img
          src={slide.image}
          alt={slide.title}
          style={{
            width: "100%",
          }}
        />
      )}
    </li>
  );
};

export default Slide;
