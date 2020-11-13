import React from "react";

import { Container, Row, Button } from "react-bootstrap";

// Importing images from the assets folder
import github from "../assets/images/rsz_github_icon.png";
import twitter from "../assets/images/rsz_twitter_icon.png";
import instagram from "../assets/images/rsz_instagram_icon.png";
import youtube from "../assets/images/rsz_youtube_icon.png";

const Footer = () => {
  return (
    <Container fluid className="footer sticky-bottom">
      <Row className="text-center d-flex justify-content-center pt-5 mb-3">
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button href="/ClimateGlobal/#/" variant="dark">
              Home
            </Button>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button
              onClick={() => {
                alert("Coming Soon!");
              }}
              variant="dark"
            >
              Donate
            </Button>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Button href="/ClimateGlobal/#/maps" variant="dark">
              Maps
            </Button>
          </h6>
        </div>
      </Row>
      <Row className="justify-content-center">
        {" "}
        <a
          href="https://github.com/ShaleeQureshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://twitter.com/QureshiShalee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCmHg1PK16j2P2wBI33QKqwA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="YouTube" />
        </a>
        <a
          href="https://www.instagram.com/sqdevs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </Row>
      <div className="footer-copyright text-center py-3">
        Copyright{" "}
        <a
          href="https://www.squreshi.net/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ShahrukhQureshi
        </a>
      </div>
    </Container>
  );
};
export default Footer;
