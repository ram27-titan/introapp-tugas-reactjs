import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button, Card, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import profile from './wp.jpeg';
import task1 from './img/projects/1.jpg';
import task2 from './img/projects/2.jpg';
import task3 from './img/projects/3.jpg';
import task4 from './img/projects/4.jpg';
import task5 from './img/projects/5.jpg';

const Section = styled.section`
  padding-top: 5rem;
  backgroundcolor: #fff3cd;
`;
const Home = styled.header`
  padding-top: 5rem;
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 5px solid white;
`;

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Ari Alamsyah</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutme">About</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Home id="home">
          <Img src={profile} className="img-fluid" alt="profile-img" />
          <h1>Ari Alamsyah</h1>
          <p>FullStack Website Developer</p>
        </Home>

        <Section id="aboutme">
          <Container fluid="md">
            <Row className="text-center mt-5">
              <Col>
                <h2>About Me</h2>
              </Col>
            </Row>
            <Row className="justify-content-center fs-5 text-center">
              <Col className="col-md-4 mb-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum aperiam veniam. Cupiditate alias, consectetur deleniti labore exercitationem reiciendis et porro rem asperiores? Quidem blanditiis ipsum
                  dignissimos fugit, et nostrum.
                </p>
              </Col>
              <Col className="col-md-4 mb-3">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente harum praesentium eveniet ullam ea ad vero explicabo optio quos qui tempore odio quae, soluta dolorum similique earum deserunt tempora.</p>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="project">
          <Row className="text-center mt-5">
            <Col>
              <h2>My Project</h2>
            </Col>
          </Row>
          <Container>
            <Row className="justify-content-center fs-5 text-center">
              <Col className="col-md-4 mb-3">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={task1} />
                  <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-md-4 mb-3">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={task2} />
                  <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-md-4 mb-3">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={task3} />
                  <Card.Body>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-md-4 mb-3">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={task4} />
                  <Card.Body>
                    <Card.Title>Project 4</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="col-md-4 mb-3">
                <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={task5} />
                  <Card.Body>
                    <Card.Title>Project 5</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Section>

        <Section id="contact">
          <Row className="text-center mt-5">
            <Col>
              <h2>Contact Me</h2>
            </Col>
          </Row>
          <Container fluid="md">
            <Row className="justify-content-center ">
              <Col className="col-md-6">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3 text-area" controlId="formBasicEmail">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control type="textarea" />
                  </Form.Group>

                  <Button variant="warning" type="submit">
                    Kirim
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Section>
      </div>
    );
  }
}
