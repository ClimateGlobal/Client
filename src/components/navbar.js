import React, { useContext } from "react";
import { AuthContext } from "../scripts/firebase/auth";
import firebase from "firebase";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You have been signed out");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };
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
            {currentUser ? (
              <Nav>
                <Nav.Link href="/ClimateGlobal/#/ClimateGlobal/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link href="/ClimateGlobal/#/login">Login</Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navigation;
