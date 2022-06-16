import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro d-flex justify-content-center align-items-end">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">KUY NONTON</div>
            <div className="title">FILM GRATIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#Trending">
                View List Film
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
