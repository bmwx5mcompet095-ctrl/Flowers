import React from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const HowToOrder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 border-t border-[#E8E2D9]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Простой заказ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Как заказать
            </h2>
          </div>
        </FadeIn>

        {/* 3 шага в одну линию */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {boutiqueData.orderSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 80}>
              <div className="flex flex-col h-full pt-4 border-t border-[#1F1F1F]/20 md:border-t-2 md:border-[#1F1F1F]/15">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#1F1F1F]/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
