import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'; // Import React Bootstrap components

import About from './components/About';
import ContactForm from './components/ContactForm';
import Guriyaha from './components/Guriyaha';
import Images from './components/Images';
import XogtaShirkada from './components/XogtaShirkada';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              BetaHouse
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link> */}
                {/* <Nav.Link as={Link} to="/contactForm">
                  Contact Form
                </Nav.Link> */}
                <Nav.Link as={Link} to="/guriyaha">
                  Guriyaha
                </Nav.Link>
                <Nav.Link as={Link} to="/images">
                  Images
                </Nav.Link>
                <Nav.Link as={Link} to="/xogtaShirkada">
                  Xogta Shirkada
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/guriyaha" element={<Guriyaha />} />
          <Route path="/images" element={<Images />} />
          <Route path="/xogtaShirkada" element={<XogtaShirkada />} />
        </Routes>
      </div>
    </Router>
  );
}

// Create a Home component for the home page
const Home = () => {
  return (
    <div className="home-section">
      <Container>
        <h1>Welcome To BetaHouse</h1>
        <Row>
          {/* <Col md={6} class="upd">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu odio et felis bibendum lacinia. Nulla facilisi. Sed dictum
              tincidunt risus. Curabitur in congue ex. Proin volutpat, nisl nec
              iaculis pellentesque, sapien augue euismod magna, nec fringilla
              metus metus ac ex. Sed in scelerisque ex. Aenean in felis vel
              libero elementum scelerisque vel eu purus.
            </p>
            
          </Col> */}
          
          <Col md={6}>
            <div className="house-sample">
              <img
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="House Sample"
              />
              <h3>Second House</h3>
              <p>
                Labo Dabaq
              </p>
            </div>
            
          </Col>

          <Col md={6}>
            <div className="house-sample">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-HiVNkelrez-CwEhpsK9_WpzXl_PpBs6H0kxnv22eQ&s"
                alt="House Sample"
              />
              <h3>First House</h3>
              <p>
                Saddex Dabaq
              </p>
            </div>
            
          </Col>

          
          <Button as={Link} to="/guriyaha" variant="primary">
              View All Houses
            </Button>
        </Row>
        
      </Container>
    </div>
  );
};

export default App;
