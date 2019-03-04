import React, { Component } from 'react';
import apiKey from './config';

import './index.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Search from './components/Search';
import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Search />

        <Nav />

        <Gallery />
      </div>
    );
  }
}

export default App;
