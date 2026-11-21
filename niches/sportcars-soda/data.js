// Niche: Apex Anatomy — POP version (bright colours, Soda Motion style)
// 9 posts + 5 highlights + 3 reels. Each post has its own colour pair and graphic elements, drawn by code.
// layout: 'pop' = gradient plate bottom-left (or pos:'right'); 'type' = pure typographic poster.
// stripe: colour of the vertical line; plate: [from, to]; ink: colour of *accent* words on the plate.
// shapes: [type, x%, y%, colour, scale] — types: circle, dot, diamond, dots, slash, spark, ring, bar, plus.

const V='#7A2CF5', L='#B8F02A', Y='#F2C230', C='#22D3EE', P='#FF3D8B', R='#FF3B1F', A='#FFB21C', K='#0E0E10', W='#FFFFFF';

window.NICHE_DATA = {
  username: 'apex.anatomy',
  name: 'Apex Anatomy',
  avatar: 'avatar.svg',
  avatarText: 'A',
  category: 'Media/news company',
  bio: ['Sports cars & superbikes, broken down 🏁', 'Specs · track tests · myths vs facts', 'New breakdown every Tue & Fri ↓'],
  link: 'apexanatomy.com/garage',
  stats: { followers: '842', following: '118' },
  conceptLabel: 'Concept · Instagram profile & identity — VizuCraft',
  posterBrand: 'Apex Anatomy',
  theme: 'light',
  accent: '#FF3B1F', accentInk: '#111', accent2: '#FFB21C',
  fonts: { display: 'Rubik', body: 'Rubik', displayStyle: 'italic', displayWeight: 900,
           url: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;0,800;1,800;1,900&display=swap' },

  highlights: [
    { title: 'Breakdowns', icon: 'VS', cover: { bg: `linear-gradient(135deg,${V},${P})`, icon: 'VS' },
      stories: [ { img: 's01.jpg', layout: 'pop', plate: [L, Y], ink: V, stripe: V, tag: 'This week', title: 'Hot hatch *showdown*', sub: 'Full breakdown in the feed',
                   shapes: [['spark', 82, 12, W], ['dots', 14, 10, W]] } ] },
    { title: 'Bikes', icon: '2W', cover: { bg: `linear-gradient(135deg,${L},${Y})`, icon: '2W' },
      stories: [ { img: 's03.jpg', layout: 'pop', plate: [K, K], ink: L, tag: 'Bikes', title: 'Supercharged *on two wheels*',
                   shapes: [['circle', 80, 62, K], ['diamond', 14, 58, K]] } ] },
    { title: 'Track days', icon: 'T', cover: { bg: `linear-gradient(135deg,${R},${A})`, icon: 'T' } },
    { title: 'Myths', icon: '?!', cover: { bg: `linear-gradient(135deg,${P},${A})`, icon: '?!' } },
    { title: 'Quiz', icon: 'Q', cover: { bg: `linear-gradient(135deg,${C},${V})`, icon: 'Q' } },
  ],

  posts: [
    { pinned: true, likes: '1,284', date: '2 days ago',
      caption: 'Two hot hatches, two philosophies. Which one would you take on a wet B-road? 👇\n\n#hothatch #carbreakdown',
      slides: [
        { img: 's01.jpg', layout: 'pop', plate: [L, Y], ink: V, stripe: V, tag: 'Head to head', title: 'Hot hatch *showdown*', sub: 'Rally-bred vs all-rounder. Swipe →',
          shapes: [['spark', 18, 14, W, 1.2], ['dots', 62, 9, W], ['circle', 12, 38, Y]] },
        { bg: `linear-gradient(160deg,${V},#3b0f99)`, layout: 'pop', plate: [Y, Y], ink: V, tag: 'Verdict', title: 'Raw *or* refined?', sub: 'Tell us in the comments — we read every one.', cta: 'Save for later',
          shapes: [['ring', 70, 28, L], ['spark', 30, 20, Y, 1.4], ['plus', 84, 52, W]] },
      ] },
    { likes: '2,031', date: '5 days ago',
      caption: 'Every surface on this car has a job. Swipe for the aero breakdown.\n\n#aerodynamics #trackcar',
      slides: [ { img: 's02.jpg', layout: 'pop', plate: [P, A], ink: W, stripe: K, stripeSide: 'left', tag: 'Anatomy', title: 'Air is the *weapon*', sub: 'An aero breakdown in 5 slides',
                  shapes: [['diamond', 86, 8, K], ['dots', 80, 62, W], ['bar', 70, 70, K]] } ] },
    { type: 'reel', likes: '3,410', date: '1 week ago',
      caption: 'Supercharged. On a motorcycle. That whistle is not a sound effect 🔊\n\n#superbike #supercharged',
      cover: { img: 's03p.jpg', layout: 'pop', plate: [K, K], ink: L, tag: 'Reel', title: 'The bike that *whistles*',
               shapes: [['circle', 84, 66, K], ['slash', 18, 64, K]] } },
    { likes: '962', date: '1 week ago',
      caption: 'Wider is not always better. Grip depends on rubber, temperature and load.\n\n#tyres #carmyths',
      slides: [ { img: 's04.jpg', layout: 'pop', plate: [C, C], ink: V, tag: 'Myth vs fact', title: 'Wider tyres = *more grip?*',
                  shapes: [['spark', 14, 10, W, 1.3], ['ring', 22, 30, W], ['dot', 30, 14, Y]] } ] },
    { likes: '1,547', date: '2 weeks ago',
      caption: 'First track day? Screenshot this. Five things people forget.\n\n#trackday #checklist',
      slides: [ { img: 's05.jpg', pos: 'right', layout: 'pop', plate: [V, P], ink: Y, stripe: L, stripeSide: 'left', tag: 'Checklist', title: '5 things you’ll *forget*', sub: 'Save before your first session',
                  shapes: [['dots', 84, 8, W], ['diamond', 70, 18, Y]] } ] },
    { likes: '2,208', date: '2 weeks ago',
      caption: 'Sixty years of sports car shapes. Which era is your favourite?\n\n#cardesign #poster',
      slides: [ { img: 's06.jpg', overlay: false } ] },
    { likes: '1,372', date: '3 weeks ago',
      caption: 'Daily driver or weekend track toy? Some cars refuse to choose.\n\n#sportssedan',
      slides: [ { img: 's07.jpg', layout: 'pop', plate: [Y, L], ink: R, stripe: V, tag: 'Spec sheet', title: 'Four doors. *No mercy.*',
        sub: '3.0 twin-turbo six, five seats, one big grin.',
                  shapes: [['circle', 14, 10, W], ['slash', 76, 8, K]] } ] },
    { likes: '1,106', date: '3 weeks ago',
      caption: 'Naked or fully faired — what should be your first big bike?\n\n#nakedbike #motorcycle',
      slides: [ { img: 's08.jpg', layout: 'pop', plate: [A, R], ink: W, stripe: A, stripeSide: 'left', tag: 'Bikes 101', title: 'Naked *or* sport bike?',
                  shapes: [['spark', 86, 62, A, 1.3], ['dots', 82, 8, W], ['plus', 66, 66, W]] } ] },
    { likes: '4,019', date: '1 month ago',
      caption: 'Pin this above your garage door.\n\n#motorsport #quote',
      slides: [ { bg: `linear-gradient(150deg,${L},${Y})`, layout: 'type', title: 'Brake later. *Lift never.*', pos: 'center',
                  shapes: [['ring', 80, 16, K], ['diamond', 16, 84, V, 1.4], ['dots', 20, 12, K], ['slash', 78, 86, V], ['spark', 86, 70, P]] } ] },
  ],

  reels: [
    { views: '48.2K', cover: { img: 'r01.jpg', layout: 'pop', plate: [K, K], ink: L, title: 'Wheelie *school*' }, caption: 'Front up. #wheelie', likes: '5,120', date: '3 days ago' },
    { views: '31.7K', cover: { img: 'r02.jpg', layout: 'pop', plate: [P, A], ink: W, title: 'Aero *in 30 s*' }, caption: 'What the wing does. #aero', likes: '3,904', date: '1 week ago' },
    { views: '22.9K', cover: { img: 'r03.jpg', layout: 'pop', plate: [Y, L], ink: R, title: 'Smoke *show*' }, caption: 'Four doors, zero grip. #drift', likes: '2,330', date: '1 week ago' },
  ],
};
