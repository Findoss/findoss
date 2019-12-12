// global templater
// global templateMain
// global switchLanguage
// global LOCALIZED_EN
// global LOCALIZED_RU

const DEFALT_LOCAL = 'ru';

const localizedData = {};
// localizedData.en = LOCALIZED_EN;
localizedData.ru = LOCALIZED_RU;

function render(template, container, languageCode = DEFALT_LOCAL) {
  const html = templater(template)(localizedData[languageCode]);
  document.getElementById(container).innerHTML = html;
}

function switchLanguage(languageCode) {
  render(templateMain, 'app', languageCode);
}

render(templateMain, 'app', window.location.hash.substr(1) || undefined);
