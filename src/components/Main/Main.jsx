import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ShowCase from "../showcase/ShowCase";
import "bootstrap/dist/css/bootstrap.min.css";
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

const Main = () => {
  return (
    <Col>
      {/* navbar */}
      <Navbar />

      {/* showCase */}
      <ShowCase />

      {/* sidebar */}
      <Sidebar />
    </Col>
  );
};

export default Main;
