"use client";
import TechnicalPoint from './technicalPoint';
import React, { useEffect } from 'react';
import './projectCard.css';

const ProjectCard = ({ title, point1, techPoints, href }) => {
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
      card.addEventListener('touchmove', cardUpdate, { passive: true });
  
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
    <div className="lg:card group mb-10 transition bg-[#2E485C]/10 
    bg-opacity-10 backdrop-blur-sm bg-clip-padding 
    backdrop-filter shadow-xl rounded-lg p-6 mx-auto cursor-pointer sm:pointer-events-none lg:pointer-events-auto">
        <div className="lg:inside">
            <h2 className="group-hover:text-[#8ce9b1] text-slate-200 font-semibold mb-2">{title}</h2>
            <div className="flex flex-col space-y-2">
            <p>{point1}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
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
