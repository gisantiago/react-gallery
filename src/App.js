import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Gallery from './components/Gallery';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';
import NotFound from './components/NotFound';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      keyword: '',
      items: []
    };
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cars&per_page=16&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          items: responseData.photos.photo });
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    console.log(this.state.items);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          
          <Switch>
            <Route exact data={this.state.items} path="/" component={Gallery} />
            <Route path="/Cats" component={Cats} />
            <Route path="/Dogs" component={Dogs} />
            <Route path="/Computers" component={Computers} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  
