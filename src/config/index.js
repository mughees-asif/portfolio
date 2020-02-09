module.exports = {
  siteTitle: 'Mughees Asif | Software Engineer',
  siteDescription:
    'Mughees Asif is a software engineer based in London, UK who works with the latest web technologies and frameworks.',
  siteKeywords:
    'Mughees Asif, Mughees, Asif, mughees-asif, software engineer, front-end engineer, web developer, java, javascript, europe',
  siteUrl: 'https://bymughees.com',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'UA-142205463-2',
  name: 'Mughees Asif',
  location: 'London, UK',
  email: 'mughees460@gmail.com',
  github: 'https://github.com/mughees-asif',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mughees-asif',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mugheesasif',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
