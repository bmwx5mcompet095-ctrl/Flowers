import React, { useState } from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([boutiqueData.faq[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 border-t border-[#E8E2D9]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Полезно знать
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Частые вопросы
            </h2>
            <p className="mt-2 text-sm text-[#1F1F1F]/60 max-w-md font-light">
              Ответы на популярные вопросы о сборке, бережной доставке и уходе за букетами
            </p>
          </div>
        </FadeIn>

        {/* Аккордеон с плавной CSS-анимацией раскрытия */}
        <div className="border-t border-[#E8E2D9] divide-y divide-[#E8E2D9]">
          {boutiqueData.faq.map((item, index) => {
            const isOpen = openIds.includes(item.id);

            return (
              <FadeIn key={item.id} delay={index * 50}>
                <div className="group">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none min-h-[52px]"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#1F1F1F] font-normal pr-4 group-hover:text-[#7A2E3A] transition-colors">
                      {item.question}
                    </span>

                    {/* Иконка переключения с мягким вращением */}
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center text-[#1F1F1F]/70 group-hover:border-[#7A2E3A] group-hover:text-[#7A2E3A] transition-all duration-300 ${
                        isOpen ? 'bg-[#7A2E3A] text-white border-[#7A2E3A] rotate-45' : 'bg-transparent rotate-0'
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.75]"
                        viewBox="0 0 12 12"
                      >
                        <line x1="6" y1="1" x2="6" y2="11" />
                        <line x1="1" y1="6" x2="11" y2="6" />
                      </svg>
                    </span>
                  </button>

                  {/* Анимированный контейнер ответа через CSS Grid */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-sm sm:text-base text-[#1F1F1F]/75 font-light leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
