import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComparisonSlider.css";

export default function Main() {
  const [sliderPos, setSliderPos] = useState(0);

  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };

  const Content = ({ id }) => (
    <div className="content-wrapper" id={id}>
      <nav>
        <div className="logo">Your website</div>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Let me transform your website</h1>
        <p>I can achieve the design of your dreams.</p>
        <button className="cta-btn">Button</button>
      </main>
    </div>
  );

  return (
    <div>
      <h1 className="fw-bold mb-4 pt-5 mt-5 text-center">
        I provide something most people don't.
      </h1>
      <div className="page-wrapper">
        <div className="comparison-container">
          <div className="layer plain-layer">
            <Content id="no-css" />
          </div>

          <div
            className="layer styled-layer"
            style={{ width: `${sliderPos}%` }}
          >
            <Content id="with-css" />
          </div>

          <div className="slider-line-visual" style={{ left: `${sliderPos}%` }}>
            <div className="slider-handle">↔</div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSliderChange}
            className="slider-input"
          />
        </div>
      </div>
    </div>
  );
}
