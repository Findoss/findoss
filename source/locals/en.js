const localizedData = {};
localizedData.en = {
  local: 'en',
  name: 'Nikita Stroganov',
  profession: 'junior frontend developer',
  about:
    'I’m a begginer with front-end development skills. I like work that primarily focused on developing user interface.I’m quite accurate and I carefully monitor the quality.I don’t think it’s wasting time to write tests. I like to work in collaboration as working together means sharing resources efficiently and keeping people informed.As they say: «Two heads are better than one».In my spare time I am engaged in self - development.In order to improve my programmer techniques I read a lot of specific literature and use a variety of sources such as <a href = "https://habr.com/" target = "_blank" >Habrahabr</a>, <a href = "https://www.smashingmagazine.com" target = "_blank" > SmashingMagazine</a>, <a href="https://medium.com/" target="_blank">Medium</a>.',
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'St. Petersburg, Russia',
  relocation: 'No',
  projects: [
    {
      title: 'Monitoring tracker',
      // link: '#',
      description:
        '---<br>Frontend: Vue + vuex + vue router, leaflet, i18n, fetch, websocket, postcss<br>Backend: Node.js (Koa, knex, i18n), MySQL<br> Tests: mocha + chai',
    },
    {
      title: 'Smart devices',
      link: 'https://github.com/Findoss/Frontend-smart-devices',
      description:
        '---<br>Frontend: Vue + vuex + vue router + vuetify, i18n, websocket, css<br>Tests: Node.js<br>',
    },
    {
      title: 'Duel',
      link: 'https://github.com/Findoss/Duel',
      description:
        'Match-3 game<br>Frontend: Vue + vuex + vue router, i18n, websocket, css<br>Backend: Node.js (koa, mongoose), MongoDB<br>',
    },
    {
      title: 'Stemy',
      link: 'https://github.com/Findoss/stemy',
      description:
        'Parts of speech from the Yandex.MyStem<br>Frontend: Vanilla JS, html, css<br>Backend: Node.js (express, Yandex.Stem)<br>',
    },
  ],
  employment: ['project work', 'part-time', 'full-time'],
  workSchedule: ['remote work', 'flexible hours', 'full day'],
  works: [
    {
      dateStart: 2018,
      dateEnd: 2019,
      title: 'Freelance',
      subtitle: 'I modified and maintained websites.',
      description:
        'Vue + vuex, React + redux, JQuery, vanilla js, css, styles, API, ',
    },
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Medgadgets.ru',
      subtitle: '---',
      description: '',
    },
    {
      dateStart: 2015,
      dateEnd: 2017,
      title: 'Freelance',
      subtitle: 'I have developed sites and two small online shops.',
      description: 'Use PHP 5, WordPress, Symfony2, Slim, Twig, MySQL, JQuery.',
    },
  ],
  educations: [
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Learning with a mentor',
      subtitle:
        'I studied the best practices of creating front-end parts of web applications, figured out the actual tools.',
      description:
        'Main topics: Patterns programming, js(es6+) vue.js, node.js, mongodb',
    },
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Courses for Сoursera',
      subtitle:
        'HTML & CSS <a href="https://www.coursera.org/account/accomplishments/certificate/Y85FNDPTQ23K" target="_blank">certificate 1</a><br>JavaScript <a href="https://www.coursera.org/account/accomplishments/certificate/39NTGCWFA7FF" target="_blank">certificate 1</a><br>',
      description: '',
    },
    {
      dateStart: 2011,
      dateEnd: 2015,
      title: 'State University of Aerospace Instrumentation',
      subtitle: 'Programming in computer systems',
      description: '',
    },
  ],
  professionalSkills: [
    {
      title: 'I know',
      skills: [
        'JavaScript (ES6+)',
        'HTML',
        'CSS',
        'PostCSS',
        'Canvas',
        'SVG',
        'Vue.js',
        'Vuex',
        'Node.js',
        'Gulp',
        'Webpack',
        'Git',
      ],
    },
    {
      title: 'Understand the sense',
      skills: ['mocha', 'chai', 'karma', 'react'],
    },
  ],
  links: [
    {
      icon: 'linkedin',
      name: 'Linkedin',
      link: 'https://linkedin.com/in/findoss',
    },
    {
      icon: 'github',
      name: 'GitHub',
      link: 'https://github.com/Findoss',
    },
    {
      icon: 'vk',
      name: 'ВКонтакте',
      link: 'https://vk.com/findoss',
    },
    {
      icon: '',
      name: 'Мой круг',
      link: 'https://moikrug.ru/findoss',
    },
  ],
  hobbies: [
    'amateur hockey',
    'freestyle on rollers',
    'microcontroller programming',
    'travel',
  ],
  i: {
    about: 'about me',
    hobbies: 'Hobbies',
    info: 'detalis',
    links: 'links',
    personalSkills: 'personal skills',
    professionalSkills: 'proffessional skills',
    education: 'education',
    projects: 'projects',
    employment: 'Employment',
    workSchedule: 'Work schedule',
    work: 'work experience',
    name: 'Name',
    age: 'Age',
    email: 'Email',
    location: 'Location',
    family: 'Marital status',
    relocation: 'Relocation',
  },
  f: {
    getTextYear: (time) => {
      const years = ['year', 'years'];
      return time === 1 ? `${time} ${years[0]}` : `${time} ${years[1]}`;
    },
  },
};
