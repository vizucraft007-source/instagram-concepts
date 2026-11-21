// Ниша: бренд одежды «Лад», вариант оформления «Тиша» (спокойный, quiet luxury). Украинский.
// Вымышленный бренд для портфолио. 6 картинок (ChatGPT) + 3 текстовых поста кодом.
// layout 'quiet' — тёмный текст прямо на светлом фото; inv:true — белый текст (на тёмном фото или фоне).

const INK='#2A2520', PAPER='#EFE9E1', SAND='#E2D8CA', TOB='#8A6A4F', SAGE='#6F7268';

window.NICHE_DATA = {
  username: 'lad.wear',
  name: 'Лад · одяг',
  avatar: '',
  avatarText: 'Лад',
  avatarBg: PAPER, avatarInk: INK,
  category: 'Магазин одягу',
  bio: ['Одяг з натуральних тканин 🤍', 'Льон · вовна · бавовна. Шиємо в Україні', 'Примірка перед оплатою ↓'],
  link: 'lad.wear/shop',
  stats: { followers: '1 284', following: '96' },
  conceptLabel: 'Концепт оформлення · варіант «Тиша» — VizuCraft',
  posterBrand: 'Лад',
  theme: 'light',
  accent: '#6B4A2F', hlIcon: INK, accentInk: '#fff', accent2: SAND,
  fonts: { display: 'Cormorant Garamond', body: 'Manrope', displayWeight: 500,
           url: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700;800&display=swap' },

  highlights: [
    { title: 'Новинки', icon: 'Н', cover: { bg: SAND, icon: 'Н' },
      stories: [ { img: 'r1.jpg', layout: 'quiet', tag: 'Нове', title: 'Колекція *«Тиша»*', sub: 'Вже на сайті', pos: 'bottom' } ] },
    { title: 'Розміри', icon: 'S–L', cover: { bg: PAPER, icon: 'S–L' },
      stories: [ { bg: PAPER, layout: 'quiet', tag: 'Розміри', title: 'Як обрати *свій*', specs: [['S', '84–88 см'], ['M', '88–94 см'], ['L', '94–100 см']], pos: 'center' } ] },
    { title: 'Доставка', icon: 'НП', cover: { bg: '#D9CFC1', icon: 'НП' } },
    { title: 'Відгуки', icon: '★', cover: { bg: SAND, icon: '★' } },
    { title: 'Догляд', icon: '30°', cover: { bg: PAPER, icon: '30°' } },
  ],

  posts: [
    { pinned: true, likes: '412', date: '2 дні тому',
      caption: 'Колекція «Тиша» вже на сайті. Льон, який дихає навіть у спеку, і крій, у якому зручно жити, а не позувати.\n\nГортайте: тканини і розміри 👉\n\n#лад #льон #український_одяг',
      slides: [
        { img: 'c1.jpg', layout: 'quiet', tag: 'Нова колекція', title: 'Льон, що *дихає*', sub: 'Колекція «Тиша» · весна' },
        { img: 'c5.jpg', layout: 'quiet', pos: 'top', tag: 'Тканини', title: 'Льон, вовна, *бавовна*', specs: [['Льон', '100%'], ['Вовна', 'меринос'], ['Бавовна', 'органічна']] },
        { bg: PAPER, layout: 'quiet', pos: 'center', tag: 'Розміри', title: 'Не впевнені *з розміром?*', sub: 'Напишіть зріст і вагу — підкажемо за 5 хвилин.', cta: 'Написати в Direct' },
      ] },
    { likes: '268', date: '4 дні тому',
      caption: 'Кардиган, який вдягаєш щоранку і не думаєш. Велика в’язка, мериносова вовна, ґудзики з горіха.\n\n#лад #кардиган #чоловічий_одяг',
      slides: [ { img: 'c2.jpg', layout: 'quiet', inv: true, tag: 'Чоловікам', title: 'Кардиган *на щодня*' } ] },
    { likes: '355', date: '6 днів тому',
      caption: 'Чотири речі — дванадцять образів. Збережіть, щоб не думати зранку, що вдягнути.\n\n#капсула #базовий_гардероб',
      slides: [
        { img: 'c3.jpg', layout: 'quiet', tag: 'Капсула', title: '4 речі — *12 образів*', sub: 'Гортайте →' },
        { bg: SAND, layout: 'quiet', pos: 'center', tag: 'Образ 1', title: 'Светр + *лляні штани*', sub: 'На роботу і на прогулянку' },
        { bg: PAPER, layout: 'quiet', pos: 'center', tag: 'Образ 2', title: 'Сорочка *навипуск*', sub: 'Рукави підкатати — і готово' },
      ] },
    { likes: '501', date: '1 тиждень тому',
      caption: 'Ми не женемося за трендами. Ми шиємо речі, які носять роками.\n\n#лад #повільна_мода',
      slides: [ { bg: INK, layout: 'quiet', inv: true, pos: 'center', title: 'Речі, які *залишаються*' } ] },
    { likes: '389', date: '1 тиждень тому',
      caption: 'Пальто з вовни кольору кемел. Тепле, але не важке. Довжина — до середини литки.\n\n#пальто #осінь',
      slides: [ { img: 'c4.jpg', layout: 'quiet', inv: true, tag: 'Осінь', title: 'Тепло *без зайвого*' } ] },
    { likes: '174', date: '2 тижні тому',
      caption: 'Як прати льон, щоб він служив роками. Збережіть 🤍\n\n#догляд_за_одягом #льон',
      slides: [ { bg: SAND, layout: 'quiet', pos: 'center', tag: 'Догляд', title: 'Прати *холодною* водою', sub: '30° · без віджиму · сушити на плічках' } ] },
    { likes: '226', date: '2 тижні тому',
      caption: 'Ґудзики з горіха, шви, які не розходяться. Деталі, які видно лише зблизька.\n\n#деталі #якість',
      slides: [ { img: 'c6.jpg', layout: 'quiet', pos: 'top', tag: 'Деталі', title: 'Ґудзики *з горіха*' } ] },
    { likes: '298', date: '3 тижні тому',
      caption: 'Фактура, яку хочеться торкнутися.\n\n#тканини #лад',
      slides: [ { img: 'c5.jpg', overlay: false } ] },
    { likes: '187', date: '3 тижні тому',
      caption: 'Не потрібно вгадувати з розміром: оплата після примірки на пошті.\n\n#доставка #примірка',
      slides: [ { bg: '#D9CFC1', layout: 'quiet', pos: 'center', tag: 'Доставка', title: 'Спершу *примірка*, потім оплата', cta: 'Як замовити — у хайлайтах' } ] },
  ],

  reels: [
    { views: '12,4 тис.', cover: { img: 'r1.jpg', layout: 'quiet', title: 'Як носити *льон*', pos: 'bottom' }, caption: '3 способи. #льон', likes: '640', date: '3 дні тому' },
    { views: '8 912', cover: { img: 'r2.jpg', layout: 'quiet', inv: true, title: 'Один день *у пальті*', pos: 'bottom' }, caption: 'Від кави до вечері. #пальто', likes: '421', date: '1 тиждень тому' },
    { views: '5 377', cover: { img: 'r3.jpg', layout: 'quiet', inv: true, title: 'Кардиган: *за лаштунками*', pos: 'bottom' }, caption: 'Як шиємо. #процес', likes: '305', date: '2 тижні тому' },
  ],
};
