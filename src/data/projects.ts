export const categories = [
  'Vibe Coding',
  'Web',
  'Android',
  'Quality Assurance',
  'Database',
] as const;
export type Category = (typeof categories)[number];

export interface Project {
  title: string;
  kind: string;
  cats: readonly Category[];
  linkLabel: 'GitHub' | 'Live site';
  url: string;
}

export const projects: readonly Project[] = [
  {
    title: 'PracticeMart',
    kind: 'Android App',
    cats: ['Vibe Coding', 'Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/PracticeMarket.apps',
  },
  {
    title: 'Casebook',
    kind: 'Web App',
    cats: ['Vibe Coding', 'Web'],
    linkLabel: 'Live site',
    url: 'https://casebook-1qd.pages.dev/',
  },
  {
    title: 'Ravenhold Survivor',
    kind: 'Web Game',
    cats: ['Vibe Coding', 'Web'],
    linkLabel: 'Live site',
    url: 'https://dhandyjoe.github.io/ravenhold-survivor/',
  },
  {
    title: 'Spartio',
    kind: 'Web App',
    cats: ['Vibe Coding', 'Web'],
    linkLabel: 'Live site',
    url: 'https://dhandyjoe.github.io/spartio-app/',
  },
  {
    title: 'Plesir',
    kind: 'Web App',
    cats: ['Vibe Coding', 'Web'],
    linkLabel: 'Live site',
    url: 'https://plesir-app.vercel.app/',
  },
  {
    title: 'LesGoo',
    kind: 'Web App',
    cats: ['Web'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/LesGoo#welcome-to-lesgoo-make-your-roadtrip-easier',
  },
  {
    title: 'stockku',
    kind: 'Android App',
    cats: ['Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/dicoding.stockku.capstone#capstone-project---stockku',
  },
  {
    title: 'Database Design Spotify',
    kind: 'Database Design',
    cats: ['Database'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/database-design-spotify#database-design-spotify',
  },
  {
    title: 'KBM Appdevo',
    kind: 'Android App',
    cats: ['Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/appdevo-mobile',
  },
  {
    title: 'Appium Testing',
    kind: 'Simple Calculator App',
    cats: ['Quality Assurance'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/Appium-SimpleCalculatorApp',
  },
  {
    title: 'Movie-ku',
    kind: 'Android App',
    cats: ['Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/Movie-App-Local',
  },
  {
    title: 'Selenium Testing',
    kind: 'Cucumber · SauceDemo',
    cats: ['Quality Assurance'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/SeleniumCucumber-SauceDemo',
  },
  {
    title: 'Rest Assured Testing',
    kind: 'LesGoo API',
    cats: ['Quality Assurance'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/capstone-alterra-LesGoo-RestAssured#-reports',
  },
  {
    title: '7 Minute Work Out',
    kind: 'Android App',
    cats: ['Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/7-Minute-Work-Out',
  },
  {
    title: 'Quizz App',
    kind: 'Android App',
    cats: ['Android'],
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/SimpleQuizApp-Kotlin#simplequizapp-kotlin',
  },
];
