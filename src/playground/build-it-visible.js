
let isHidden = true;

const changeStat = () => {
  isHidden = !isHidden;
  console.log(isHidden);
  renderApp();
};

const app = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeStat}>{ !!isHidden ? 'Show' : 'Hide' }</button>
      { !!isHidden ? undefined : <p>some text</p> }
    </div>
  );
  
  ReactDOM.render(template, app);
};

renderApp();

