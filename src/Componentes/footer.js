/** @format */

import { Row, Col, Container, Nav } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import "./Navbar.css";
export const Foote = () => {
  return (
    <section className='section'>
      <div className='pert'>
        <h1>sunnyside</h1>
      </div>
      <Container>
        <div className='about'>
          <Row>
            <Col sx={12} md={4} lg={4}>
              <Nav.Link href='#home' className='fa text-dark '>
                About
              </Nav.Link>
            </Col>
            <Col sx={12} md={4} lg={4}>
              <Nav.Link href='#link' className='fa text-dark'>
                Services
              </Nav.Link>
            </Col>
            <Col sx={12} md={4} lg={4}>
              <Nav.Link href='#link' className='fa text-dark'>
                Projects
              </Nav.Link>
            </Col>
          </Row>
        </div>

        <Row>
          <Col className='ram'>
            <BsFacebook className='fa m-4' />

            <BsInstagram className='fa m-4' />

            <BsTwitter className='fa m-4' />

            <BsPinterest className='fa m-4' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
