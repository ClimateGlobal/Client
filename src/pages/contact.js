import React from "react";
import firebase from "firebase";
import Typical from "react-typical";

// Importing React Bootstrap Components
import { Button, Form, Container } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";

const ContactApp = () => {
  const update = (event) => {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var reason = document.getElementById("reason").value;
    var message = document.getElementById("message").value;
    name = name.replace(/\s/g, "");
    firebase
      .database()
      .ref(`/emails/${name}/`)
      .update({
        name: name,
        email: email,
        reason: reason,
        message: message,
        replied: false,
      })
      .then(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("reason").value = "";
        document.getElementById("message").value = "";
        alert("Your message has been sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="bg-home">
      <Navigation />
      <div className="wrapper">
        {" "}
        <section>
          <Jumbo
            elements={
              <div>
                <h1>Contact</h1>
                <Typical
                  className="italic"
                  steps={["Send us a message", 1000]}
                  loop={1}
                  wrapper="p"
                />
              </div>
            }
          />
        </section>
        <section>
          <Container>
            <Form onSubmit={update}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="My name is Shahrukh Qureshi what's yours?"
                  id="name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nicetomeetyou@example.com"
                  id="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Reason</Form.Label>
                <Form.Control as="select" id="reason" required>
                  <option>Question</option>
                  <option>I want to get involved but don't know how to</option>
                  <option>Just wanted to say hi :)</option>
                  <option>Business</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="You may begin typing...."
                  rows={5}
                  id="message"
                  required
                />
              </Form.Group>
              <Button variant="light" type="submit" className="border-button">
                Send Message
              </Button>
            </Form>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default ContactApp;
