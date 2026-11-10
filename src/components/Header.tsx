import React, { useState, useEffect } from 'react';
import { boutiqueData } from '../data';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D9] py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-2xl sm:text-3xl tracking-[0.08em] uppercase text-[#1F1F1F] hover:opacity-80 transition-opacity"
        >
          {boutiqueData.name}
        </a>

        <a
          href="#catalog"
          onClick={handleOrderClick}
          className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#7A2E3A] text-white text-sm font-medium tracking-wide hover:bg-[#63242e] active:scale-[0.98] transition-all min-w-[44px]"
        >
          Заказать
        </a>
      </div>
    </header>
  );
};
