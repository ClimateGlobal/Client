import React from "react";

// Importing React Bootstrap Components
import { Container, Row, Button } from "react-bootstrap";

// Importing my Components
import Cards from "../card";
import BackTopArrow from "../back-top-arrow";

// Importing images from -> assets -> images -> home-page-section-images
import GLOBALWARMING from "../../assets/images/home-page section-images/section-global-vs-climate/melting-ice.jpg";
import CLIMATECHANGE from "../../assets/images/home-page section-images/section-global-vs-climate/climate-change.jfif";

const SectionGlobalvsClimte = () => {
  return (
    <Container className="mt-5 ">
      <BackTopArrow toSection="section-questions" />
      <Row className="justify-content-around text-center">
        <h3 className="highlighted-text">
          <span className="italic">
            "We are living on this planet as if we had another one to go to."
          </span>
          - Terri Swearingen
        </h3>
        <Cards
          bg="light"
          textColor="dark"
          styleCard="21rem"
          customClass="card-component"
          img={GLOBALWARMING}
          title="Global Warming"
          text={
            <span>
              Global Warming is the long-term heating of Earth's climate system.
              Human activities, primarily fossil fuel burning, has increased
              heat-trapping greenhouse gas levels in Earth’s atmosphere
              resulting in an increase in global temperatures. In fact,{" "}
              <span className="highlighted-text">
                2020 is set to be the first or second warmest year on record.
              </span>
            </span>
          }
          footer="NASA"
        />
        <Cards
          bg="light"
          textColor="dark"
          styleCard="21rem"
          customClass="card-component"
          img={CLIMATECHANGE}
          title="Climate Change"
          text={
            <span>
              Climate Change is a long-term change in the average weather
              patterns that define Earth's local, regional, and global climates.{" "}
              <span className="highlighted-text">
                Climate Change is primarily driven by human activities
              </span>
              , specifically fossil fuel burning, which has increased
              heat-trapping greenhouse gas levels in Earth's atmosphere,{" "}
              <span className="highlighted-text">
                raising Earth's average surface temperature.
              </span>
            </span>
          }
          footer="NASA"
        />
      </Row>
    </Container>
  );
};
export default SectionGlobalvsClimte;
