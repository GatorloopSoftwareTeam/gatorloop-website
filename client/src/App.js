import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
// import logo from './logo.svg';
import { Parallax } from "react-parallax";
import { Navbar, Nav } from 'react-bootstrap'

const insideStyles = {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function App()
{
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img src="/logo.png" height="45px" alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link className="navItem" href="#deets">HOME</Nav.Link>
          <Nav.Link className="navItem" href="#deets">TEAM</Nav.Link>
          <Nav.Link className="navItem" href="#memes">COMPETITION</Nav.Link>
          <Nav.Link className="navItem" href="#memes">SPONSORS</Nav.Link>
          <Nav.Link className="navItem" href="#memes">PRESS + MEDIA</Nav.Link>
          <Nav.Link className="navItem" href="#memes">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {/* <ParallaxProvider> */}
      <Parallax bgImage="image.jpg">
        <div id="home" style={{ height: window.screen.height - 180 }}>
          <div style={insideStyles}>
            <h1 style={{"fontSize" : "90px"}}>REVOLUTIONIZING TRANSPORTATION</h1>
          </div>
        </div>
      </Parallax>
    {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
