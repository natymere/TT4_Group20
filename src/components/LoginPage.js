import React from 'react'
import NavbarComponent from './Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function LoginPage() {
  return (
    <Container fluid>
      <Row>
        <NavbarComponent></NavbarComponent>
      </Row>
    </Container>
  );
}
