import React from 'react';
import { boutiqueData } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E2D9] pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#FAF7F2]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Контакты под конец сайта: адрес и телефон */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D9]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#1F1F1F]/80">
            <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 font-medium">Адрес:</span>
            <span className="font-serif text-base sm:text-lg text-[#1F1F1F]">
              г. {boutiqueData.city}, {boutiqueData.address}
            </span>
            <a
              href={boutiqueData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#7A2E3A] hover:underline font-medium ml-1"
            >
              на карте →
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-sm">
            <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 font-medium">Телефон:</span>
            <a
              href={`tel:${boutiqueData.phoneRaw}`}
              className="font-serif text-lg sm:text-xl text-[#1F1F1F] font-normal hover:text-[#7A2E3A] transition-colors"
            >
              +7 (919) 46-36-040
            </a>
          </div>
        </div>

        {/* Нижняя строка: логотип, соцсети и год */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 text-xs sm:text-sm text-[#1F1F1F]/60">
          <div className="flex items-center gap-2.5 group">
            {boutiqueData.logo && (
              <img
                src={boutiqueData.logo}
                alt=""
                className="w-6 h-6 rounded-full object-cover border border-[#E8E2D9] group-hover:scale-105 transition-transform"
              />
            )}
            <span className="font-serif text-base tracking-wider uppercase text-[#1F1F1F]">
              {boutiqueData.name}
            </span>
          </div>

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
              href={boutiqueData.vkGroupUrl || boutiqueData.vkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#7A2E3A] transition-colors"
            >
              ВКонтакте
            </a>
          </div>

          <span className="font-light">{currentYear}</span>
        </div>
      </div>
    </footer>
  );
};
