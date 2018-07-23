
const app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of the computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  console.log(app.options);
  renderApp();
};

const appRoot = document.getElementById('app'); 

const removeOptions = () => {
  app.options = [];
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{'no subtitle' && app.subtitle}</p>
      <p>{(app.options.length > 0) ? 'here your options' : 'no options'}</p>
      <ol>
        {
          app.options.map((value) => <li key={value}>{value}</li>)
        }
      </ol>
      <button onClick={removeOptions}>Clear</button>
      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Options</button>
      </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


