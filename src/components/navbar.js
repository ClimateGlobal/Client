import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="global-nav">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/ClimateGlobal/#/">Climate Global</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/ClimateGlobal/#/maps">Maps</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/ClimateGlobal/#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
