import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/navbar';


class App extends Component {

  state = {
    search: "Ukraine",
  }

  updateSearch = (newSearch) => {
    this.setState({search: newSearch});
  }


  render() {
    return (
      <div className="App">
        <AppNavbar search={this.state.search} updateSearch={this.updateSearch}/>
      </div>
    );
  }
}

export default App;
