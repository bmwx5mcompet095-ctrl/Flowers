import React from 'react';
import { boutiqueData } from '../data';
import { FadeIn } from './FadeIn';

export const DeliveryAndPayment: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 border-t border-[#E8E2D9]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
              Условия
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
              Доставка и оплата
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-12 sm:space-y-16">
          {/* Таблица зон с ценой и сроком */}
          <FadeIn delay={60}>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal mb-5">
                Зоны курьерской доставки
              </h3>

              <div className="border border-[#E8E2D9] rounded-2xl overflow-hidden bg-[#FAF7F2]">
                {/* Заголовок таблицы (скрыт на самых маленьких экранах для читаемости, показан от sm) */}
                <div className="hidden sm:grid sm:grid-cols-12 bg-[#F5F0E8] px-5 py-3.5 text-xs uppercase tracking-wider font-medium text-[#1F1F1F]/60 border-b border-[#E8E2D9]">
                  <div className="sm:col-span-6">Зона доставки</div>
                  <div className="sm:col-span-3">Срок</div>
                  <div className="sm:col-span-3 text-right">Стоимость</div>
                </div>

                <div className="divide-y divide-[#E8E2D9]">
                  {boutiqueData.delivery.zones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:px-5 sm:py-4 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-center text-sm"
                    >
                      <div className="sm:col-span-6 font-medium sm:font-normal text-[#1F1F1F]">
                        {zone.name}
                      </div>
                      <div className="sm:col-span-3 text-[#1F1F1F]/70 text-xs sm:text-sm">
                        {zone.time}
                      </div>
                      <div className="sm:col-span-3 sm:text-right font-medium text-[#1F1F1F]">
                        {typeof zone.price === 'number'
                          ? `${zone.price.toLocaleString('ru-RU')} ₽`
                          : zone.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {boutiqueData.delivery.freeFrom > 0 && (
                <p className="mt-3 text-xs sm:text-sm text-[#1F1F1F]/70 font-light">
                  Бесплатная доставка букетов при заказе от{' '}
                  <span className="font-medium text-[#1F1F1F]">
                    {boutiqueData.delivery.freeFrom.toLocaleString('ru-RU')} ₽
                  </span>
                </p>
              )}
            </div>
          </FadeIn>

          {/* Способы оплаты ниже */}
          <FadeIn delay={120}>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1F1F1F] font-normal mb-4">
                Способы оплаты
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {boutiqueData.paymentMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2] text-sm text-[#1F1F1F]/80 font-light flex items-center"
                  >
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
