import React, { Component } from 'react';
import logo from '../../logo.svg';

//import only necessary components from bootstrap 
//to reduce the amount of code sent to client
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './navbar.css';

class AppNavbar extends Component {

  state = {
    search: this.props.search,
  }

  // store input from the search bar in state
  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  // perform search when the search icon is pressed
  updateQuery = () => {
    this.props.updateSearch(this.state.search)
  }

  // perform search when the Enter key is pressed
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.updateSearch(event.target.value);
    }
  }


  render() {
    return ( 
      <Navbar expand="sm" bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top nav-img"
            alt="News logo icon"
          />
        </Navbar.Brand>
        
        {/* hide the tagline for extra-small screen sizes */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="#home">Your News. Your Way.</Navbar.Brand>
        </Navbar.Collapse>

        <Form inline>
          <div className="search-bar">
             {/* opted against using a button class for styling purposes, 
              used font awesome icon inside the search bar instead  */}
            <i className="icon fa fa-search" onClick={this.updateQuery}></i>
            <FormControl 
              name="search" 
              type="text" 
              placeholder={this.state.search} 
              className="input-text" 
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              ></FormControl>
          </div>
        </Form>
      </Navbar>
    )
  }
}
  
export default AppNavbar