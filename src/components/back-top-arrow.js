import React from "react";
import { Link } from "react-scroll";

const BackTopArrow = (props) => {
  return (
    <div className="back-top-arrow">
      <Link
        activeClass="active"
        to={props.toSection}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <img
          className="float-right"
          src="https://img.icons8.com/fluent-systems-regular/24/000000/long-arrow-up.png"
          alt="Back to the top"
        />
      </Link>
    </div>
  );
};
export default BackTopArrow;
