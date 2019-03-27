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
import Search from './components/Search';
import Page404 from './components/Page404';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      surf: [],
      computers: [],
      loading: true
    };
  }

  componentDidMount() {
   this.performSearch('mountains', 'mountains');
   this.performSearch('cats', 'cats');
   this.performSearch('surf', 'surf');
   this.performSearch('computers', 'computers');
  }


  performSearch = (query, input) => {
    this.setState({loading: true});
    
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          [input]: response.data.photos.photo,
          loading: false
      });
    })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  
  render() {
    console.log(this.state.loading);
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch} />
          <Nav />
        
          <Switch>
            <Route exact path="/" render={ () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <Gallery data={this.state.mountains} /> } />
            <Route exact path="/Cats" render={ () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <Gallery  data={this.state.cats} /> } />
            <Route exact path="/Surf" render={ () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <Gallery  data={this.state.surf} /> } />
            <Route exact path="/Computers" render={ () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <Gallery  data={this.state.computers} /> } />
            <Route exact path="/results" render={ () => (this.state.loading) 
                    ? <p> Loading...</p> 
                    : <Gallery data={this.state.results} /> } />
            <Route component={Page404} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}
  
