import React, { useEffect, useState } from "react";
import GooeyNav from "../components/ui/GooeyNav";

const NavBar: React.FC = () => {
  const navItems = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((sec) => sec === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 } // 50% of section visible
    );

    sections.forEach((section) => section && observer.observe(section));

    return () => {
      sections.forEach((section) => section && observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="container mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold text-white cursor-pointer tracking-wide hover:text-blue-400 transition-colors"
        >
          tanike<span className="text-blue-400">.</span>dev
        </a>

        <div className="text-lg hidden md:flex items-center gap-6">
          <GooeyNav
            items={navItems}
            animationTime={600}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            initialActiveIndex={activeIndex ?? -1} // dynamic highlight
          />
        </div>

        <a
          id="contact-button"
          href="#contact"
          className="text-lg ml-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded transition-all shadow-md cursor-pointer inline-block"
        >
          contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
