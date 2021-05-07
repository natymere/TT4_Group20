import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class NavbarComponent extends Component {

  constructor(props) {
    super(props);
    this.isLoggedIn = this.props.isLoggedIn;
  }

  render() { 
      if (this.isLoggedIn) {
        return (      
          <Navbar bg="light" expand="lg" className="">
            <Navbar.Brand href="/Home">E-Wallet</Navbar.Brand>
            <Nav>
              <Nav.Link href="/Transaction">Transaction</Nav.Link>
              <Nav.Link href="/Transactionhistory">Transaction History</Nav.Link>
            </Nav>
            <Button inline className="float-right mr-auto" variant="outline-primary">
              <Link style={{float: 'right'}} to="/Home" >Logout</Link>
            </Button>
          </Navbar>);
      } else {
          return (
            <Navbar bg="light" expand="lg" className="justify-content-between">
            <Navbar.Brand href="/Home">E-Wallet</Navbar.Brand>
            <Button inline className="float-right" variant="outline-primary">
                <Link style={{float: 'right'}} to="/Login" >Login</Link>
            </Button>
          </Navbar>);
      }

  }
}

export default NavbarComponent;