"use client";
import React, { useEffect } from "react";
import "../styles/dot.css";

const Dot = () => {
 

  return (
    <>
    <div className="container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="border"></div>
        <div className="border"></div>
    </div>

    <svg>
        <defs>
            <filter id='goo'>
                <feGaussianBlur in='SourceGraphic'
                stdDeviation='10'/>
                <feColorMatrix in='name' mode='matrix'
                values="1 0 0 0 0
                0 1 0 0 0 
                0 0 1 0 0
                0 0 0 30 -15"/>
                <feBlend in='SourceGraphic'/>
            
            </filter>
        </defs>
    </svg>
    </>
  );
};

export default Dot;

