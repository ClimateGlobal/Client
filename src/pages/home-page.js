import React, { useState } from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";

// ADD AFTER
import mapPic from "../assets/images/map-pic.png";
import ReactPlayer from "react-player";
import ReactTooltip from "react-tooltip";
import MapChart from "../components/mapchart";

// Importing React Bootstrap Components
import { Row, Col, Button } from "react-bootstrap";

// Importing my Components
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import ControlledCarousel from "../components/carousel";
import Jumbo from "../components/jumbo";

// Importing images from assets folder
import pic1 from "../assets/images/pic1-carousel.jpg";
import pic2 from "../assets/images/pic2-carousel.jpg";
import pic3 from "../assets/images/pic3-carousel.jpg";

// Importing each section from -> components -> home-sections
import SectionHome from "../components/home-sections/SectionHome";
import SectionEvidence from "../components/home-sections/SectionEvidence";
import SectionGlobalvsClimte from "../components/home-sections/SectionGlobalvsClimate";
import SectionLate from "../components/home-sections/SectionLate";
import SectionMore from "../components/home-sections/SectionMore";

const HomeApp = () => {
  const [content, setContent] = useState("");
  return (
    <div className="bg-home">
      <Navigation />
      <section>
        <Jumbo
          elements={
            <Row>
              <Col sm={8}>
                <div className="landing-txt">
                  <h1>Climate Global</h1>
                  <Typical
                    className="italic"
                    steps={["Inspire Change", 1000]}
                    loop={1}
                    wrapper="p"
                  />
                </div>
              </Col>
              <Col sm={4}>
                {" "}
                <ControlledCarousel
                  pic1={pic1}
                  pic1header="Gases"
                  pic1paragraph="Global Greenhouse Gas Emissions must drop by 55% by 2030"
                  pic2={pic2}
                  pic2header="Melting Glaciers"
                  pic2paragraph="From 2003-2010 an average of 46 gigatons of ice from Alaskan glaciers was lost"
                  pic3={pic3}
                  pic3header="Drought"
                  pic3paragraph="Signs of Drought in European Groundwater"
                />
              </Col>
            </Row>
          }
        />
      </section>
      <section id="section-home">
        <SectionHome />
      </section>
      <hr className="section-underline" />
      <div id="read-more">
        <section id="section-evidence">
          <SectionEvidence />
        </section>
        <hr className="section-underline" />
        <section id="section-global-vs-climate">
          <SectionGlobalvsClimte />
        </section>
        <hr className="section-underline" />
        <section id="section-late-to-prevent-climate-change">
          <SectionLate />
        </section>
        <hr className="section-underline" />
        <section id="section-more">
          <SectionMore />
        </section>
        <hr className="section-underline" />
        <div className="text-center" id="question-not-here">
          <h3>Have a question that isn't here?</h3>
          <p>Let us know about it!</p>
          <Button
            className="border-button w-25"
            variant="light"
            href="/ClimateGlobal/#/contact"
          >
            Send us a message
          </Button>
          <hr className="section-underline" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomeApp;
