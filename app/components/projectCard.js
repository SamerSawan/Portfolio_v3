"use client";
import TechnicalPoint from './TechnicalPoint';
import React, { useEffect } from 'react';
import './projectCard.css';

const ProjectCard = ({ title, point1, point2, point3, point4, techPoints, href }) => {
  useEffect(() => {
    const cardUpdate = (e) => {
      const $card = e.currentTarget;
      var pos = [e.clientX, e.clientY];
      e.preventDefault();
      if (e.type === 'touchmove') {
        pos = [e.touches[0].clientX, e.touches[0].clientY];
      }
      var dimensions = $card.getBoundingClientRect();
      var l = pos[0] - dimensions.left;
      var t = pos[1] - dimensions.top;
      var h = dimensions.height;
      var w = dimensions.width;
      var px = Math.abs((100 / w) * l);
      var py = Math.abs((100 / h) * t);

      $card.style.setProperty('--pointer-x', `${px}%`);
      $card.style.setProperty('--pointer-y', `${py}%`);
    };

    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', cardUpdate);
      card.addEventListener('touchmove', cardUpdate);

      return () => {
        card.removeEventListener('mousemove', cardUpdate);
        card.removeEventListener('touchmove', cardUpdate);
      };
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  return (
    <a href={href} onClick={handleClick} className="no-underline">
      <div
        className="card group mb-10 relative transition hover:bg-[#2E485C]/50 
        hover:bg-opacity-10 hover:backdrop-blur-sm hover:bg-clip-padding 
        backdrop-filter hover:shadow-xl rounded-lg p-6 mx-auto cursor-pointer"
      >
        <div className="inside">
          <h2 className="group-hover:text-[#8ce9b1] text-slate-200 font-semibold mb-2">{title}</h2>
          <div className="z-10 flex flex-col space-y-2">
            <p>{point1}</p>
            <p>{point2}</p>
            <p>{point3}</p>
            <p>{point4}</p>
          </div>
          <div className="flex flex-row space-x-2 mt-4">
            {techPoints.map((tech, index) => (
              <TechnicalPoint key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
