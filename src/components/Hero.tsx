import React from 'react';
import { boutiqueData } from '../data';
import { BouquetImage } from './BouquetImage';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  const handleScrollToCatalog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Текстовая колонка */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeIn>
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium">
                  {boutiqueData.hero.badge}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-[#1F1F1F] font-normal leading-[1.08] tracking-tight mb-4 sm:mb-6">
                {boutiqueData.hero.headingPrefix} {boutiqueData.city}
              </h1>

              <p className="text-base sm:text-[17px] text-[#1F1F1F]/80 leading-relaxed font-light mb-7 truncate max-w-xl">
                {boutiqueData.slogan}
              </p>

              {/* 3 коротких факта в строку под заголовком */}
              <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-[#1F1F1F]/70 mb-8 sm:mb-10 py-3 border-y border-[#E8E2D9]">
                {boutiqueData.hero.facts.map((fact, index) => (
                  <React.Fragment key={index}>
                    <span className="whitespace-nowrap font-medium text-[#1F1F1F]/90">
                      {fact}
                    </span>
                    {index < boutiqueData.hero.facts.length - 1 && (
                      <span className="mx-3 text-[#E8E2D9] select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#catalog"
                  onClick={handleScrollToCatalog}
                  className="h-[52px] px-8 rounded-full bg-[#7A2E3A] text-white text-[15px] font-medium tracking-wide hover:bg-[#63242e] active:scale-[0.99] transition-all inline-flex items-center justify-center text-center"
                >
                  Выбрать букет
                </a>
                <a
                  href={boutiqueData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[52px] px-7 rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] text-[15px] font-medium tracking-wide hover:border-[#1F1F1F] active:scale-[0.99] transition-all inline-flex items-center justify-center text-center bg-transparent"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Большое фото справа (на десктопе) или ниже (на мобильном) */}
          <div className="lg:col-span-5">
            <FadeIn delay={100}>
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <BouquetImage
                  src={boutiqueData.hero.photo}
                  alt={`Цветочная композиция бутика ${boutiqueData.name}`}
                  aspectRatio="aspect-[4/5]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
