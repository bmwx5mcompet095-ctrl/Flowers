import React, { useState, useEffect, useRef } from 'react';
import { boutiqueData } from '../data';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Определение прокрутки от верха
      setIsScrolled(currentScrollY > 20);

      // Скрывать шапку при прокрутке вниз и показывать при прокрутке вверх
      if (currentScrollY > 80 && currentScrollY > lastScrollY + 4) {
        // Листаем вниз — плавно прячем
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 4 || currentScrollY <= 40) {
        // Листаем вверх или вернулись наверх — плавно показываем
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D9] py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer"
        >
          {boutiqueData.logo && (
            <img
              src={boutiqueData.logo}
              alt={boutiqueData.name}
              className="w-8 h-8 rounded-full object-cover border border-[#E8E2D9] group-hover:scale-105 transition-transform duration-200 shadow-xs"
            />
          )}
          <span className="font-serif text-lg sm:text-2xl tracking-[0.06em] uppercase text-[#1F1F1F] group-hover:opacity-80 transition-opacity">
            <span className="hidden sm:inline">{boutiqueData.name}</span>
            <span className="sm:hidden">NB Flower</span>
          </span>
        </a>

        <a
          href="#catalog"
          onClick={handleOrderClick}
          className="inline-flex items-center justify-center h-10 sm:h-11 px-5 sm:px-6 rounded-full bg-[#7A2E3A] text-white text-xs sm:text-sm font-medium tracking-wide hover:bg-[#63242e] active:scale-95 transition-all duration-200 shadow-xs"
        >
          Заказать
        </a>
      </div>
    </header>
  );
};
