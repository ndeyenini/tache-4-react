
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Navbar.css";

export const BasicExample = () => {
  return (
    <section>
      <div className='nave'>
        <Container fluid>
          <Row>
            <Col>
              <Navbar expand='lg'>
                <Navbar.Brand href='#home' className='ka'>
                  Sunnuside
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    <Nav.Link href='#home' className='ka'>
                      About
                    </Nav.Link>
                    <Nav.Link href='#link' className='ka'>
                      Services
                    </Nav.Link>
                    <Nav.Link href='#link' className='ka'>
                      Projects
                    </Nav.Link>
                    <button type='button' class='btn'>
                      CONTACT
                    </button>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <h2 className='h mt-5 text-light'>WE ARE CREATIVES</h2>
              <p className='p mt-5'>
                <svg width='36' height='114' xmlns='http://www.w3.org/2000/svg'>
                  <g
                    stroke='#FFF'
                    stroke-width='6'
                    fill='none'
                    fill-rule='evenodd'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M18 3v100M3 95.484l15 15 15-15' />
                  </g>
                </svg>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

// export default BasicExample;
