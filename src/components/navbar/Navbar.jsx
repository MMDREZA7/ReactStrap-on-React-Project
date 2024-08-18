import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  NavbarBrand,
} from "reactstrap";

const Navbar = () => {
  const [date, setDate] = useState("");
  const [changeDate, setChangeDate] = useState("");

  // Functions
  const setUserDate = (e) => {
    e.preventDefault();
    setDate(changeDate);
  };

  return (
    <div className="bg-dark">
      <div className="container">
        <Col className="p-5">
          <Row>
            <form onSubmit={setUserDate}>
              <input
                type="date"
                value={changeDate}
                onChange={(e) => {
                  e.preventDefault();
                  setChangeDate(e.target.value);
                }}
              />
              <Button color="primary" outline className="fw-bold" type="submit">
                Submit
              </Button>
            </form>
          </Row>
          Date:
          <div className="text-center-p-3 bg-white">
            {date ? date : "Please Enter a Date My Friend"}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Navbar;
