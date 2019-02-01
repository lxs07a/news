import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AppNavbar from './components/navbar';
import ArticleList from './components/articlelist';

//store API key in config file for security
import config from "./config.json"


class App extends Component {

  state = {
    search: "Amsterdam",
    articles: []
  }

  updateSearch = (query) => {
    this.setState({search: query})
    this.performSearch(query);
  }

  //use API to search New York Times
  performSearch = (query) => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${config.APIkey}`)
    
    //store the result in state
    .then(res => {
      // debugger
      this.setState({articles: res.data.response.docs});
    })
    .catch(error => {
      console.log(error);
    })
  }

  //search for default topic specified in state
  componentDidMount () {
    this.performSearch(this.state.search);
  }


  render() {

    return (
      <div className="App">
        <AppNavbar search={this.state.search} updateSearch={this.updateSearch}/>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
