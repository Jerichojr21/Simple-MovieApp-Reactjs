import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import avengerImg from "../assets/images/superhero/avenger.jpg";
import antmanImg from "../assets/images/superhero/antman.jpg";
import batmanImg from "../assets/images/superhero/batman.jpg";
import robinhoodImg from "../assets/images/superhero/robinhood.jpg";
import spidermanImg from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImg from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Superhero">
          SUPERHERO MOVIES
        </h1>
        <Row>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={avengerImg} alt="Dune image" height={600} />
              <Card.Title className="text-center mt-1">Avengers</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={batmanImg} alt="Infinite Storm image" height={600} />
              <Card.Title className="text-center mt-1">Batman</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={antmanImg} alt="Everything image" height={600} />
              <Card.Title className="text-center mt-1">Ant-Man</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={supermanImg} alt="Joker image" height={600} />
              <Card.Title className="text-center mt-1">Superman</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={spidermanImg} alt="lightyear image" height={600} />
              <Card.Title className="text-center mt-1">Spiderman</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={robinhoodImg} alt="Morbius image" height={600} />
              <Card.Title className="text-center mt-1">Robinhood</Card.Title>
              <div className="p-2 m-1">
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
