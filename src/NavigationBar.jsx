import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        <Container>
          <Nav>
            <NavLink href="/" className="navText navTexthover">
              Phonebook
            </NavLink>
            <NavLink href="/add-entry" className="navText navTexthover">
              Add Entry
            </NavLink>
            <NavLink href="/add-phone-book" className="navText navTexthover">
              Add Phonebook
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
