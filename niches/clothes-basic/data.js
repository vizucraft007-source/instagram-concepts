// Ниша: «БАЗА» — простой молодёжный бренд базовой одежды, шьют в Харькове. Украинский.
// Вымышленный бренд для портфолио. Обычная магазинная подача: фото товара, минимум текста,
// маленькая плашка с ценой. Все посты — одежда. 9 картинок (ChatGPT).

const K='#151515', W='#FFFFFF', G='#EDEDED';

window.NICHE_DATA = {
  username: 'baza.kh',
  name: 'БАЗА · одяг',
  avatar: '',
  avatarText: 'БАЗА', avatarSize: '19px',
  avatarBg: K, avatarInk: W,
  category: 'Магазин одягу',
  bio: ['Базовий одяг, який шиємо в Харкові 🖤', 'Худі · футболки · штани · жилети', 'Доставка Новою поштою 1–2 дні', '👇 Замовлення в Direct або на сайті'],
  link: 'baza-kh.com.ua',
  stats: { followers: '3 418', following: '211' },
  conceptLabel: 'Концепт оформлення · базовий бренд — VizuCraft',
  posterBrand: '',
  theme: 'light',
  accent: K, accentInk: W, accent2: '#5E6B3A', hlIcon: K,
  fonts: { display: 'Manrope', body: 'Manrope', displayWeight: 800,
           url: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap' },

  highlights: [
    { title: 'Худі', cover: { img: 'hl1.jpg' },
      stories: [ { img: 'b4.jpg', layout: 'quiet', tag: 'Худі', title: '4 кольори', sub: 'Футер 3-нитка з начосом · 1 290 грн', pos: 'bottom' } ] },
    { title: 'Футболки', cover: { img: 'hl2.jpg' },
      stories: [ { img: 'b8.jpg', layout: 'quiet', tag: 'Футболки', title: '5 кольорів', sub: '100% бавовна · 590 грн', pos: 'bottom' } ] },
    { title: 'Розміри', cover: { img: 'hl3.jpg' },
      stories: [ { bg: G, layout: 'quiet', tag: 'Розміри', title: 'Як обрати розмір', specs: [['S', 'зріст 160–170'], ['M', '170–180'], ['L', '180–188'], ['XL', '188+']], pos: 'center' } ] },
    { title: 'Відгуки', cover: { img: 'hl4.jpg' } },
    { title: 'Доставка', cover: { img: 'hl5.jpg' },
      stories: [ { bg: G, layout: 'quiet', tag: 'Доставка', title: 'Нова пошта 1–2 дні', sub: 'Оплата при отриманні · можна приміряти на пошті', pos: 'center' } ] },
  ],

  posts: [
    { pinned: true, likes: '486', date: '1 день тому',
      caption: 'Худі оверсайз — наш бестселер 🖤\nФутер 3-нитка з начосом, не скочується після прання.\n\n💸 1 290 грн\n📏 S–XL\n🎨 чорний, графіт, олива, пісок\n\nЗамовлення в Direct або за посиланням у шапці.\n\n#базовийодяг #худі #харків #шиємовхаркові',
      slides: [
        { img: 'b1.jpg', overlay: false },
        { img: 'b4.jpg', overlay: false },
        { img: 'b6.jpg', overlay: false },
      ] },
    { likes: '312', date: '2 дні тому',
      caption: 'Зіп-худі графіт + широкі штани ✨\nКомплект, у якому і на пари, і на прогулянку.\n\n💸 Зіп-худі 1 390 грн · штани 990 грн\n📏 XS–L\n\n#костюм #зіпхуді #харків',
      slides: [ { img: 'b2.jpg', overlay: false } ] },
    { likes: '544', date: '4 дні тому',
      caption: 'Футболки оверсайз на двох 🤝\nЩільна бавовна 200 г, не просвічує і не тягнеться.\n\n💸 590 грн\n🎨 білий, чорний, сірий, олива, пісок\n\n#футболка #оверсайз #базовийодяг',
      slides: [
        { img: 'b3.jpg', overlay: false },
        { img: 'b8.jpg', overlay: false },
      ] },
    { likes: '278', date: '5 днів тому',
      caption: '4 кольори худі — який твій? Пиши в коментарях 👇\n\n#худі #базовийодяг',
      slides: [ { img: 'b4.jpg', overlay: false } ] },
    { likes: '391', date: '1 тиждень тому',
      caption: 'Бомбер олива 🫒\nЛегкий, на весну й осінь. Підкладка — бавовна.\n\n💸 1 790 грн\n📏 S–XL\n\n#бомбер #чоловічийодяг #харків',
      slides: [ { img: 'b5.jpg', overlay: false } ] },
    { likes: '203', date: '1 тиждень тому',
      caption: 'Чому наші світшоти не скочуються: щільний футер, начос усередині, подвійна строчка на манжетах.\nШиємо самі, у Харкові.\n\n#якість #шиємовхаркові',
      slides: [ { img: 'b6.jpg', overlay: false } ] },
    { likes: '357', date: '2 тижні тому',
      caption: 'Жилет + худі — тепло без куртки 🖤\n\n💸 Жилет 1 590 грн\n📏 XS–L\n\n#жилет #пуховийжилет #осінь',
      slides: [ { img: 'b7.jpg', overlay: false } ] },
    { likes: '188', date: '2 тижні тому',
      caption: 'Новий пошив футболок уже на вішаках 🧵\nБілий, чорний, сірий, олива, пісок. Розміри S–XXL.\n\n#футболки #новапартія',
      slides: [ { img: 'b8.jpg', overlay: false } ] },
    { likes: '421', date: '3 тижні тому',
      caption: 'Костюм «пісок»: світшот + штани з одного футеру 🤎\n\n💸 Комплект 2 190 грн замість 2 280\n📏 XS–L\n\n#костюм #спортивнийкостюм #харків',
      slides: [ { img: 'b9.jpg', overlay: false } ] },
  ],

  reels: [
    { views: '15,2 тис.', cover: { img: 'r1.jpg', overlay: false }, caption: 'Як сидить худі оверсайз на зріст 182. #худі', likes: '904', date: '3 дні тому' },
    { views: '9 870', cover: { img: 'r2.jpg', overlay: false }, caption: 'Одна футболка — двоє. #оверсайз', likes: '611', date: '1 тиждень тому' },
    { views: '6 433', cover: { img: 'r3.jpg', overlay: false }, caption: '3 образи з жилетом. #жилет', likes: '402', date: '2 тижні тому' },
  ],
};
