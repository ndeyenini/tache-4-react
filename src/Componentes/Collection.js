/** @format */

// import { Container, Row, Col } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import imag1 from "./images/image-emily.jpg";
import imag2 from "./images/image-thomas.jpg";
import imag3 from "./images/image-jennie.jpg";
import "./Navbar.css";
export const Collectin = () => {
  return (
    <section>
      <h3 className='mt-5'>CLIENT TESTIMONIALS</h3>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img
              src={imag1}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                marginTop: 100,
              }}
            />
            <p className='p ' style={{ marginTop: 60 }}>
              We put ourtrust in Sunnyside and they <br></br>delivered, making
              sure our needs were met<br></br> and deadlines were always hit.
            </p>
            <h3 style={{ marginTop: 90 }}>Emily R.</h3>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src={imag2}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                marginTop: 100,
              }}
            />
            <p className='p ' style={{ marginTop: 60 }}>
              We put ourtrust in Sunnyside and they <br></br>delivered, making
              sure our needs were met<br></br> and deadlines were always hit.
            </p>
            <h3 style={{ marginTop: 90 }}>Thomas S.</h3>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src={imag3}
              style={{
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                marginTop: 100,
              }}
            />
            <p className='p ' style={{ marginTop: 60 }}>
              We put ourtrust in Sunnyside and they<br></br> delivered, making
              sure our needs were met<br></br> and deadlines were always hit.
            </p>
            <h3 style={{ marginTop: 90 }}>Jennie F</h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
