const localizedData = {};
localizedData.en = {
  local: 'en',
  name: 'Nikita Stroganov',
  profession: 'junior frontend developer',
  about: `I’m a begginer with front-end development skills. I like work that primarily focused on developing user interface.I’m quite accurate and I carefully monitor the quality.I don’t think it’s wasting time to write tests. I like to work in collaboration as working together means sharing resources efficiently and keeping people informed.As they say: «Two heads are better than one».In my spare time I am engaged in self - development.In order to improve my programmer techniques I read a lot of specific literature and use a variety of sources such as < a href = "https://habr.com/" target = "_blank" >Habrahabr</a>, < a href = "https://www.smashingmagazine.com" target = "_blank" > SmashingMagazine</a >, <a href="https://medium.com/" target="_blank">Medium</a>.`,
  age: new Date().getFullYear() - 1995,
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'St. Petersburg, Russia',
  family: 'Single',
  relocation: 'Yes, Moscow',
  projects: [{
    title: 'Duel game',
    link: '#',
    description: 'in process',
  }],
  works: [{
    dateStart: 2015,
    dateEnd: 2017,
    title: 'Freelance',
    subtitle: 'I have developed sites and two small online shops.',
    description: 'Use PHP 5, WordPress, Symfony2, Slim, Twig, MySQL, JQuery.',
  }],
  educations: [
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Learning with a mentor',
      subtitle: 'I studied the best practices of creating front-end parts of web applications, figured out the actual tools.',
      description: 'Main topics: Patterns programming, js(es6+) vue.js, node.js, mongodb',
    },
    {
      dateStart: 2010,
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
      skills: [
        'mocha',
        'chai',
        'karma',
        'react',
      ],
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
    '',
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
