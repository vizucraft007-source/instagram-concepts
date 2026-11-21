// Niche: sports cars & motorcycles breakdown media (English)
// Images go to ./images/ under the file names below. Until a file exists, a styled placeholder is shown.
// Text on posts is drawn by code on top of the picture: generate clean images WITHOUT text.
// *word* in a title = accent colour.

window.NICHE_DATA = {
  username: 'apex.anatomy',
  name: 'Apex Anatomy',
  verified: false,
  avatar: 'avatar.jpg',
  avatarText: 'AA',
  category: 'Media/news company',
  bio: [
    'Sports cars & superbikes, broken down 🏁',
    'Specs · track tests · myths vs facts',
    'New breakdown every Tue & Fri ↓',
  ],
  link: 'apexanatomy.com/garage',
  stats: { followers: '842', following: '118' },   // keep it modest: this is a concept, not a growth claim
  conceptLabel: 'Concept · Instagram profile design — VizuCraft',
  posterBrand: 'Apex Anatomy',
  theme: 'dark',
  accent: '#FF4A1C',
  accentInk: '#0d0d0d',
  accent2: '#FFB21C',
  fonts: { display: 'Anton', body: 'Inter' },

  highlights: [
    { title: 'Breakdowns', icon: 'VS', cover: { img: 'hl-breakdowns.jpg' },
      stories: [
        { img: 'st-breakdowns-1.jpg', tag: 'This week', title: 'GR Yaris *vs* Golf R', sub: 'Full breakdown in the feed', pos: 'center' },
        { img: 'st-breakdowns-2.jpg', tag: 'Next up', title: '911 GT3 RS *aero*', sub: 'Friday, 18:00 CET', pos: 'center' },
      ] },
    { title: 'Bikes', icon: '2W', cover: { img: 'hl-bikes.jpg' },
      stories: [
        { img: 'st-bikes-1.jpg', tag: 'Bikes', title: 'Supercharged *on two wheels*', sub: 'Why the Ninja H2 sounds like that', pos: 'bottom' },
      ] },
    { title: 'Track days', icon: 'T', cover: { img: 'hl-track.jpg' },
      stories: [
        { img: 'st-track-1.jpg', tag: 'Track day', title: 'First time *on track?*', sub: 'Our checklist is pinned in the feed', pos: 'bottom' },
      ] },
    { title: 'Myths', icon: '?!', cover: { img: 'hl-myths.jpg' },
      stories: [
        { tag: 'Myth', title: 'Wider tyres = *more grip?*', sub: 'Swipe the post to find out', pos: 'center' },
      ] },
    { title: 'Quiz', icon: 'Q', cover: { img: 'hl-quiz.jpg' },
      stories: [
        { img: 'st-quiz-1.jpg', tag: 'Quiz', title: 'Guess the car *by its tail lights*', sub: 'Answer in tomorrow’s story', pos: 'bottom' },
      ] },
    { title: 'Garage', icon: 'G', cover: { img: 'hl-garage.jpg' } },
  ],

  posts: [
    { pinned: true, likes: '1,284', date: '2 days ago',
      caption: 'Two hot hatches, two philosophies. Rally-bred and raw vs. polished all-rounder — which one would you take on a wet B-road? 👇\n\n#hothatch #gryaris #golfr #carbreakdown',
      slides: [
        { img: 'p01-1.jpg', tag: 'Head to head', title: 'GR Yaris *vs* Golf R', sub: 'Rally-bred vs all-rounder. Swipe →' },
        { img: 'p01-2.jpg', tag: 'Engine', title: '3 cyl *vs* 4 cyl', sub: '1.6 turbo triple against a 2.0 turbo four — both send power to all four wheels.' },
        { img: 'p01-3.jpg', tag: 'Feel', title: 'Raw *vs* refined', sub: 'One talks to you through the wheel, the other gets you there faster on a cold morning.' },
        { img: 'p01-4.jpg', tag: 'Verdict', title: 'Your *pick?*', sub: 'Tell us in the comments — we read every one.', cta: 'Save for later' },
      ] },
    { likes: '2,031', date: '5 days ago',
      caption: 'Every surface on this car has a job. Here is what the wing, the louvres and the front blades actually do at speed.\n\n#porsche911 #gt3rs #aerodynamics',
      slides: [
        { img: 'p02-1.jpg', tag: 'Anatomy', title: '911 GT3 RS: *air* is the weapon', sub: 'An aero breakdown in 5 slides' },
        { img: 'p02-2.jpg', tag: '01 · Wing', title: 'Swan-neck *wing*', sub: 'Mounted from the top, so the underside — the side that matters — stays clean.', pos: 'top' },
        { img: 'p02-3.jpg', tag: '02 · Louvres', title: 'Wheel-arch *louvres*', sub: 'Let high-pressure air escape from the arches and cut front-end lift.', pos: 'top' },
        { img: 'p02-4.jpg', tag: '03 · DRS', title: 'Drag reduction *button*', sub: 'Flattens the wing on straights, puts the load back for the braking zone.', pos: 'top' },
        { img: 'p02-5.jpg', tag: 'Takeaway', title: 'Built for *the lap*, not the cafe', sub: 'Follow for part 2: the brakes.', cta: 'Follow @apex.anatomy' },
      ] },
    { type: 'reel', likes: '3,410', date: '1 week ago',
      caption: 'Supercharged. On a motorcycle. That whistle is not a sound effect 🔊\n\n#ninjah2 #superbike #supercharged',
      cover: { img: 'p03-cover.jpg', tag: 'Reel', title: 'The bike that *whistles*', sub: 'Supercharger explained in 30 s' } },
    { likes: '962', date: '1 week ago',
      caption: 'Wider is not always better. Grip depends on rubber, temperature and load — not just width.\n\n#tyres #trackday #carmyths',
      slides: [
        { img: 'p04-1.jpg', tag: 'Myth vs fact', title: 'Wider tyres = *more grip?*', pos: 'center' },
        { img: 'p04-2.jpg', tag: 'Fact', title: 'It’s about *the compound*', sub: 'A softer, warm tyre often beats a wider, cold one.' },
        { img: 'p04-3.jpg', tag: 'Trade-off', title: 'Width costs *you*', sub: 'More weight, more drag, heavier steering, earlier aquaplaning.' },
      ] },
    { likes: '1,547', date: '2 weeks ago',
      caption: 'First track day? Screenshot this. Five things people forget — and regret by lunchtime.\n\n#trackday #nurburgring #checklist',
      slides: [
        { img: 'p05-1.jpg', tag: 'Checklist', title: 'Track day: *5 things* you’ll forget', sub: 'Save this before your first session' },
        { img: 'p05-2.jpg', tag: '01', title: 'Tyre *pressure gauge*', sub: 'Pressures rise as tyres heat up. Check hot, adjust, check again.', pos: 'top' },
        { img: 'p05-3.jpg', tag: '02', title: 'Fresh *brake fluid*', sub: 'Old fluid boils on track. Long pedal = end of your day.', pos: 'top' },
        { img: 'p05-4.jpg', tag: '03', title: 'Empty *the car*', sub: 'Every loose bottle becomes a projectile under braking.', pos: 'top' },
        { img: 'p05-5.jpg', tag: '04–05', title: 'Water & *patience*', sub: 'Hydrate, and give the first laps to learning the lines.', cta: 'Save the list' },
      ] },
    { likes: '2,208', date: '2 weeks ago',
      caption: 'No numbers, no specs. Just the shapes. Which era is your favourite?\n\n#carposter #design',
      slides: [ { img: 'p06-1.jpg', overlay: false } ] },
    { likes: '1,106', date: '3 weeks ago',
      caption: 'Naked or fully faired — what should be your first “real” bike?\n\n#motorcycle #nakedbike #sportbike',
      slides: [
        { img: 'p07-1.jpg', tag: 'Bikes 101', title: 'Naked *or* sport bike?', sub: 'Your first big bike, explained' },
        { img: 'p07-2.jpg', tag: 'Naked', title: 'Upright & *forgiving*', sub: 'Comfortable in town, easy to see over traffic, cheaper to crash.' },
        { img: 'p07-3.jpg', tag: 'Sport', title: 'Tucked & *focused*', sub: 'Shines at speed and on track — punishes your wrists in traffic.' },
      ] },
    { likes: '4,019', date: '3 weeks ago',
      caption: 'Pin this above your garage door.\n\n#motorsport #quote',
      slides: [ { img: 'p08-1.jpg', title: 'Brake later. *Lift never.*', pos: 'center' } ] },
    { likes: '1,372', date: '1 month ago',
      caption: 'Daily driver or weekend track toy? Some cars refuse to choose.\n\n#bmwm3 #sportssedan',
      slides: [
        { img: 'p09-1.jpg', tag: 'Spec sheet', title: 'M3 Competition', specs: [['Engine','3.0 I6 twin-turbo'],['Layout','Front-engine'],['Seats','5 adults'],['Mood','Two cars in one']] },
        { img: 'p09-2.jpg', tag: 'Verdict', title: 'The *family* track car', sub: 'Drop the kids at school, set a lap time after lunch.' },
      ] },
    { likes: '880', date: '1 month ago',
      caption: 'Ever had the pedal go soft after a few hot laps? That’s fade. Here is why it happens.\n\n#brakes #trackday #howitworks',
      slides: [
        { img: 'p10-1.jpg', tag: 'How it works', title: 'Why brakes *fade*', sub: 'And how to stop it happening to you' },
        { img: 'p10-2.jpg', tag: 'Heat', title: 'Heat is *energy*', sub: 'Brakes turn speed into heat. Too much, too often — and the system gives up.' },
        { img: 'p10-3.jpg', tag: 'Fluid', title: 'Boiling *fluid*', sub: 'Gas bubbles compress. Your pedal sinks toward the floor.' },
        { img: 'p10-4.jpg', tag: 'Fix', title: 'Cool, *flush*, upgrade', sub: 'Cool-down laps, fresh high-temp fluid, track pads.', cta: 'Save for track day' },
      ] },
    { likes: '1,693', date: '1 month ago',
      caption: 'Road of the month: hairpins, views and zero traffic before 8 a.m. Where should we go next?\n\n#roadtrip #mountainroad',
      slides: [ { img: 'p11-1.jpg', tag: 'Road of the month', title: 'Alpine *hairpins*', sub: 'Go early. Thank us later.' } ] },
    { likes: '2,577', date: '1 month ago',
      caption: 'Same budget, completely different lives. Comment 4 or 2.\n\n#cars #motorcycles #poll',
      slides: [ { img: 'p12-1.jpg', tag: 'You choose', title: '4 wheels *or* 2?', sub: 'Comment 4 or 2 👇', pos: 'center' } ] },
  ],

  reels: [
    { views: '48.2K', cover: { img: 'r01.jpg', title: 'Cold *start*', pos: 'center' }, caption: 'Turn the volume up. #coldstart', likes: '5,120', date: '3 days ago' },
    { views: '31.7K', cover: { img: 'r02.jpg', title: 'Lean *angle*', pos: 'center' }, caption: 'How far can a superbike lean? #motogp', likes: '3,904', date: '1 week ago' },
    { views: '22.9K', cover: { img: 'r03.jpg', title: 'One lap *60 s*', pos: 'center' }, caption: 'A full lap, sped up. #onboard', likes: '2,330', date: '1 week ago' },
    { views: '18.4K', cover: { img: 'r04.jpg', title: 'Pit *stop*', pos: 'center' }, caption: 'Four tyres, two seconds. #pitstop', likes: '1,988', date: '2 weeks ago' },
    { views: '12.6K', cover: { img: 'r05.jpg', title: 'Rev *limiter*', pos: 'center' }, caption: 'Bang on the limiter. #sound', likes: '1,402', date: '3 weeks ago' },
    { views: '9.8K', cover: { img: 'r06.jpg', title: 'Wet *lap*', pos: 'center' }, caption: 'Same corner, rain vs dry. #trackday', likes: '1,050', date: '1 month ago' },
  ],
};
