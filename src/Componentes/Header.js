/** @format */

import { Container, Row, Col } from "react-bootstrap";
import "./Navbar.css";
import image1 from "./images/image-transform.jpg";
import image2 from "./images/image-stand-out.jpg";
import image3 from "./images/image-graphic-design.jpg";
import image4 from "./images/image-photography.jpg";
export const Header = () => {
  return (
    <section className=''>
      <Container fluid className='p-0'>
        <Row className='sec g-0'>
          <Col xs={12} md={6} lg={6}>
            <div className='div'>
              <h1>
                Transform your<br></br> brand
              </h1>
              <p className='pil'>
                We are a full-service creative agency specializing in<br></br>{" "}
                helping brands grow fast.Engage your client through<br></br>{" "}
                compelling visuals that do most of the marketing for you.
              </p>
              <h4 className='lear'>LEARN MORE</h4>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img src={image1} className='ima pl-2' />
          </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={12} md={6} lg={6}>
            <img src={image2} className='imag pl-2' />
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className='div'>
              <h1>
                Transform your<br></br> brand
              </h1>
              <p className='pil'>
                We are a full-service creative agency specializing in<br></br>{" "}
                helping brands grow fast.Engage your client through<br></br>{" "}
                compelling visuals that do most of the marketing for you.
              </p>
              <h4 className='f '>LEARN MORE</h4>
            </div>
          </Col>
        </Row>
        <Row className='g-0'>
          <Col xs={12} md={6} lg={6}>
            <img src={image3} className='imma pl-2' />
            <div className='desi'>
              <h2>Graphie Design</h2>
              <p>
                Great design makes you memorable. we deliver<br></br> artwork
                that underscores your brand message<br></br> and captures
                potential attention
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img src={image4} className='ima pl-2' />
            <div className='desi'>
              <h2>Photography</h2>
              <p>
                Increase your credibility by getting the most<br></br> strunning
                high-quality photos that improve your<br></br> business image.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
