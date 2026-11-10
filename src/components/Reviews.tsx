import React from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const Reviews: React.FC = () => {
  if (!boutiqueData.reviews || boutiqueData.reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 border-t border-[#E8E2D9]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Мнения
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Слова гостей
            </h2>
          </div>
        </FadeIn>

        {/* 3 карточки: имя, дата, короткий текст без чужих логотипов и звезд */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {boutiqueData.reviews.map((rev, index) => (
            <FadeIn key={rev.id} delay={index * 80}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2]">
                <p className="text-sm sm:text-[15px] text-[#1F1F1F]/80 font-light leading-relaxed mb-6">
                  «{rev.text}»
                </p>
                <div className="pt-4 border-t border-[#E8E2D9]/70 flex items-center justify-between">
                  <span className="font-serif text-base text-[#1F1F1F] font-normal">
                    {rev.name}
                  </span>
                  <span className="text-xs text-[#1F1F1F]/40 font-light">
                    {rev.date}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
