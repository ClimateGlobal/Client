import React from "react";
import ReactPlayer from "react-player";

// Importing React Bootstrap Components
import { Container, Row, Col, Button } from "react-bootstrap";

// Importing my Components
import Cards from "../card";
import BackTopArrow from "../back-top-arrow";

// Importing images from -> assets -> images -> home-page-section-images
import DMGDONE from "../../assets/images/home-page section-images/section-late/dmg-done.jpg";

const SectionMore = () => {
  return (
    <Container className="mt-5 ">
      <BackTopArrow toSection="section-questions" />
      <Row className="justify-content-around text-center">
        <h3>Watch this short video to learn more about Climate Change</h3>
        <ReactPlayer
          className="mt-5 mb-5"
          url="https://www.youtube.com/watch?v=VTfgNFz1DBM&ab_channel=PICSCanada"
        />
      </Row>
    </Container>
  );
};
export default SectionMore;
