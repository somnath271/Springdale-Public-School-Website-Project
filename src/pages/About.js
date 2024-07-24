import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutUs.css"; // Custom CSS for about us page

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-secondary text-white p-5 rounded"
          >
            <h1>About Us</h1>
            <p>Learn more about our school, mission, and values</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className="shadow-sm about-card">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide high-quality education that empowers
                  students to achieve their full potential.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Card className="shadow-sm about-card">
              <Card.Body>
                <Card.Title>Our Values</Card.Title>
                <Card.Text>
                  We believe in integrity, respect, and continuous improvement
                  as the foundation for success.
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-info text-white p-4 rounded"
          >
            <h2>Meet Our Team</h2>
            <p>Our dedicated team of professionals</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={3} className="mb-4">
          <Card className="shadow-sm team-card">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/1600x900/?person1"
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Principal</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm team-card">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/1600x900/?person2"
            />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>Vice Principal</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm team-card">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/1600x900/?person3"
            />
            <Card.Body>
              <Card.Title>Emily Johnson</Card.Title>
              <Card.Text>English Teacher</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-4">
          <Card className="shadow-sm team-card">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/1600x900/?person4"
            />
            <Card.Body>
              <Card.Title>Michael Brown</Card.Title>
              <Card.Text>Mathematics Teacher</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
