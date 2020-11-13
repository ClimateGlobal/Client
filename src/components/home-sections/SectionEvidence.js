import React from "react";

// Importing React Bootstrap Components
import { Container, Row, Button } from "react-bootstrap";

// Importing my Components
import Cards from "../card";
import BackTopArrow from "../back-top-arrow";

// Importing images from -> assets -> images -> home-page-section-images
import DECLININGICE from "../../assets/images/home-page section-images/section-evidence/declining-sea-ice.jpg";
import GLACIALRETREAT from "../../assets/images/home-page section-images/section-evidence/glacial-retreat.jpg";
import MELTINGICE from "../../assets/images/home-page section-images/section-evidence/melting-ice.jpg";

const SectionEvidence = () => {
  return (
    <Container className="mt-5">
      <BackTopArrow toSection="section-questions" />
      <Row className="justify-content-around text-center">
        <h2 className="highlighted-text">
          <span className="italic">
            "The Evidence for rapid climate change is compelling"
          </span>{" "}
          - NASA
        </h2>
        <Cards
          bg="light"
          textColor="dark"
          styleCard="20rem"
          img={DECLININGICE}
          title="Decreased Snow Cover"
          text={
            <span>
              Satellite observations reveal that the amount of spring snow cover
              in the Northern Hemisphere has{" "}
              <span className="highlighted-text">
                decreased over the past five decades.
              </span>
            </span>
          }
          footer="NASA"
        />
        <Cards
          bg="light"
          textColor="dark"
          styleCard="20rem"
          img={MELTINGICE}
          title="Declining Arctic Sea Ice"
          text={
            <span>
              Both the extent and thickness of Arctic sea ice has{" "}
              <span className="highlighted-text">
                declined rapidly over the last several decades.
              </span>
            </span>
          }
          footer="NASA"
        />
        <Cards
          bg="light"
          textColor="dark"
          styleCard="20rem"
          img={GLACIALRETREAT}
          title="Glacial Retreat"
          text={
            <span>
              <span className="highlighted-text">
                Glaciers are retreating almost everywhere around the world
              </span>{" "}
              — including in the Alps, Himalayas, Andes, Rockies, Alaska and
              Africa.
            </span>
          }
          footer="NASA"
        />
      </Row>
    </Container>
  );
};
export default SectionEvidence;
