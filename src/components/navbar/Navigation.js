import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom'
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap'


const Navigation = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/">Diagnostic Differentials</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <NavLink to="/about"> About </NavLink>
        </NavItem>
        <NavItem eventKey={2}>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
