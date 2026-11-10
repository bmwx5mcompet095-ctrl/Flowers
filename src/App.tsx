import React, { useEffect } from 'react';
import { boutiqueData } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { WhyUs } from './components/WhyUs';
import { HowToOrder } from './components/HowToOrder';
import { DeliveryAndPayment } from './components/DeliveryAndPayment';
import { FAQ } from './components/FAQ';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    // Синхронизация SEO заголовка и описания строго из data.ts
    document.title = boutiqueData.seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', boutiqueData.seo.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', boutiqueData.seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', boutiqueData.seo.description);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F1F1F] font-sans selection:bg-[#7A2E3A]/15 selection:text-[#1F1F1F]">
      {/* 1. Фиксированная шапка */}
      <Header />

      <main>
        {/* 2. Первый экран с заголовком h1, фактами и кнопками действия */}
        <Hero />

        {/* 3. Каталог букетов с фильтрацией и заказом в WhatsApp */}
        <Catalog />

        {/* 4. Стандарты и преимущества бутика */}
        <WhyUs />

        {/* 5. Как заказать: 3 шага в одну линию */}
        <HowToOrder />

        {/* 6. Условия доставки и способы оплаты */}
        <DeliveryAndPayment />

        {/* 7. Частые вопросы с плавной анимацией */}
        <FAQ />

        {/* 8. Контакты мастерской и ссылки на мессенджеры */}
        <Contacts />
      </main>

      {/* 9. Подвал в одну строку */}
      <Footer />

      {/* Плавающая кнопка WhatsApp (52px, правый нижний угол) */}
      <FloatingWhatsApp />
    </div>
  );
}
