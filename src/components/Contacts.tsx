import React from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const Contacts: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 border-t border-[#E8E2D9]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Связь
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Мастерская и контакты
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Адрес, график и телефон */}
          <div className="lg:col-span-6 space-y-6">
            <FadeIn delay={60}>
              <div className="border border-[#E8E2D9] rounded-2xl p-6 sm:p-8 bg-[#FAF7F2] space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 block mb-1">
                    Адрес мастерской
                  </span>
                  <p className="text-lg sm:text-xl font-serif text-[#1F1F1F]">
                    г. {boutiqueData.city}, {boutiqueData.address}
                  </p>
                  <a
                    href={boutiqueData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-[#7A2E3A] hover:underline underline-offset-4 font-medium"
                  >
                    Построить маршрут →
                  </a>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 block mb-1">
                    График работы
                  </span>
                  <p className="text-base text-[#1F1F1F]/90 font-light">
                    {boutiqueData.workingHours}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9]">
                  <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 block mb-1">
                    Телефон
                  </span>
                  <a
                    href={`tel:${boutiqueData.phoneRaw}`}
                    className="text-lg sm:text-xl font-serif text-[#1F1F1F] hover:text-[#7A2E3A] transition-colors"
                  >
                    {boutiqueData.phone}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Кнопки мессенджеров и соцсетей */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <FadeIn delay={120}>
              <div className="border border-[#E8E2D9] rounded-2xl p-6 sm:p-8 bg-[#FAF7F2] h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#1F1F1F]/50 block mb-2">
                    Мессенджеры
                  </span>
                  <p className="text-sm text-[#1F1F1F]/70 font-light mb-6">
                    Отвечаем за несколько минут, присылаем фотографии свежих поставок и согласовываем сборку букетов
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={boutiqueData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[52px] px-6 rounded-full bg-[#7A2E3A] text-white text-sm font-medium tracking-wide hover:bg-[#63242e] active:scale-[0.99] transition-all inline-flex items-center justify-center text-center"
                  >
                    Написать в WhatsApp
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={boutiqueData.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[52px] px-4 rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] text-sm font-medium tracking-wide hover:border-[#1F1F1F] active:scale-[0.99] transition-all inline-flex items-center justify-center text-center bg-transparent"
                    >
                      Telegram
                    </a>

                    <a
                      href={boutiqueData.vkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-[52px] px-4 rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] text-sm font-medium tracking-wide hover:border-[#1F1F1F] active:scale-[0.99] transition-all inline-flex items-center justify-center text-center bg-transparent"
                    >
                      ВКонтакте
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
