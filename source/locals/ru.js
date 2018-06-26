localizedData.ru = {
  local: 'ru',
  name: 'Строганов Никита',
  profession: 'начинающий frontend разработчик',
  about: '[06]',
  age: new Date().getFullYear() - 1995,
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'Россия, Санкт-Петербург',
  family: 'Холост',
  relocation: 'Да, Москва',
  projects: [{
    title: 'Duel game',
    link: '#',
    description: '[07]',
  }],
  works: [{
    dateStart: 2015,
    dateEnd: 2017,
    title: 'Freelance',
    subtitle: '[08]',
    description: '[09]',
  }],
  educations: [
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Обучение с наставником',
      subtitle: '[10]',
      description: '[11]',
    },
    {
      dateStart: 2010,
      dateEnd: 2015,
      title: 'Государственный университет аэрокосмического приборостроения',
      subtitle: 'Программирование в компьютерных системах',
      description: '',
    },
  ],
  professionalSkills: [
    {
      title: '[12]',
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
      title: '[13]',
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
    '[14]',
    '[15]',
    '[16]',
    '[17]',
  ],
  hobbies: [
    'любительский хоккей',
    'фристайл на роликах',
    'программирование микроконтроллеров',
    'туризм',
  ],
  i: {
    about: 'Немного обо мне',
    hobbies: 'Увлечения',
    info: 'Профиль',
    links: 'Ссылки',
    personalSkills: 'Личные качества',
    professionalSkills: 'Профессиональные навыки',
    education: 'Образование',
    projects: 'Проекты',
    work: 'Опыт работы',
    name: 'Имя',
    age: 'Возраст',
    email: 'Эл. почта',
    location: 'Адрес',
    family: 'Семейное положение',
    relocation: 'Готов к переездам',
  },
  f: {
    getTextYear: (time) => {
      const years = ['год', 'года', 'лет'];
      const remainder10 = time % 10;
      const remainder100 = time % 100;
      if (
        (remainder10 >= 5 && remainder10 <= 9 || remainder10 === 0) ||
        (remainder100 > 10 && remainder100 <= 19)) {
        return `${time} ${years[2]}`;
      } else if (remainder10 === 1) {
        return `${time} ${years[0]}`;
      } else if (remainder10 > 1 && remainder10 < 5) {
        return `${time} ${years[1]}`;
      }
    },
  },
};
