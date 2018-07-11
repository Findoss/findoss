localizedData.ru = {
  local: 'ru',
  name: 'Строганов Никита',
  profession: 'начинающий frontend разработчик',
  about: 'Я начинающий Front-end разработчик. Мне нравится работа, в основном ориентированная на создание сложных интерфейсов. Я довольно аккуратен, тщательно слежу за качеством исполнения своей работы и не считаю написание тестов пустой тратой времени. Мне нравится работать в команде, активно обмениваясь знаниями и обсуждая проблемы. Как говорится: "Одна голова хорошо, а две лучше". В свободное время занимаюсь саморазвитием. В целях повышения уровня программирования изучаю соответствующую литературу и использую следующие ресурсы: <a href="https://habr.com/" target="_blank">Habrahabr</a>, <a href="https://www.smashingmagazine.com" target="_blank">SmashingMagazine</a>, <a href="https://medium.com/" target="_blank">Medium</a>.',
  age: new Date().getFullYear() - 1995,
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'Россия,<br> Санкт-Петербург',
  family: 'Холост',
  relocation: 'Нет',
  projects: [{
    title: 'Duel game',
    link: '#',
    description: 'скоро',
  }],
  works: [{
    dateStart: 2015,
    dateEnd: 2017,
    title: 'Freelance',
    subtitle: 'Создал несколько сайтов и два небольших интернет-магазина.',
    description: 'Использовал PHP 5, WordPress, Symfony2, Slim, Twig, MySQL, JQuery.',
  }],
  educations: [
    {
      dateStart: 2017,
      dateEnd: 2018,
      title: 'Обучение с наставником',
      subtitle: 'Изучил лучшие практики создания front-end части веб приложений, разобрался с актуальными инструментами.',
      description: 'Основные темы: Patterns programming, js(es6+) vue.js, node.js, mongodb',
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
      title: 'Я знаю',
      skills: [
        'JavaScript (и ES6+)',
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
      title: 'Имею представление о',
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
    'любительский хоккей',
    'фристайл на роликах',
    'программирование микроконтроллеров',
    'туризм',
  ],
  i: {
    about: 'Обо мне',
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
