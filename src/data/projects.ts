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
  cat: Category;
  linkLabel: 'GitHub' | 'Live site';
  url: string;
}

export const projects: readonly Project[] = [
  {
    title: 'Casebook',
    kind: 'Web App',
    cat: 'Vibe Coding',
    linkLabel: 'Live site',
    url: 'https://casebook-1qd.pages.dev/',
  },
  {
    title: 'Ravenhold Survivor',
    kind: 'Web Game',
    cat: 'Vibe Coding',
    linkLabel: 'Live site',
    url: 'https://dhandyjoe.github.io/ravenhold-survivor/',
  },
  {
    title: 'Spartio',
    kind: 'Web App',
    cat: 'Vibe Coding',
    linkLabel: 'Live site',
    url: 'https://dhandyjoe.github.io/spartio-app/',
  },
  {
    title: 'Plesir',
    kind: 'Web App',
    cat: 'Vibe Coding',
    linkLabel: 'Live site',
    url: 'https://plesir-app.vercel.app/',
  },
  {
    title: 'LesGoo',
    kind: 'Web App',
    cat: 'Web',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/LesGoo#welcome-to-lesgoo-make-your-roadtrip-easier',
  },
  {
    title: 'stockku',
    kind: 'Android App',
    cat: 'Android',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/dicoding.stockku.capstone#capstone-project---stockku',
  },
  {
    title: 'Database Design Spotify',
    kind: 'Database Design',
    cat: 'Database',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/database-design-spotify#database-design-spotify',
  },
  {
    title: 'KBM Appdevo',
    kind: 'Android App',
    cat: 'Android',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/appdevo-mobile',
  },
  {
    title: 'Appium Testing',
    kind: 'Simple Calculator App',
    cat: 'Quality Assurance',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/Appium-SimpleCalculatorApp',
  },
  {
    title: 'Movie-ku',
    kind: 'Android App',
    cat: 'Android',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/Movie-App-Local',
  },
  {
    title: 'Selenium Testing',
    kind: 'Cucumber · SauceDemo',
    cat: 'Quality Assurance',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/SeleniumCucumber-SauceDemo',
  },
  {
    title: 'Rest Assured Testing',
    kind: 'LesGoo API',
    cat: 'Quality Assurance',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/capstone-alterra-LesGoo-RestAssured#-reports',
  },
  {
    title: '7 Minute Work Out',
    kind: 'Android App',
    cat: 'Android',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/7-Minute-Work-Out',
  },
  {
    title: 'Quizz App',
    kind: 'Android App',
    cat: 'Android',
    linkLabel: 'GitHub',
    url: 'https://github.com/dhandyjoe/SimpleQuizApp-Kotlin#simplequizapp-kotlin',
  },
];
