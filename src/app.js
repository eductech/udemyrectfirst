
const app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of the computer',
  options: ['one', 'two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{'no subtitle' && app.subtitle}</p>
    {(app.options.length > 0) ? 'here your options' : 'no options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
</div>
);

const user = {
  name: 'Mike'
  // location: 'New York'
};
function getLocation(location) {
  return !!location ? location : 'Unknown';
}

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>This is info {getLocation(user.location)}</p>
    <p>This is info 2</p>
</div>
);

const templateThree = (
  <h1>
    <p></p>
    <p></p>
    <p></p>
  </h1>
);

const appRoot = document.getElementById('app'); 

ReactDOM.render(template, appRoot);
