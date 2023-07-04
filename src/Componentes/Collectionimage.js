/** @format */

import { Col, Container, Row } from "react-bootstrap";
import image1 from "./images/image-gallery-milkbottles.jpg";
import image2 from "./images/image-gallery-orange.jpg";
import image3 from "./images/image-gallery-cone.jpg";
import image4 from "./images/image-gallery-sugarcubes.jpg";
import "./Navbar.css";

export const Collectionimage = () => {
  return (
    <section>
      <Container fluid className='p-0'>
        <Row className='g-0 mt-5'>
          <Col sx={12} md={3} lg={3}>
            <img src={image1} className='wold' />
          </Col>
          <Col sx={12} md={3} lg={3}>
            <img src={image2} className='wold' />
          </Col>
          <Col sx={12} md={3} lg={3}>
            <img src={image3} className='wold' />
          </Col>
          <Col sx={12} md={3} lg={3}>
            <img src={image4} className='wold' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
