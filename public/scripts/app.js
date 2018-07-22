'use strict';

var app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of the computer',
  options: ['one', 'two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    'no subtitle' && app.subtitle
  ),
  app.options.length > 0 ? 'here your options' : 'no options',
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Mike'
  // location: 'New York'
};
function getLocation(location) {
  return !!location ? location : 'Unknown';
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'This is info ',
    getLocation(user.location)
  ),
  React.createElement(
    'p',
    null,
    'This is info 2'
  )
);

var templateThree = React.createElement(
  'h1',
  null,
  React.createElement('p', null),
  React.createElement('p', null),
  React.createElement('p', null)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
