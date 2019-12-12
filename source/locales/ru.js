const LOCALIZED_RU = {
  local: 'ru',
  name: 'Строганов Никита',
  profession: 'frontend разработчик',
  about:
    'Мне нравится работа, в основном ориентированная на создание сложных интерфейсов. Я довольно аккуратен, тщательно слежу за качеством исполнения своей работы и не считаю написание тестов пустой тратой времени. В свободное время занимаюсь хобби. В целях повышения уровня программирования изучаю соответствующую литературу и использую следующие ресурсы: <a href="https://habr.com/" target="_blank">Habrahabr</a>, <a href="https://www.smashingmagazine.com" target="_blank">SmashingMagazine</a>, <a href="https://medium.com/" target="_blank">Medium</a>.',
  email: 'findoss@yandex.ru',
  foto: 'images/foto.png',
  location: 'Россия,<wbr> Санкт-Петербург',
  relocation: '<strong>Не</strong> готов к переезду',
  projects: [
    {
      title: 'Monitoring tracker',
      description:
        'Система для спутникового мониторинга и удалённого управления техникой.<br>Frontend: Vue + vuex + vue router, leaflet, i18n, fetch, websocket, postcss<br>Backend: Node.js (Koa, knex, i18n), MySQL<br> Tests: mocha + chai',
    },
    {
      title: 'Smart devices',
      link: 'https://github.com/Findoss/Frontend-smart-devices',
      description:
        'Клиентская часть для устройств на ESP используемых для создания "умного" дома<br>Frontend: Vue + vuex + vue router + vuetify, i18n, socket.io, css<br>Tests: Node.js<br>Первая версия была реализована с помощью JQuery + Bootstrap',
    },
    {
      title: 'Hunt map',
      link: 'https://github.com/Findoss/Hunt-map',
      description:
        'Интерактивная карты для игры Hunt-Showdown<br>Frontend: Vanilla JS, html, css<br>Backend: Google Firebase<br>',
    },
    {
      title: 'Duel',
      link: 'https://github.com/Findoss/Duel',
      description:
        'Игра в жанре 3 в ряд<br>Frontend: Vue + vuex + vue router, i18n, websocket, css<br>Backend: Node.js (koa, mongoose), MongoDB<br>Tests: mocha + chai',
    },
  ],
  businessTrip: 'Готов к командировкам',
  remoteWork: 'Готов к удаленной работе',
  employment: ['полная&nbsp;занятость'],
  workSchedule: ['полный&nbsp;день'],
  works: [
    {
      dateStart: 2019,
      dateEnd: new Date().getFullYear(),
      untilNow: true,
      title: 'Freelance',
      subtitle: '',
      description: [
        'Разработал SPA на Vue и серверную часть на Node.js + MySQL + Docker для системы спутникового мониторинга и удалённого управления техникой. Написал документацию к API системы.',
        'Разработал интерфейс на Vue для кормушки для животных и автоматического полива домашних растений. Локализовал проект на английский и русский язык.',
        'Создал интерактивные карты для игры с помощью библиотеки Lafaet.js и сервиса Google Firebase.',
        'Покрыл unit тестами c 0 до 97% RESTful API интернет-магазина на Node.js.',
      ],
    },
    {
      dateStart: 2018,
      dateEnd: 2019,
      title: 'Medgadgets.ru',
      subtitle: '',
      description: [
        'Написал новые и дополнил старые компоненты для React.',
        'Адаптировал верстку интернет-магазина под поисковые системы.',
        'Переработал страницу оформления заказа со сложной многостраничной формой.',
        'Внедрил отслеживание ошибок и аналитику.',
      ],
    },
    {
      dateStart: 2016,
      dateEnd: 2018,
      title: 'Freelance',
      subtitle: '',
      description: [
        'Создал несколько сайтов и два небольших интернет-магазина.<br>Использовал PHP 5, WordPress, Symfony2, Slim, Twig, MySQL, JQuery.',
      ],
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
    // {
    //   title: 'Занимаюсь',
    //   skills: [
    //     '‧ Разработкой SPA на Vue.js<br>',
    //     '‧ Разработкой UI компонентов и версткой<br>',
    //     '‧ Интеграцией REST API на клиент<br>',
    //     '‧ Локализацией SPA<br>',
    //     '‧ Рефакторингом старого JS/jQuery кода<br>',
    //     '‧ Написанием документации API сервиса<br>',
    //     '‧ Написанием unit и интегационных тестов',
    //   ],
    // },
    {
      title: 'Использовал',
      skills: [
        'JavaScript (и ES6+),',
        'HTML,',
        'CSS / PostCSS,',
        'Canvas, SVG,',
        'React.js / Redux,',
        'Gulp / Webpack,',
        'websocket,',
        'Babel,',
        'Git',
        'Node.js,',
        'MongoDB,',
        'MySQL',
      ],
    },
    {
      title: 'Использовал на сервере',
      skills: [
        'Node.js (Koa / Express),',
        'Mocha / Сhai / Karma,',
        'JWT,',
        'Node.js,',
        'MongoDB,',
        'MySQL',
      ],
    },
    {
      title: 'Имею представление о',
      skills: ['Docker,', 'Kubernetes,', 'Redis,', 'RabbitMQ'],
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
  hobbies: ['любительский хоккей', 'фристайл на роликах', 'гeймдизайн'],
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

if (!this.window) module.exports = LOCALIZED_RU;
