import React, { Component } from 'react';
import axios from 'axios';
// import { Route, Link } from 'react-router-dom'
import './App.css';
import AppNavbar from './components/navbar';
import ArticleBox from './components/articlebox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//store API key in config file for security
import config from "./config.json"



class App extends Component {

  state = {
    search: "Amsterdam",
    articles: []
  }

  //use API to search New York Times
  performSearch = (query) => {
    this.setState({search: query})
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${config.APIkey}`)
    
    //store the result in state
    .then(res => {
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
    var ArticleBoxes = this.state.articles
    .map((article) =>
      <ArticleBox 
        title = {article.headline.main}
        imageUrl = {article.multimedia[8]}
        summary = {article.snippet}
        url = {article.web_url}
        key = {article._id}
      />
    )

    return (
      <div className="App">
        <AppNavbar search={this.state.search} updateSearch={this.performSearch}/>
        <Container>
          <Row>
            {ArticleBoxes}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
