import React from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImg from "../assets/images/trending/dune.jpg";
import everythingImg from "../assets/images/trending/everything.jpg";
import infiniteImg from "../assets/images/trending/infinite.jpg";
import morbiusImg from "../assets/images/trending/morbius.jpg";
import lightyearImg from "../assets/images/trending/lightyear.jpg";
import jokerImg from "../assets/images/trending/joker.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white" id="Trending">
          TRENDING MOVIES
        </h1>
        <Row>
          <Col md={4}>
            <Card className="bg-dark text-white movieImage">
              <Image src={duneImg} alt="Dune image" height={600} />
              <Card.Title className="text-center mt-1">Dune</Card.Title>
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
              <Image
                src={infiniteImg}
                alt="Infinite Storm image"
                height={600}
              />
              <Card.Title className="text-center mt-1">
                Infinite Storm
              </Card.Title>
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
              <Image src={everythingImg} alt="Everything image" height={600} />
              <Card.Title className="text-center mt-1">
                Everything Everywhere All At Once
              </Card.Title>
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
              <Image src={jokerImg} alt="Joker image" height={600} />
              <Card.Title className="text-center mt-1">Joker</Card.Title>
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
              <Image src={lightyearImg} alt="lightyear image" height={600} />
              <Card.Title className="text-center mt-1">Lightyear</Card.Title>
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
              <Image src={morbiusImg} alt="Morbius image" height={600} />
              <Card.Title className="text-center mt-1">Morbius</Card.Title>
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

export default Trending;
