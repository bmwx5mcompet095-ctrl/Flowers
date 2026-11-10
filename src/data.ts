/**
 * Единый источник данных для цветочной студии.
 * Все тексты, контакты, каталог, условия и настройки хранятся исключительно здесь.
 */

export interface Bouquet {
  id: string;
  name: string;
  price: number | 'цена по запросу';
  oldPrice?: number;
  description: string;
  composition: string;
  size: string;
  photo: string;
  category: string;
  badge?: 'Хит' | 'Новинка';
}

export interface DeliveryZone {
  name: string;
  price: number | string;
  time: string;
}

export interface DeliveryTerms {
  freeFrom: number;
  zones: DeliveryZone[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
}

export interface OrderStep {
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteData {
  name: string;
  logo: string;
  slogan: string;
  city: string;
  cityAccusative: string;
  cityIn: string;
  address: string;
  mapUrl: string;
  gisUrl: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  telegramUrl: string;
  telegramManagerUrl: string;
  telegramHandle: string;
  vkUrl: string;
  vkGroupUrl: string;
  workingHours: string;
  colors: {
    background: string;
    text: string;
    accent: string;
    accentHover: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  seo: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    headingPrefix: string;
    photo: string;
    facts: string[];
  };
  categories: string[];
  bouquets: Bouquet[];
  advantages: Advantage[];
  orderSteps: OrderStep[];
  delivery: DeliveryTerms;
  paymentMethods: string[];
  faq: FAQItem[];
  gallery: string[];
}

export const boutiqueData: SiteData = {
  name: "Цветочная студия NB",
  logo: "/assets/aistudio/IMG_8052_da63dc21.jpeg",
  slogan: "Авторские букеты и цветочные корзины со свежими поставками",
  city: "Пермь",
  cityAccusative: "Пермь",
  cityIn: "Перми",
  address: "ул. Николая Островского, 30",
  mapUrl: "https://yandex.ru/maps/org/tsvetochnaya_studiya/94713295370?si=g9hvgwt435uv8qa1mf93zdvjrm",
  gisUrl: "", // Ссылка на 2ГИС не была передана в запросе
  phone: "+7 (919) 46-36-040",
  phoneRaw: "+79194636040",
  whatsappNumber: "79194636040",
  whatsappUrl: "https://wa.me/79194636040",
  telegramUrl: "https://t.me/+UJ6RlCnjmjY3OTg6",
  telegramManagerUrl: "https://t.me/nata_benyukh",
  telegramHandle: "@nata_benyukh",
  vkUrl: "https://vk.me/club36586350",
  vkGroupUrl: "https://vk.com/market-36586350",
  workingHours: "Ежедневно с 10:00 до 20:00",
  
  colors: {
    background: "#FAF7F2",
    text: "#1F1F1F",
    accent: "#7A2E3A",
    accentHover: "#63242e",
    border: "#E8E2D9",
  },
  
  fonts: {
    heading: "Cormorant Garamond, Georgia, serif",
    body: "Inter, sans-serif",
  },
  
  seo: {
    title: "Цветочная студия NB — Доставка цветов в Перми, ул. Николая Островского, 30",
    description: "Авторские букеты и композиции из свежих цветов в Перми. Быстрая доставка, заказ в WhatsApp, Telegram и ВКонтакте.",
  },
  
  hero: {
    badge: "Цветочная студия NB",
    headingPrefix: "Свежие цветы с доставкой в",
    photo: "/assets/aistudio/IMG_8053_987e279e.jpeg",
    facts: [
      "Доставка по Перми",
      "Свежие поставки",
      "Фото перед отправкой"
    ],
  },
  
  categories: [
    "Все букеты",
    "Авторские",
    "Сезонные",
    "Корзины"
  ],
  
  bouquets: [
    {
      id: "nb-basket-1",
      name: "Цветочная корзина с пионами и гортензией",
      price: 12990,
      description: "Большая праздничная корзина со свежими пионами, садовыми розами и нежной гортензией.",
      composition: "Пионы, французские розы, гортензия, герберы, эвкалипт, плетеная корзина с фирменными лентами студии",
      size: "Высота 50 см, диаметр 55 см",
      photo: "/assets/aistudio/IMG_8040_4d07a26e.jpeg",
      category: "Корзины",
      badge: "Хит"
    },
    {
      id: "nb-spring-gerbera",
      name: "Весенний букет с герберами и тюльпанами",
      price: 2600,
      description: "Нежный букет в пастельных тонах со свежими тюльпанами, герберами и гвоздикой.",
      composition: "Розовые герберы, белые тюльпаны, гвоздика, сухоцветы, матовая упаковка",
      size: "Высота 45 см, диаметр 30 см",
      photo: "/assets/aistudio/IMG_8041_ebd18229.jpeg",
      category: "Сезонные",
      badge: "Новинка"
    },
    {
      id: "nb-autumn-roses",
      name: "Авторский букет с розами и георгином",
      price: 3600,
      description: "Сочная авторская композиция с оранжевыми кустовыми розами, георгином и сочной зеленью.",
      composition: "Кустовые розы, георгин, гвоздика, сантини, декоративная тыковка",
      size: "Высота 45 см, диаметр 35 см",
      photo: "/assets/aistudio/IMG_8032_2973214f.jpeg",
      category: "Авторские"
    },
    {
      id: "nb-sunflower",
      name: "Яркий букет с подсолнухом",
      price: 3300,
      description: "Жизнерадостный букет с крупным подсолнухом, кустовыми розами и пышными хризантемами.",
      composition: "Подсолнух, кустовые розы, хризантемы, гвоздики, сочная зелень",
      size: "Высота 45 см, диаметр 32 см",
      photo: "/assets/aistudio/IMG_8035_9fe9874f.jpeg",
      category: "Авторские"
    },
    {
      id: "nb-boxes-pastel",
      name: "Подарочные боксы с гипсофилой и хлопком",
      price: "цена по запросу",
      description: "Стильные коробочки с цветной гипсофилой, хлопком и атласными лентами с фирменным логотипом NB.",
      composition: "Цветная гипсофила, лавандовый хлопок, дизайнерский бокс с ручками, фирменные ленты NB",
      size: "Высота 35 см, диаметр 20 см",
      photo: "/assets/aistudio/IMG_8054_99ba49ea.jpeg",
      category: "Корзины",
      badge: "Новинка"
    }
  ],
  
  advantages: [
    {
      id: "adv-1",
      title: "Регулярные поставки свежих цветов",
      description: "Тщательно отбираем цветы и храним их в правильном температурном режиме в студии на Николая Островского, 30."
    },
    {
      id: "adv-2",
      title: "Согласование фото перед вручением курьеру",
      description: "Присылаем детальные снимки готовой композиции в Telegram, WhatsApp или ВК перед отправкой."
    },
    {
      id: "adv-3",
      title: "Бережная курьерская доставка по Перми",
      description: "Перевозим цветы бережно в защитной упаковке, сохраняя идеальную свежесть и форму букета."
    },
    {
      id: "adv-4",
      title: "Фирменные ленты и открытка к каждому букету",
      description: "Каждый заказ оформляется с любовью и вниманием к деталям флористами студии."
    }
  ],
  
  orderSteps: [
    {
      title: "Выберите букет",
      description: "В каталоге представлены авторские букеты и корзины с актуальными ценами."
    },
    {
      title: "Напишите нам",
      description: "Выберите удобный мессенджер: WhatsApp, Telegram или ВКонтакте."
    },
    {
      title: "Получите доставку",
      description: "Согласуем фото готового букета и доставим получателю точно к назначенному времени."
    }
  ],
  
  delivery: {
    freeFrom: 5000,
    zones: [
      {
        name: "Центральные районы Перми",
        price: 350,
        time: "от 60 минут"
      },
      {
        name: "Отдаленные районы Перми",
        price: 500,
        time: "от 90 минут"
      },
      {
        name: "Пригород Перми",
        price: "по тарифу курьера",
        time: "от 120 минут"
      }
    ]
  },
  
  paymentMethods: [
    "Банковские карты",
    "Система быстрых платежей (СБП)",
    "Безналичный расчет"
  ],
  
  faq: [
    {
      id: "faq-1",
      question: "Как быстро вы можете доставить букет по Перми?",
      answer: "В центральные районы Перми мы доставляем букеты от 60 минут с момента подтверждения заказа. При необходимости согласуем доставку к строго назначенному времени."
    },
    {
      id: "faq-2",
      question: "Присылаете ли вы фото букета перед отправкой?",
      answer: "Да, флорист обязательно отправляет детальные фотографии собранного букета в WhatsApp, Telegram или ВКонтакте для вашего согласования перед передачей курьеру."
    },
    {
      id: "faq-3",
      question: "Как оформить заказ через мессенджер?",
      answer: "Выберите понравившийся букет в каталоге и нажмите на иконку удобного мессенджера (WhatsApp, Telegram или ВК). Откроется чат с готовым названием букета — вам останется указать адрес и время доставки."
    },
    {
      id: "faq-4",
      question: "Можно ли приложить открытку с моим текстом?",
      answer: "К каждому букету бесплатно прилагается фирменный конверт с открыткой, куда мы каллиграфично впишем ваши теплые пожелания получателю."
    },
    {
      id: "faq-5",
      question: "Как ухаживать за цветами, чтобы они дольше стояли?",
      answer: "Перед постановкой в воду подрежьте стебли ножом или секатором под углом 45 градусов. Используйте холодную чистую воду, меняйте её ежедневно и берегите букет от сквозняков и прямых солнечных лучей."
    }
  ],
  
  gallery: [
    "/assets/aistudio/IMG_8053_987e279e.jpeg",
    "/assets/aistudio/IMG_8054_99ba49ea.jpeg",
    "/assets/aistudio/IMG_8044_a6bbb091.jpeg",
    "/assets/aistudio/IMG_8040_4d07a26e.jpeg",
    "/assets/aistudio/IMG_8032_2973214f.jpeg"
  ]
};
