"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "About", label: "About" },
  { id: "Experience", label: "Experience" },
  { id: "Projects", label: "Projects" },
  { id: "Art", label: "Art" },
];

const Navbar = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    const stars = gsap.utils.toArray(".star-nav");

    if (!Array.isArray(sections) || !Array.isArray(stars)) return;

    // random twinkle delays
    stars.forEach((star) => {
      const dot = star.querySelector(".dot");
      if (dot) {
        dot.style.setProperty("--twinkle-delay", `${Math.random() * 2.5}s`);
      }
    });

    // active state
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          stars.forEach((star) => star.classList.remove("active"));
          stars[i].classList.add("active");
        },
        onEnterBack: () => {
          stars.forEach((star) => star.classList.remove("active"));
          stars[i].classList.add("active");
        },
      });
    });
  }, []);

  return (
    <nav className="mt-14 mb-10 flex flex-col items-center gap-10 px-6 py-4 z-50">
      {navItems.map((item, idx) => (
        <a
          href={`#${item.id}`}
          key={item.id}
          className="star-nav group relative flex flex-row items-center gap-3"
          style={{
            transform: `translateX(${idx % 2 === 0 ? -10 : 10}px)`, // wider stagger
          }}
        >

          <span className="dot relative block rounded-full bg-white opacity-70"></span>

          <span
            className="nav-label relative opacity-0 text-slate-200 text-sm 
                       transform -translate-x-4 transition-all duration-500 
                       group-hover:opacity-100 group-hover:translate-x-0"
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
