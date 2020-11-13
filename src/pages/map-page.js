import React, { useState } from "react";
import Typical from "react-typical";
import ReactTooltip from "react-tooltip";
import Jumbo from "../components/jumbo";
import MapChart from "../components/mapchart";
import Navigation from "../components/navbar";
import { Row, Col } from "react-bootstrap";
import Footer from "../components/footer";

const MapApp = () => {
  const [content, setContent] = useState("");

  return (
    <div className="bg-home">
      <Navigation />
      <Jumbo
        elements={
          <Row>
            <Col sm={8}>
              <h1>Vulnerability Map</h1>
              <Typical
                className="italic"
                steps={["Data requested from the NDGain-Index", 1000]}
                loop={1}
                wrapper="p"
              />
            </Col>
          </Row>
        }
      />
      <div className="wrapper">
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
      <Footer />
    </div>
  );
};
export default MapApp;
