import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import About from './components/About';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='background' >
          <Header />
          <Title />
        </div>
        <div className='about-container' >
          <About />
        </div>
      </div>
    );
  }
}

export default App;
