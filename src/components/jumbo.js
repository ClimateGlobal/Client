import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

/* Props in this component 
- elements
*/

const Jumbo = (props) => {
  return (
    <Jumbotron fluid className="jumbo-style">
      <Container>{props.elements}</Container>
    </Jumbotron>
  );
};
export default Jumbo;
// <div className="center text-center landing-txt">
// <h1>Climate Global</h1>
// <p>
//   Inspire <u>Change</u>
// </p>
// </div>
// <div className="bottom">
// <Link
//   activeClass="active"
//   to="section-continue"
//   spy={true}
//   smooth={true}
//   offset={-20}
//   duration={500}
// >
//   <img
//     src="https://img.icons8.com/wired/64/000000/circled-chevron-down.png"
//     alt="Continue"
//   />
// </Link>
// </div>
/*<section id="section-continue">
        <Container className="mt-5">
          <ControlledCarousel
            pic1={pic1}
            pic1header="Greenhouse Gases"
            pic1paragraph="Global Greenhouse Gas Emissions must drop by 55% by 2030"
            pic2={pic2}
            pic2header="Melting Glaciers"
            pic2paragraph="From 2003-2010 an average of 46 gigatons of ice from Alaskan
            glaciers was lost"
            pic3={pic3}
            pic3header="Drought"
            pic3paragraph="Signs of Drought in European Groundwater"
          />
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-around text-center mt-5">
            <h2 className="italic">
              "The Evidence for rapid climate change is compelling" - NASA
            </h2>
            <Cards
              bg="light"
              textColor="dark"
              styleCard="20rem"
              header=""
              title="Decreased Snow Cover"
              text="Satellite observations reveal that the amount of spring snow cover in the Northern Hemisphere has decreased over the past five decades."
              footer="NASA"
            />
            <Cards
              bg="light"
              textColor="dark"
              styleCard="20rem"
              header=""
              title="Declining Arctic Sea Ice"
              text="Both the extent and thickness of Arctic sea ice has declined rapidly over the last several decades."
              footer="NASA"
            />
            <Cards
              bg="light"
              textColor="dark"
              styleCard="20rem"
              header=""
              title="Glacial Retreat"
              text="Glaciers are retreating almost everywhere around the world — including in the Alps, Himalayas, Andes, Rockies, Alaska and Africa."
              footer="NASA"
            />
          </Row>
        </Container>
      </section>
      <section>
        <Container className="text-center">
          <Cards
            header=""
            title="Climate Maps"
            text="Climate Maps help show the impact Climate Change has on a global scale"
            footer=""
            img={mapPic}
            optional={
              <Button
                href="/map"
                className="w-100 text-center"
                variant="primary"
              >
                View Maps
              </Button>
            }
          />{" "}
        </Container>
      </section>*/
