import React from "react";
import "./loader.scss";
const Loader = ({ loader }) => {
  const { value, message } = loader;
  return value ? (
    <div className="loader">{message || "Loading... Please wait!"}</div>
  ) : null;
};

export default Loader;

/* <div className="loader-container">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
                    </filter>
                </defs>
            </svg>
        </div> */
