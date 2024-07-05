"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  useEffect(() => {
    let activeItem = null;

    gsap.utils.toArray(".section").forEach((section, i) => {
      const listItem = gsap.utils.toArray("li")[i];

      ScrollTrigger.create({
        trigger: section,
        start: () => `top ${window.innerHeight * 0.2}px`,
        end: () => `bottom ${window.innerHeight * 0.2}px`,
        onEnter: () => {
          if (activeItem) {
            activeItem.classList.remove("!bg-slate-400");
          }
          activeItem = listItem;
          activeItem.classList.add("!bg-slate-400");
        },
        onLeave: () => {
          if (activeItem === listItem) {
            activeItem.classList.remove("!bg-slate-400");
            activeItem = null;
          }
        },
        onEnterBack: () => {
          if (activeItem) {
            activeItem.classList.remove("!bg-slate-400");
          }
          activeItem = listItem;
          activeItem.classList.add("!bg-slate-400"); 
        },
        onLeaveBack: () => {
          if (activeItem === listItem) {
            activeItem.classList.remove("!bg-slate-400");
            activeItem = null;
          }
        }
      });
    });

  }, []);

  return (
    <div className="relative flex flex-col justify-center text-center items-center p-4">
      <ul className="group flex w-10 flex-col gap-4 border-2 border-slate-600 items-center rounded-2xl p-4 cursor-pointer transition-all ease-out duration-100 hover:w-32">
        <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-slate-500 transition-all">
          <a href="#About" className="opacity-0 text-slate-200 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">About</a>
        </li>
        <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-slate-500 transition-all">
          <a href="#Experience" className="opacity-0 text-slate-200 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">Experience</a>
        </li>
        <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-slate-500 transition-all">
          <a href="#Projects" className="opacity-0 text-slate-200 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">Projects</a>
        </li>
        <li className="list-none w-4 h-4 bg-slate-600 group-hover:w-24 group-hover:duration-100 group-hover:h-6 rounded-full hover:bg-slate-500 transition-all">
          <a href="#Art" className="opacity-0 text-slate-200 group-hover:opacity-100 transition-opacity duration-0 group-hover:duration-100">Art</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
