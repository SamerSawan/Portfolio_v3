import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const StarrySky = () => {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  const starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };

  const shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [
        { value: "150px" },
        { value: "0px" }
      ],
      translateX: 350
    });
  };

  const randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };

  const getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(vw)).toString();
  };

  const getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(vh)).toString();
  };

  useEffect(() => {
    setVw(Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    setVh(Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    
    starryNight();
    shootingStars();
  }, []); // Empty dependency array ensures this runs only once on mount

  const num = 60;

  return (
    <div id="App" className="z-0 pointer-events-none">
      <svg id="sky" className="w-screen h-screen fixed overflow-hidden m-0 p-0">
        {[...Array(num)].map((x, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(60)].map((x, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
