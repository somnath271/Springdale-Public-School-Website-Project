import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Academics.css";

const Academics = () => {
  return (
    <Container className="academics-container my-5">
      <Row className="text-center">
        <Col>
          <h1 className="section-title">Academics</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Primary (Grades 1-5)</Card.Title>
              <Card.Text>
                English, Mathematics, Science, Social Studies, Art, Physical
                Education
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Secondary (Grades 6-10)</Card.Title>
              <Card.Text>
                English, Mathematics, Science (Physics, Chemistry, Biology),
                Social Studies, Computer Science, Physical Education, Art
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Senior Secondary (Grades 11-12)</Card.Title>
              <Card.Text>
                <strong>Science Stream:</strong> Physics, Chemistry, Biology,
                Mathematics, Computer Science, English
                <br />
                <strong>Commerce Stream:</strong> Accountancy, Business Studies,
                Economics, Mathematics, English
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Teaching Methodologies</Card.Title>
              <Card.Text>
                We use a blend of traditional and modern teaching techniques to
                cater to different learning styles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Educational Resources</Card.Title>
              <Card.Text>
                Digital classrooms, interactive learning modules, and access to
                online educational platforms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Academics;
