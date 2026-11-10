import React from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Стандарты бутика
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Почему выбирают нас
            </h2>
          </div>
        </FadeIn>

        {/* 3-4 преимущества в виде строк с тонкой линией, без иконок-картинок */}
        <div className="border-t border-[#E8E2D9]">
          {boutiqueData.advantages.map((adv, index) => (
            <FadeIn key={adv.id} delay={index * 60}>
              <div className="py-7 sm:py-9 border-b border-[#E8E2D9] grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                <div className="md:col-span-5 lg:col-span-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal leading-snug">
                    {adv.title}
                  </h3>
                </div>
                <div className="md:col-span-7 lg:col-span-8">
                  <p className="text-sm sm:text-base text-[#1F1F1F]/70 font-light leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
