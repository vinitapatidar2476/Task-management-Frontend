import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-warning py-3 shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-dark">
            Task Management System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                as={Link}
                to="/adminLogin"
                className="text-dark fw-semibold"
              >
                Admin Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/developerLogin"
                className="text-dark fw-semibold"
              >
                Developer Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
