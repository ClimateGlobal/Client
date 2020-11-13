import React from "react";
import Typical from "react-typical";

// Importing React Bootstrap Components
import { Container, Row, Button, Image, Col } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navbar";
import Cards from "../components/card";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";

// Importing Images
import NDGAINMAP from "../assets/images/maps-page/NDGain-Map.PNG";

const MapsApp = () => {
  return (
    <div className="bg-home">
      <Navigation />
      <section>
        <Jumbo
          elements={
            <Row>
              <Col sm={8}>
                <h1>Maps</h1>
                <Typical
                  className="italic"
                  steps={["Click each Map to view them!", 1000]}
                  loop={1}
                  wrapper="p"
                />
              </Col>
            </Row>
          }
        />
      </section>
      <div className="wrapper">
        <Container>
          <Row className="justify-content-center">
            <Col sm={8}>
              <h3 className="text-center">Vulnerability Map</h3>
              <p className="word-wrap mt-5 text-center">
                The ND-GAIN Country Index summarizes each country's
                vulnerability to Climate Change, factoring in other global
                challenges. This data can be visualized onto a map to make it
                easier to interpret.
              </p>
            </Col>
            <Col sm={4} className="text-center">
              <a href="/ClimateGlobal/#/map">
                <Image src={NDGAINMAP} rounded className="images" />
              </a>
            </Col>
          </Row>
          <hr className="section-underline" />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default MapsApp;
