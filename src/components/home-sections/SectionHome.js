import React from "react";
import { Link } from "react-scroll";

// Importing React Bootstrap Components
import { Container, Row, Col, Button } from "react-bootstrap";

// Importing my Components
import ListItems from "../list-items";

const SectionHome = () => {
  const openReadMore = () => {
    document.getElementById("open-read-more").style.display = "none";
    document.getElementById("read-more").style.display = "contents";
    document.getElementById("close-read-more").style.display = "contents";
  };

  return (
    <Container>
      <h1 className="blue-text text-center mb-5 mt-5">
        What is Climate Global?
      </h1>
      <Row className="justify-content-around">
        <ListItems
          customclass="blue-text box-shadow-list list-items"
          srcfile="https://img.icons8.com/pastel-glyph/64/000000/mission-of-a-company.png"
          srcalt="Mission"
          header="Mission"
          listelements={
            <div>
              <p>
                Our focus is on raising awareness of Climate Change. We gather
                data and develop methods of visualization for our audience to
                interpret with ease.
              </p>
              <Button
                variant="dark"
                onClick={() => {
                  alert("Coming Soon!");
                }}
              >
                Read More
              </Button>
            </div>
          }
        />
        <ListItems
          customclass="blue-text box-shadow-list"
          srcfile="https://img.icons8.com/wired/64/000000/database.png"
          srcalt="Data"
          header="Data"
          listelements={
            <div>
              <p>
                To prevent inaccurate data, we use data from credible sources
                such as the World Health Organization, United Nations, ND-Gain,
                etc.
              </p>
              <Button href="/ClimateGlobal/#/maps" variant="dark">
                View Data
              </Button>
            </div>
          }
        />{" "}
        <ListItems
          customclass="blue-text box-shadow-list"
          srcfile="https://img.icons8.com/wired/64/000000/charity.png"
          srcalt="Mission"
          header="How you can help"
          listelements={
            <div>
              <p>
                We encourage you to donate (if able) to various organizations
                from our donations page or to help us spread awareness on
                Climate Change.
              </p>
              <Button
                onClick={() => {
                  alert("Coming Soon!");
                }}
                variant="dark"
              >
                Let me help
              </Button>
            </div>
          }
        />
      </Row>
      <section id="section-questions">
        <div className="text-center blue-text mt-5">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/question-mark.png"
            alt="Questions"
          />
          <h4 className="mt-2">Questions</h4>
          <p className="mt-3 small-text">
            Have some questions?
            <br />
            Press any of the following buttons to navigate through our site and
            hopefully answer some of your lingering questions!
          </p>
        </div>
        <hr className="section-underline" />
        <Col className="justify-content-around text-center mt-5 mb-5">
          <div className="mt-5 mb-5">
            <Link
              activeClass="active"
              to="section-evidence"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                className="border-button w-75"
                variant="light"
                onClick={openReadMore}
              >
                What evidence is there for Climate Change?
              </Button>
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <Link
              activeClass="active"
              to="section-global-vs-climate"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                className="border-button w-75"
                variant="light"
                onClick={openReadMore}
              >
                What's the difference between Climate Change and Global Warming?
              </Button>
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <Link
              activeClass="active"
              to="section-late-to-prevent-climate-change"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                className="border-button w-75"
                variant="light"
                onClick={openReadMore}
              >
                Is it too late to prevent Climate Change?
              </Button>
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <Link
              activeClass="active"
              to="section-more"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                className="border-button w-75"
                variant="light"
                onClick={openReadMore}
              >
                What YOU can do to prevent Climate Change
              </Button>
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <Link
              activeClass="active"
              to="question-not-here"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <Button
                className="border-button w-75"
                variant="light"
                onClick={openReadMore}
              >
                Is your question not here?
              </Button>
            </Link>
          </div>
        </Col>
        <Button variant="link" id="open-read-more" onClick={openReadMore}>
          <img
            src="https://img.icons8.com/metro/52/000000/forward.png"
            alt="Read More"
          />
        </Button>
        <Button
          variant="link"
          id="close-read-more"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("close-read-more").style.display = "none";
            document.getElementById("read-more").style.display = "none";
            document.getElementById("open-read-more").style.display =
              "contents";
          }}
        >
          <img
            src="https://img.icons8.com/fluent-systems-filled/48/000000/expand-arrow.png"
            alt="Close Read More"
          />
        </Button>
      </section>
    </Container>
  );
};
export default SectionHome;
