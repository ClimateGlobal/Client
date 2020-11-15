import React, { useContext } from "react";
import Typical from "react-typical";
import { AuthContext } from "../scripts/firebase/auth";
import { Row, Col, Button, Container } from "react-bootstrap";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";
import Navigation from "../components/navbar";

const ProfileApp = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="bg-home">
      <Navigation />
      <Jumbo
        elements={
          <Row className="justify-content-around">
            <Col sm={8}>
              <h1>Welcome</h1>
              <Typical
                className="italic"
                steps={[currentUser["email"], 1000]}
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
            <Col>
              <Button
                className="w-100 mt-5"
                variant="dark"
                href="/ClimateGlobal/#/ClimateGlobal/profile/inbox"
              >
                Inbox
              </Button>
            </Col>
            <Col>
              <Button className="w-100 mt-5" variant="dark">
                Other Button
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default ProfileApp;
