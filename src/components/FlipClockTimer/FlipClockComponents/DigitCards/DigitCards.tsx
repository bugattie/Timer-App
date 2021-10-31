import React from "react";
import "./../../FlipTimer.css";

export const AnimatedCard = ({ animation, digit }: any) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

// function component
export const StaticCard = ({ position, digit }: any) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};
