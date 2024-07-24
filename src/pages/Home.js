import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Container className="home-container my-5">
      <Row className="text-center">
        <Col>
          <img
            src="https://via.placeholder.com/150"
            alt="Springdale Public School Logo"
            className="mb-3"
          />
          <h1 className="school-name">Springdale Public School</h1>
          <p className="introduction">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Carousel className="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Annual Sports Day"
              />
              <Carousel.Caption>
                <h3>Annual Sports Day</h3>
                <p>Celebrating Excellence in Sports</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Science Exhibition"
              />
              <Carousel.Caption>
                <h3>Science Exhibition</h3>
                <p>Showcasing Student Innovations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400"
                alt="Cultural Fest"
              />
              <Carousel.Caption>
                <h3>Cultural Fest</h3>
                <p>Embracing Diversity and Creativity</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
