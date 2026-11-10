import React from 'react';
import { boutiqueData } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E2D9] py-6 sm:py-8 bg-[#FAF7F2]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-y-3 text-xs sm:text-sm text-[#1F1F1F]/60">
          <span className="font-serif text-base tracking-wider uppercase text-[#1F1F1F]">
            {boutiqueData.name}
          </span>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={boutiqueData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7A2E3A] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={boutiqueData.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7A2E3A] transition-colors"
            >
              Telegram
            </a>
            <a
              href={boutiqueData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7A2E3A] transition-colors"
            >
              Instagram
            </a>
          </div>

          <span className="font-light">{currentYear}</span>
        </div>
      </div>
    </footer>
  );
};
