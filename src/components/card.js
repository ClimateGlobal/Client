import React from "react";
import { Card } from "react-bootstrap";

/* Props in this component 
- bg
- textColor
- styleCard
- customClass
- header
- img
- title
- text
- optional
- footer
*/

const Cards = (props) => {
  return (
    <Card
      bg={props.bg}
      text={props.textColor}
      style={{ width: props.styleCard }}
      className="mb-5 mt-5 box-shadow-card"
    >
      {props.header ? <Card.Header>{props.header}</Card.Header> : null}
      {props.img ? <Card.Img variant="top" src={props.img} /> : null}
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text className={props.customClass}>{props.text}</Card.Text>
        {props.optional ? props.optional : null}
      </Card.Body>
      <Card.Footer className="text-muted">{props.footer}</Card.Footer>
    </Card>
  );
};
export default Cards;
