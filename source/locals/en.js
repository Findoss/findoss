const localizedData = {};
localizedData.en = {
  local: 'en',
  name: 'Nikita Stroganov',
  profession: 'junior frontend developer',
  about: '[18]',
  age: new Date().getFullYear() - 1995,
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'St. Petersburg, Russia',
  family: 'Single',
  relocation: 'Yes, Moscow',
  projects: [{
    title: 'Duel game',
    link: '#',
    description: '[19]',
  }],
  works: [{
    dateStart: 2015,
    dateEnd: 2017,
    title: 'Freelance',
    subtitle: '[20]',
    description: '[21]',
  }],
  educations: [
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Learning with a mentor',
      subtitle: '[22]',
      description: '[23]',
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
      title: '[24]',
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
      title: '[25]',
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
    '[26]',
    '[27]',
    '[28]',
    '[29]',
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
