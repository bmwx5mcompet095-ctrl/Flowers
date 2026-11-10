import React, { useState, useEffect } from 'react';
import { boutiqueData } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Детекция виртуальной клавиатуры на мобильных устройствах через visualViewport
    const handleResize = () => {
      if (window.visualViewport) {
        const isShrunk = window.visualViewport.height < window.innerHeight * 0.75;
        setIsKeyboardOpen(isShrunk);
      }
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      setIsKeyboardOpen(false);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
    }
    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
      }
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  if (isKeyboardOpen) {
    return null;
  }

  return (
    <aside aria-label="Быстрая связь">
      <a
        href={boutiqueData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="fixed z-30 bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] w-[52px] h-[52px] rounded-full bg-[#7A2E3A] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(122,46,58,0.25)] hover:bg-[#63242e] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#7A2E3A] focus:ring-offset-2"
      >
        {/* Минималистичная SVG-иконка WhatsApp без эмодзи */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.83C9.36 7.83 9.08 7.89 8.84 8.15C8.61 8.4 7.94 9.03 7.94 10.3C7.94 11.57 8.87 12.79 9 12.96C9.13 13.13 10.8 15.71 13.37 16.81C15.5 17.73 15.94 17.55 16.39 17.51C16.85 17.47 17.87 16.91 18.08 16.31C18.29 15.72 18.29 15.21 18.23 15.11C18.16 15 17.99 14.94 17.74 14.81C17.48 14.69 16.22 14.07 15.99 13.98C15.75 13.9 15.58 13.86 15.41 14.11C15.24 14.37 14.76 14.94 14.61 15.11C14.46 15.28 14.31 15.3 14.06 15.17C13.8 15.05 12.98 14.78 12.01 13.92C11.25 13.24 10.74 12.4 10.59 12.15C10.45 11.89 10.58 11.75 10.71 11.63C10.82 11.52 10.96 11.34 11.09 11.19C11.21 11.04 11.26 10.94 11.34 10.77C11.43 10.6 11.38 10.45 11.32 10.32C11.26 10.2 10.77 9 10.57 8.5C10.37 8.03 10.16 8.09 10 8.09C9.85 8.08 9.69 8.08 9.53 8.08" />
        </svg>
      </a>
    </aside>
  );
};
