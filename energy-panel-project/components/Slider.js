"use client";

import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Settings from "../settings";
import Charts from "./Charts";

const SliderSettings = Settings.Slider;

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % SliderSettings.slides.length); //(SliderSettings.slides.length + 1));
    }, SliderSettings.delay || 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="slider">
      <ul>
        {SliderSettings.slides.map((slide, index) => (
          <Slide key={slide.id} slide={slide} current={current} index={index} />
        ))}
        {/** 
         <Slide current={current} index={SliderSettings.slides.length}>
          <Charts />
        </Slide>
         */}
      </ul>
    </div>
  );
};

export default Slider;
