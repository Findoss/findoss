/* eslint-disable */
;
function Templater(templateText) {
  return new Function(
    'data',
    `let output=${
      JSON.stringify(templateText)
        .replace(/{{ (.+?) }}/g, '"+($1)+"')
        .replace(/{% (.+?) %}/g, '";$1\noutput+="')
    };return output;`,
  );
}

function render(template, container, languageCode = 'en') {
  const renderTemplate = Templater(template);
  document.getElementById(container).innerHTML = renderTemplate(localizedData[languageCode]);
}

function switchLanguage(languageCode) {
  render(templateMain, 'app', languageCode);
}

// init
render(templateMain, 'app', window.location.hash.substr(1) || undefined);
