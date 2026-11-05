export const site = {
  name: 'Dhandy Joenathan',
  handle: 'dhandyjoe',
  role: 'Software QA · SDET · AI-driven',
  tagline:
    'Software Quality Assurance Engineer | SDET | Vibe Coding Enthusiast | Applying AI to test automation with Selenium, Appium and Claude Code',
  email: 'dhanjoenkp@gmail.com',
  linkedin: { url: 'https://www.linkedin.com/in/dhandyjoenathan/', label: 'in/dhandyjoenathan' },
  github: { url: 'https://github.com/dhandyjoe/', label: 'github.com/dhandyjoe' },
  resume: '/cv/DhandyJoenathan_QE_Resume_update.pdf',
  url: 'https://dhandyjoe.github.io/',
  description:
    'Portfolio of Dhandy Joenathan, a Software Quality Assurance Engineer and SDET specialising in test automation for web and mobile, applying AI to automation testing and vibe coding real products.',
} as const;

// The hero's rotating word animates through these: keep the rot/rotw keyframes in motion.css in step.
export const focus = [
  'Quality Assurance',
  'Test Automation',
  'AI-assisted Testing',
  'Vibe Coding',
  'SDET',
  'Mobile & Web',
] as const;

// Highlighted in the hero chips.
export const aiFocus: readonly string[] = ['AI-assisted Testing', 'Vibe Coding'];

export const aiHighlights = [
  {
    title: 'AI-assisted test automation',
    text: 'Generating and maintaining automated tests with AI, including self-healing locators.',
  },
  {
    title: 'AI-assisted debugging',
    text: 'Triaging bugs and flaky failures faster, with AI reading the logs alongside me.',
  },
  {
    title: 'Vibe-coded products',
    text: 'Shipping real web apps and games with Claude Code, tested like any other release.',
  },
] as const;
