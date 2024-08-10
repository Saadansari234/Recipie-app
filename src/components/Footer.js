// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>RecipeApp</h5>
            <p>Your go-to app for quick and delicious recipes.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>&copy; 2024 RecipeApp. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
