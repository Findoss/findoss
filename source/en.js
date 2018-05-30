
const localizedData = {};
localizedData.en = {
  name: '<strong>Nikita Stroganov</strong>',
  profession: 'junior frontend developer',
  about: '**Привет меня зовут Никита, занимаюсь саморазвитием, чиаю <a href="https://habr.com/" target="_blank">Habrahabr</a>, <a href="https://www.smashingmagazine.com" target="_blank">SmashingMagazine</a>, <a href="https://medium.com/" target="_blank">Medium</a>**',
  age: new Date().getFullYear() - 1995,
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'St. Petersburg, Russia',
  projects: [{
    title: 'Duel game',
    link: '#',
    description: '** **',
  }],
  works: [{
    dateStart: 2015,
    dateEnd: 2017,
    title: 'Freelance',
    subtitle: '**Делал сайты небольших магазинов, верстал сайты-визитки.**',
    description: '**Использовал** PHP 5,  WordPress, Symfony2, Slim, Twig, MySQL',
  }],
  educations: [{
    dateStart: 2017,
    dateEnd: 2018,
    title: 'Learning with a mentor',
    subtitle: '**Изучил современные практики создания фронтэнд части веб приложений, разобрался с актуальными инструментами.**',
    description: '**Основные изученые темы:** Patterns programming, js(es6+) vue.js, node.js, mongodb',
  },
  {
    dateStart: 2010,
    dateEnd: 2015,
    title: '<strong>State University of Aerospace Instrumentation</strong>',
    subtitle: 'Programming in computer systems',
    description: '',
  },
  ],
  professionalSkills: [{
    title: '**I know**',
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
    title: '**Have a concept**',
    skills: [
      'mocha',
      'chai',
      'karma',
      'react',
    ],
  },
  ],
  links: [{
    icon: 'linkedin',
    name: 'Linkedin',
    link: 'https://linkedin.com/in/findoss',
  },
  {
    icon: 'github',
    name: 'Github',
    link: 'https://github.com/Findoss',
  },
  {
    icon: 'vk',
    name: 'ВКонтакте',
    link: 'https://vk.com/findoss',
  },
  ],
  personalSkills: [
    'Attentive',
    'conscientious',
    'quick learner',
    'improvement-oriented',
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
    info: 'info',
    links: 'links',
    personalSkills: 'personal skills',
    professionalSkills: 'proffessional skills',
    education: 'education',
    projects: 'projects',
    references: 'references',
    work: 'work experience',
    infoTable: [
      'Name',
      'Age',
      'Email',
      'Location',
    ],
  },
  f: {
    setYear: (year) => {
      const years = ['year', 'years'];
      return year === 1 ? `${year} ${years[0]}` : `${year} ${years[1]}`;
    },
  },
};
