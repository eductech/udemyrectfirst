let count = 0;
const addOne = () => {
  console.log('addOne');
  count++;
};
const minusOne = () => {
  console.log('minusOne');
  count--;
};
const reset = () => {
  console.log('reset');
  count = 0;
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app'); 

ReactDOM.render(templateTwo, appRoot);
