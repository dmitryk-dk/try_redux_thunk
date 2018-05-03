import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import addNames from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
    };
  }

  _handleClick = (name) => {
    this.setState(prevState => ({
      name,
    }));
  }

  render() {
    const { name, } = this.state;
    const { names, fetchNames, } = this.props;
    return (
      <div className="App">
        <button onClick={fetchNames}>Fetch names</button>
        {
          names ?
          names.map(name => (<li key={name.name} onClick={() => this._handleClick(name.name)}>{name.name}</li>))
          : null
        }
        <span>{name}</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchNames: () => dispatch(addNames())
  };
};

const mapStateToProps = (state) => ({
  names: state.names,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
