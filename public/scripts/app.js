'use strict';

var isHidden = true;

var changeStat = function changeStat() {
  isHidden = !isHidden;
  console.log(isHidden);
  renderApp();
};

var app = document.getElementById("app");

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: changeStat },
      !!isHidden ? 'Show' : 'Hide'
    ),
    !!isHidden ? undefined : React.createElement(
      'p',
      null,
      'some text'
    )
  );

  ReactDOM.render(template, app);
};

renderApp();
