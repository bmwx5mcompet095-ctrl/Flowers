import React, { useState, useMemo } from 'react';
import { boutiqueData, Bouquet } from '../data';
import { BouquetImage } from './BouquetImage';
import { FadeIn } from './FadeIn';

export const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    boutiqueData.categories[0]
  );

  const filteredBouquets = useMemo(() => {
    if (
      selectedCategory === 'Все букеты' ||
      selectedCategory === 'Все' ||
      !selectedCategory
    ) {
      return boutiqueData.bouquets;
    }
    return boutiqueData.bouquets.filter(
      (b) => b.category === selectedCategory
    );
  }, [selectedCategory]);

  const getOrderMessage = (bouquet: Bouquet) => {
    const priceText =
      typeof bouquet.price === 'number'
        ? ` за ${bouquet.price.toLocaleString('ru-RU')} ₽`
        : '';
    return `Здравствуйте! Хочу заказать букет «${bouquet.name}»${priceText}`;
  };

  const createWhatsAppUrl = (bouquet: Bouquet) => {
    const message = getOrderMessage(bouquet);
    return `${boutiqueData.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  const createTelegramUrl = (bouquet: Bouquet) => {
    const message = getOrderMessage(bouquet);
    // Ссылка на менеджера с предзаполненным текстом или ссылка на диалог студии
    if (boutiqueData.telegramManagerUrl) {
      return `${boutiqueData.telegramManagerUrl}?text=${encodeURIComponent(message)}`;
    }
    return boutiqueData.telegramUrl;
  };

  const createVkUrl = () => {
    return boutiqueData.vkUrl;
  };

  return (
    <section id="catalog" className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#7A2E3A] font-medium block mb-2">
                Каталог
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#1F1F1F] font-normal leading-[1.1]">
                Коллекция букетов
              </h2>
            </div>
            <p className="text-sm text-[#1F1F1F]/60 max-w-xs font-light">
              Свежие цветы и авторские корзины ручной сборки в Перми
            </p>
          </div>
        </FadeIn>

        {/* Фильтр категорий в виде горизонтальных таблеток с горизонтальной прокруткой */}
        <FadeIn delay={50}>
          <div className="relative mb-8 sm:mb-12">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
              {boutiqueData.categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] cursor-pointer border ${
                      isActive
                        ? 'bg-[#7A2E3A] text-white border-[#7A2E3A]'
                        : 'bg-transparent text-[#1F1F1F]/70 border-[#E8E2D9] hover:border-[#1F1F1F]/50 hover:text-[#1F1F1F]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Сетка карточек: 2 колонки на телефоне, 3 на планшете, 4 на десктопе */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {filteredBouquets.map((bouquet, index) => (
            <FadeIn key={bouquet.id} delay={(index % 4) * 60}>
              <article className="h-full flex flex-col justify-between rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2] overflow-hidden transition-all duration-300 hover:border-[#7A2E3A]/40 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] group">
                <div>
                  {/* Контейнер фото 4:5 */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#F0ECE4]">
                    <BouquetImage
                      src={bouquet.photo}
                      alt={bouquet.name}
                      aspectRatio="aspect-[4/5]"
                    />
                    {bouquet.badge && (
                      <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1F1F1F] border border-[#E8E2D9]">
                        {bouquet.badge}
                      </span>
                    )}
                  </div>

                  {/* Описание и состав букета */}
                  <div className="p-3.5 sm:p-5">
                    <h3 className="font-serif text-lg sm:text-xl text-[#1F1F1F] font-normal leading-snug mb-1 group-hover:text-[#7A2E3A] transition-colors line-clamp-2">
                      {bouquet.name}
                    </h3>

                    <p className="text-xs text-[#1F1F1F]/60 line-clamp-2 font-light leading-relaxed mb-3">
                      {bouquet.composition}
                    </p>

                    <div className="flex items-baseline gap-2 mb-3.5">
                      <span className="text-base sm:text-lg font-medium text-[#1F1F1F]">
                        {typeof bouquet.price === 'number'
                          ? `${bouquet.price.toLocaleString('ru-RU')} ₽`
                          : bouquet.price || 'цена по запросу'}
                      </span>
                      {bouquet.oldPrice && (
                        <span className="text-xs sm:text-sm text-[#1F1F1F]/40 line-through font-light">
                          {bouquet.oldPrice.toLocaleString('ru-RU')} ₽
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Кнопки «Заказать» с выбором мессенджера (WhatsApp, Telegram, ВК) */}
                <div className="px-3 pb-3.5 sm:px-5 sm:pb-5 pt-0">
                  <div className="text-[11px] text-[#1F1F1F]/50 uppercase tracking-wider font-medium mb-1.5 text-center">
                    Заказать через:
                  </div>
                  <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                    <a
                      href={createWhatsAppUrl(bouquet)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] rounded-full bg-[#7A2E3A] text-white text-[11px] sm:text-xs font-medium tracking-wide hover:bg-[#63242e] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center px-1"
                      aria-label={`Заказать ${bouquet.name} в WhatsApp`}
                      title="Заказать через WhatsApp"
                    >
                      <span className="hidden sm:inline">WhatsApp</span>
                      <span className="sm:hidden">WA</span>
                    </a>

                    <a
                      href={createTelegramUrl(bouquet)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] text-[11px] sm:text-xs font-medium tracking-wide hover:border-[#1F1F1F] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center bg-transparent px-1"
                      aria-label={`Заказать ${bouquet.name} в Telegram`}
                      title="Заказать через Telegram"
                    >
                      <span className="hidden sm:inline">Telegram</span>
                      <span className="sm:hidden">TG</span>
                    </a>

                    <a
                      href={createVkUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] rounded-full border border-[#1F1F1F]/20 text-[#1F1F1F] text-[11px] sm:text-xs font-medium tracking-wide hover:border-[#1F1F1F] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center bg-transparent px-1"
                      aria-label={`Заказать ${bouquet.name} в ВКонтакте`}
                      title="Заказать через ВКонтакте"
                    >
                      ВК
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
