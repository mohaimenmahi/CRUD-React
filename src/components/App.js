import React, { Component } from 'react';
import '../App.css';
import Router from './Router';
import AddItem from './AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to the React Mern App</h2>
        {' '}
        <Router />
        {' '}
        <AddItem />
      </div>
    );
  }
}

export default App;
