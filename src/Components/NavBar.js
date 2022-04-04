import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../css/navbar.css'

export default function NavBar() {

  const logout = () => {
    window.localStorage.clear();
    window.location.href =  "/";
  }
  return (
    <>
      <div className='parent-nav'>
        <Navbar  expand="lg">
          <Container fluid>
            <Navbar.Brand  style={{color: "#ffc107"}}>Jay Prakash</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ }} navbarScroll>
              <Link className='nav-link' to="/dashboard">Home</Link>
              <Link className='nav-link' to="/favorites">Favourite List</Link>
              <Link className='nav-link logout-btn' to="/" onClick={logout}>Logout</Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}