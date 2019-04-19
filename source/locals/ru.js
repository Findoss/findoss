localizedData.ru = {
  local: 'ru',
  name: 'Строганов Никита',
  profession: 'frontend разработчик',
  about:
    'Мне нравится работа, в основном ориентированная на создание сложных интерфейсов. Я довольно аккуратен, тщательно слежу за качеством исполнения своей работы и не считаю написание тестов пустой тратой времени. В свободное время занимаюсь хобби. В целях повышения уровня программирования изучаю соответствующую литературу и использую следующие ресурсы: <a href="https://habr.com/" target="_blank">Habrahabr</a>, <a href="https://www.smashingmagazine.com" target="_blank">SmashingMagazine</a>, <a href="https://medium.com/" target="_blank">Medium</a>.',
  email: 'findoss@yandex.ru',
  foto: './public/images/foto.png',
  location: 'Россия,<wbr> Санкт-Петербург',
  relocation: '<strong>Не</strong> готов к переезду',
  projects: [
    {
      title: 'Monitoring tracker',
      // link: '#',
      description:
        'Система для мониторинга передвигающихся объектов с помощью GPS<br>Frontend: Vue + vuex + vue router, leaflet, i18n, fetch, websocket, postcss<br>Backend: Node.js (Koa, knex, i18n), MySQL<br> Tests: mocha + chai',
    },
    {
      title: 'Smart devices',
      link: 'https://github.com/Findoss/Frontend-smart-devices',
      description:
        'Клиентская часть для устройств на ESP используемых для создания "умного" дома<br>Frontend: Vue + vuex + vue router + vuetify, i18n, socket.io, css<br>Tests: Node.js<br>Первая версия была реализована с помощью JQuery + Bootstrap',
    },
    {
      title: 'Duel',
      link: 'https://github.com/Findoss/Duel',
      description:
        'Игра в жанре 3 в ряд<br>Frontend: Vue + vuex + vue router, i18n, websocket, css<br>Backend: Node.js (koa, mongoose), MongoDB<br>Tests: mocha + chai',
    },
    // {
    //   title: 'Stemy',
    //   link: 'https://github.com/Findoss/stemy',
    //   description:
    //     'Определение частей речи на основе Yandex.MyStem<br>Frontend: Vanilla JS, html, css<br>Backend: Node.js (express, Yandex.Stem)<br>',
    // },
  ],
  businessTrip: 'Готов к командировкам',
  remoteWork: 'Готов к удаленной работе',
  employment: [
    'проектная&nbsp;работа',
    'частичная&nbsp;занятость',
    'полная&nbsp;занятость',
  ],
  workSchedule: ['гибкий&nbsp;график', 'полный&nbsp;день'],
  works: [
    {
      dateStart: 2019,
      dateEnd: new Date().getFullYear(),
      untilNow: true,
      title: 'Freelance',
      subtitle:
        'Занимаюсь редактированием, поддержкой, созданием компонентов для SPA приложений, интеграция API в клиент, оптимизация и тестирование.',
      description:
        'Vue + vuex, React + redux, JQuery, vanilla js, css, styles, API.',
    },
    {
      dateStart: 2018,
      dateEnd: 2019,
      title: 'Medgadgets.ru',
      subtitle:
        'Занимался версткой (адаптивная, семантическая), созданием компонентов, реализация логики на клиенте, интеграция API, оптимизация.',
      description: 'React + redux',
    },
    {
      dateStart: 2016,
      dateEnd: 2018,
      title: 'Freelance',
      subtitle: 'Создал несколько сайтов и два небольших интернет-магазина.',
      description:
        'Использовал PHP 5, WordPress, Symfony2, Slim, Twig, MySQL, JQuery.',
    },
  ],
  educations: [
    {
      dateStart: 2018,
      dateEnd: 2018,
      title: 'Обучение с наставником',
      subtitle:
        'Изучил лучшие практики создания front-end части веб приложений, разобрался с актуальными инструментами.',
      description:
        'Основные темы: Patterns programming, js(es6+) vue.js, node.js, mongodb',
    },
    {
      dateStart: 2018,
      dateEnd: 2018,
      title: 'Курсы на Сoursera',
      subtitle: '',
      description:
        'HTML & CSS <a href="https://www.coursera.org/account/accomplishments/certificate/Y85FNDPTQ23K" target="_blank">сертификат 1</a><br>JavaScript <a href="https://www.coursera.org/account/accomplishments/certificate/39NTGCWFA7FF" target="_blank">сертификат 1</a><br>',
    },
    {
      dateStart: 2011,
      dateEnd: 2015,
      title: 'Государственный университет аэрокосмического приборостроения',
      subtitle: '230115 - Программирование в компьютерных системах',
      description: '',
    },
  ],
  professionalSkills: [
    {
      title: 'Занимался',
      skills: [
        '‧ Разработкой SPA на Vue.js, React.js (c нуля)<br>',
        '‧ Разработкой UI компонентов и версткой в соответствии с дизайном<br>',
        '‧ Интеграцией REST API на клиент<br>',
        '‧ Локализацией SPA<br>',
        '‧ Рефакторингом старого JS/jQuery кода<br>',
        '‧ Оптимизацией скорости загрузки и старой верстки<br>',
        '‧ Написанием документации API сервиса<br>',
        '‧ Написанием unit и интегационных тестов',
      ],
    },
    {
      title: 'Использовал',
      skills: [
        'JavaScript (и ES6+),',
        'HTML,',
        'CSS / PostCSS,',
        'Canvas, SVG,',
        'React.js / Redux,',
        'Node.js (Koa / Express),',
        'Gulp / Webpack,',
        'Mocha / Сhai / Karma,',
        'websocket,',
        'Babel,',
        'JWT,',
        'REST,',
        'Git',
      ],
    },
    {
      title: 'Имею представление о',
      skills: ['Node.js,', 'MongoDB,', 'MySQL'],
    },
    {
      title: 'В работе использую',
      skills: [
        'VS Code,',
        'ConEmu,',
        'Postman,',
        'GitKraken,',
        'Figma / Zepplin / Adobe Photoshop',
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
    {
      icon: '',
      name: 'Мой круг',
      link: 'https://moikrug.ru/findoss',
    },
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
    employment: 'Занятость',
    workSchedule: 'График<wbr> работы',
    age: 'Возраст',
    email: 'Эл. почта',
    currentTime: '<span class="caption">по<wbr> настоящее<wbr> время</span>',
    location: 'Адрес',
    family: 'Семейное положение',
  },
  f: {
    getTextYear: (time) => {
      const years = ['год', 'года', 'лет'];
      const remainder10 = time % 10;
      const remainder100 = time % 100;
      if (
        (remainder10 >= 5 && remainder10 <= 9) ||
        remainder10 === 0 ||
        (remainder100 > 10 && remainder100 <= 19)
      ) {
        if (time === 0) {
          return `менее ${years[1]}`;
        }
        return `${time} ${years[2]}`;
      } else if (remainder10 === 1) {
        return `${time} ${years[0]}`;
      } else if (remainder10 > 1 && remainder10 < 5) {
        return `${time} ${years[1]}`;
      }
    },
    getExperienceYear: arr =>
      arr.reduce((a, v) => {
        if (v.dateEnd) {
          return a + (v.dateEnd - v.dateStart);
        }
        return a + (new Date().getFullYear() - v.dateStart);
      }, 0),
  },
};
