import React, { Component } from 'react';
import NavbarComponent from './Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import image from '../img/mbs3.jpeg';

const imgStyle = {
  width: '100%',
  margin: '0%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'repeat'
};

class Home extends Component {

  constructor(props) {
    super(props)
    this.isLoggedIn = true;
    this.currentBalance = 0;
  }

  render() {
    if (this.isLoggedIn) {
      return (
        <Container fluid>
          <Row>
            <NavbarComponent></NavbarComponent>
          </Row>
          <div className="m-5" style={{backgroundColor: '#F3F3F3', borderRadius: '10px', height: '300px'}}>
            <Col className="col-xs-12 m-5" >
              <p className="">Your current Balance: </p>
              <h3>${ this.currentBalance }</h3>
            </Col>
          </div>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row>
            <NavbarComponent></NavbarComponent>
          </Row>
          <Image style={imgStyle} src="https://user-images.githubusercontent.com/59989652/117399567-6d7c7d00-af33-11eb-9f48-8a0e0550bf3d.jpeg"/>
        </Container>
      );
    }
  }

}

export default Home;