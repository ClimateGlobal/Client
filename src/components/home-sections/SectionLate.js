import React from "react";

// Importing React Bootstrap Components
import { Container, Row, Col, Button } from "react-bootstrap";

// Importing my Components
import Cards from "../card";
import BackTopArrow from "../back-top-arrow";

// Importing images from -> assets -> images -> home-page-section-images
import DMGDONE from "../../assets/images/home-page section-images/section-late/dmg-done.jpg";

const SectionLate = () => {
  return (
    <Container className="mt-5 ">
      <BackTopArrow toSection="section-questions" />
      <Row className="justify-content-around text-center">
        <h3 className="highlighted-text">
          <span className="italic">
            "Responding to climate change will involve a two-tier approach"
          </span>
          - NASA
        </h3>
        <Cards
          bg="light"
          textColor="dark"
          styleCard="21rem"
          customClass="card-component"
          img={DMGDONE}
          title="Has the damage been done?"
          text={
            <span>
              The effects of Climate Change are already taking place. Even if we
              stopped emitting greenhouse gases today,
              <span className="highlighted-text">
                {" "}
                Global Warming would continue to happen for several decades
              </span>{" "}
              because it takes a very long time for the planet to recover on its
              own. If we were to stop right away, how would that affect our
              lifestyles?
            </span>
          }
          footer="NASA"
        />
        <Row className="justify-content-around">
          <Col sm>
            <Cards
              bg="light"
              textColor="dark"
              styleCard="21rem"
              title="The Two-Tier approach"
              text={
                <span>
                  Part 1 <br />
                  "mitigation" -{" "}
                  <span className="highlighted-text">
                    reducing the flow of greenhouse gases into the atmosphere.
                  </span>
                </span>
              }
              footer="NASA"
            />
            <Cards
              bg="light"
              textColor="dark"
              styleCard="21rem"
              title="The Two-Tier approach"
              text={
                <span>
                  Part 2 <br />
                  "adaptation" -{" "}
                  <span className="highlighted-text">
                    learning to live with, and adapt to, the climate change that
                    has already been set in motion.
                  </span>
                </span>
              }
              footer="NASA"
            />
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm>
            <Cards
              bg="dark"
              textColor="light"
              styleCard="21rem"
              title="Want to know more?"
              text="Continue reading on NASA's website!"
              optional={
                <div>
                  {" "}
                  <p>
                    You can read more about Climate Change vs Global Warming on
                    NASA's website!
                  </p>
                  <Button
                    href="https://climate.nasa.gov/faq/16/is-it-too-late-to-prevent-climate-change/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-100"
                  >
                    Read More
                  </Button>
                </div>
              }
              footer="NASA"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default SectionLate;
