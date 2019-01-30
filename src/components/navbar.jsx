import React, { Component } from 'react'
import logo from '../logo.svg';

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

  handleChange = (event) => {
    this.props.updateSearch(event.target.value); 
  }


  render() {
    return ( 
      <Navbar expand="sm" bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="News logo icon"
          />
        </Navbar.Brand>
        
        {/* hide the tagline for extra-small screen sizes */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="#home">Your News. Your Way.</Navbar.Brand>
        </Navbar.Collapse>

        <Form inline>
          <div className="search-bar">
            <i className="icon fa fa-search"></i>
            <FormControl name="search" type="text" placeholder={this.state.search} className="input-text" onChange={this.handleChange}></FormControl>
          </div>
        </Form>
      </Navbar>
    )
  }
}
  
export default AppNavbar