import React, { useCallback } from "react";
import firebase from "firebase";
import Typical from "react-typical";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

// Importing my Components
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";
import Navigation from "../components/navbar";

const LoginApp = ({ history }) => {
  const loginUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/profile");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="bg-home">
      <Navigation />
      <Jumbo
        elements={
          <Row>
            <Col sm={8}>
              <h1>Login</h1>
              <Typical
                className="italic"
                steps={[
                  "Powered with Fire",
                  100,
                  "Powered with Google Firebase Authentication",
                  1000,
                ]}
                loop={1}
                wrapper="p"
              />
            </Col>
          </Row>
        }
      />
      <div className="wrapper">
        <Container>
          <Form onSubmit={loginUser}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default LoginApp;
