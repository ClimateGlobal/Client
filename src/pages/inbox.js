import React from "react";
import Typical from "react-typical";
import Axios from "axios";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";
import Navigation from "../components/navbar";
import DataTable from "../components/react-table";

class InboxApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: "",
      disabled: false,
      emailSent: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ disabled: true });
    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
          alert("Email has been sent!");
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSent: false,
        });
        alert(err);
      });
  };
  render() {
    return (
      <div className="bg-home">
        <Navigation />
        <Jumbo
          elements={
            <Row>
              <Col sm={8}>
                <h1>Inbox</h1>
                <Typical
                  className="italic"
                  steps={[
                    "Read and Respond to your supporter's messages!",
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
            <Row>
              <Col sm={4}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="test"
                      placeholder="Name"
                      name="name"
                      onChange={this.handleChange}
                      id="name"
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nicetomeetyou@example.com"
                      name="email"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="RE: -----"
                      name="subject"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="You may begin typing...."
                      rows={5}
                      name="message"
                      onChange={this.handleChange}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="light"
                    type="submit"
                    className="border-button"
                  >
                    Send Message
                  </Button>
                </Form>
              </Col>
              <Col sm={8}>
                <p>All Messages</p>
                <DataTable node="emails" />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default InboxApp;
