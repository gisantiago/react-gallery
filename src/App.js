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
import Search from './components/Search';
import Page404 from './components/Page404';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'mountains') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          items: response.data.photos.photo,
          loading: false
      });
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
          <Search onSearch={this.performSearch} />
          <Nav />
           
          <Switch>
            {
              (this.state.loading)
              ? <p>Loading...</p>
              :  <Route exact path="/" render={ () => <Gallery data={this.state.items} /> } />
            }
            <Route exact path="/Cats" render={ () => <Cats data={this.state.items} /> } />
            <Route exact path="/Dogs" render={ () => <Dogs data={this.state.items} /> } />
            <Route exact path="/Computers" render={ () => <Computers data={this.state.items} /> } />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
  
