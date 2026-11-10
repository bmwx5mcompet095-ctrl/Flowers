/**
 * Единый источник данных для цветочного бутика.
 * Все тексты, контакты, каталог, условия и настройки хранятся исключительно здесь.
 */

export interface Bouquet {
  id: string;
  name: string;
  price: number;
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
  price: number;
  time: string;
}

export interface DeliveryTerms {
  freeFrom: number;
  zones: DeliveryZone[];
}

export interface Review {
  id: string;
  name: string;
  date: string;
  text: string;
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

export interface SiteData {
  name: string;
  slogan: string;
  city: string;
  address: string;
  mapUrl: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  telegramUrl: string;
  telegramHandle: string;
  instagramUrl: string;
  instagramHandle: string;
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
  reviews: Review[];
  gallery: string[];
}

export const boutiqueData: SiteData = {
  name: "FLORAISON",
  slogan: "Авторская флористика и бережная курьерская доставка",
  city: "Москва",
  address: "ул. Большая Никитская, 24/1",
  mapUrl: "https://yandex.ru/maps/-/CDuWMB~B",
  phone: "+7 (495) 798-21-40",
  phoneRaw: "+74957982140",
  whatsappNumber: "79991234567",
  whatsappUrl: "https://wa.me/79991234567",
  telegramUrl: "https://t.me/floraison_atelier",
  telegramHandle: "@floraison_atelier",
  instagramUrl: "https://instagram.com/floraison.atelier",
  instagramHandle: "@floraison.atelier",
  workingHours: "Ежедневно с 09:00 до 21:00",
  
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
    title: "FLORAISON — Авторская флористика и доставка цветов в Москве",
    description: "Премиальные авторские букеты из свежих цветов с доставкой от 60 минут в Москве. Фотография букета перед отправкой, заказ через WhatsApp.",
  },
  
  hero: {
    badge: "Сезонная коллекция",
    headingPrefix: "Свежие цветы с доставкой в",
    photo: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85",
    facts: [
      "Доставка от 60 минут",
      "Свежесть от 7 дней",
      "Фото перед отправкой"
    ],
  },
  
  categories: [
    "Все букеты",
    "Монобукеты",
    "Авторские",
    "Сезонные",
    "В шляпных коробках"
  ],
  
  bouquets: [
    {
      id: "bouquet-1",
      name: "Кашемировый рассвет",
      price: 6800,
      oldPrice: 7500,
      description: "Воздушная композиция в пудровых тонах с французскими пионовидными розами и веточками эвкалипта.",
      composition: "Пионовидные розы O'Hara, маттиола, диантусы, эвкалипт цинерея",
      size: "Высота 45 см, диаметр 35 см",
      photo: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=85",
      category: "Авторские",
      badge: "Хит"
    },
    {
      id: "bouquet-2",
      name: "Белый шелк",
      price: 8900,
      description: "Монобукет из белоснежных ранункулюсов в матовой дизайнерской бумаге шелковой фактуры.",
      composition: "Ранункулюсы Ханой (19 шт.), атласная лента",
      size: "Высота 40 см, диаметр 30 см",
      photo: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=85",
      category: "Монобукеты",
      badge: "Новинка"
    },
    {
      id: "bouquet-3",
      name: "Винтажный пион",
      price: 11500,
      oldPrice: 12800,
      description: "Роскошный букет из коралловых и пудровых пионов с тонким природным ароматом.",
      composition: "Пионы Coral Sunset (15 шт.), листья фисташки",
      size: "Высота 50 см, диаметр 42 см",
      photo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85",
      category: "Сезонные",
      badge: "Хит"
    },
    {
      id: "bouquet-4",
      name: "Тосканский вечер",
      price: 7400,
      description: "Глубокая бархатная гамма с винными каллами, кустовыми розами и темной зеленью.",
      composition: "Каллы Капитан Прадо, розы Ред Пиано, скимия, котинус",
      size: "Высота 48 см, диаметр 38 см",
      photo: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=85",
      category: "Авторские"
    },
    {
      id: "bouquet-5",
      name: "Пастельная коробка",
      price: 9200,
      description: "Круглая бархатная шляпная коробка с пышной шапкой садовых роз и гортензии на флористическом оазисе.",
      composition: "Гортензия, розы Джульетта, оксипеталум, эустома",
      size: "Высота 35 см, диаметр 32 см",
      photo: "https://images.unsplash.com/photo-1587556930799-8dca6a63ac91?auto=format&fit=crop&w=800&q=85",
      category: "В шляпных коробках",
      badge: "Хит"
    },
    {
      id: "bouquet-6",
      name: "Луговая свежесть",
      price: 5400,
      description: "Легкий естественный букет с ромашковидными хризантемами, фрезиями и полевыми травами.",
      composition: "Танацетум, белая фрезия, вероника, колоски лагуруса",
      size: "Высота 42 см, диаметр 32 см",
      photo: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=800&q=85",
      category: "Сезонные"
    },
    {
      id: "bouquet-7",
      name: "Садовая гортензия",
      price: 6200,
      description: "Три пышные небесно-голубые гортензии в минималистичном оформлении из тишью.",
      composition: "Голландская гортензия премиум (3 шт.), эвкалипт парвифолия",
      size: "Высота 50 см, диаметр 40 см",
      photo: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=800&q=85",
      category: "Монобукеты"
    },
    {
      id: "bouquet-8",
      name: "Флорентийская шкатулка",
      price: 13900,
      description: "Большая премиальная композиция в кремовой коробке с редкими сортами роз и орхидей.",
      composition: "Орхидеи Цимбидиум, садовые розы David Austin, астильба, зелень эвкалипта",
      size: "Высота 42 см, диаметр 45 см",
      photo: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=800&q=85",
      category: "В шляпных коробках",
      badge: "Новинка"
    }
  ],
  
  advantages: [
    {
      id: "adv-1",
      title: "Прямые поставки с аукционов Голландии и Эквадора",
      description: "Цветы поступают в мастерскую трижды в неделю и хранятся в специальной камере при температуре +4°C."
    },
    {
      id: "adv-2",
      title: "Согласование фото перед вручением курьеру",
      description: "Флорист присылает детальные снимки и видео готового букета в WhatsApp до отправки."
    },
    {
      id: "adv-3",
      title: "Бережная курьерская доставка на автомобиле",
      description: "Букеты перевозятся в воде с кризалом и в защитных крафтовых боксах, сохраняя безупречный вид."
    },
    {
      id: "adv-4",
      title: "Подписанная каллиграфическая открытка и подкормка в подарок",
      description: "К каждому букету прилагается конверт с вашей личной запиской и инструкцией по уходу."
    }
  ],
  
  orderSteps: [
    {
      title: "Выберите букет",
      description: "В каталоге представлены актуальные композиции с точным составом и размером."
    },
    {
      title: "Напишите в WhatsApp",
      description: "Нажмите кнопку заказа — откроется диалог с уже заполненным названием букета."
    },
    {
      title: "Получите доставку",
      description: "Пришлем фото собранных цветов и доставим получателю точно к назначенному времени."
    }
  ],
  
  delivery: {
    freeFrom: 8000,
    zones: [
      {
        name: "В пределах ТТК",
        price: 450,
        time: "от 60 минут"
      },
      {
        name: "В пределах МКАД",
        price: 650,
        time: "от 90 минут"
      },
      {
        name: "За МКАД до 15 км",
        price: 1100,
        time: "от 120 минут"
      }
    ]
  },
  
  paymentMethods: [
    "Банковские карты Мир, Visa, Mastercard",
    "Система быстрых платежей (СБП)",
    "Безналичный расчет для юридических лиц"
  ],
  
  reviews: [
    {
      id: "rev-1",
      name: "Екатерина Воронова",
      date: "14 октября",
      text: "Заказывала букет на юбилей мамы. Цветы потрясающей свежести, простояли почти две недели. Отдельное спасибо за согласованное фото и красивую открытку с текстом."
    },
    {
      id: "rev-2",
      name: "Михаил Савельев",
      date: "28 сентября",
      text: "Быстрая доставка без лишних звонков. Букет в жизни выглядел даже объемнее и благороднее, чем на фото. Супруга в полном восторге."
    },
    {
      id: "rev-3",
      name: "Анастасия Лебедева",
      date: "5 сентября",
      text: "Очень тонкое чувство цвета и формы. Не типичные вульгарные композиции, а настоящее флористическое искусство. Буду заказывать снова."
    }
  ],
  
  gallery: [
    "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=800&q=80"
  ]
};
