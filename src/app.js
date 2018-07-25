class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState( {options: []} );
  }

  handlePick() {
    alert(this.state.options[Math.floor(this.state.options.length * Math.random())]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Please enter some value!!!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option exists!!!';
    }

    this.setState((prevState) => {
      return {options: prevState.options.concat(option)};
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of the computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Options options={this.state.options} deleteOptions={this.handleDeleteOptions}/>
        <AddOption addOption={this.handleAddOption}/>
        <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.pick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.deleteOptions}>Remove All</button>
        <p>Add option component here. Options length = {this.props.options.length}</p>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>
        {this.props.optionText}
      </p>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.addOption(option);
    this.setState({error});

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
