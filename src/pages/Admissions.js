import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Admissions.css"; // Custom CSS for Admissions page

const Admissions = () => {
  const importantDates = [
    { event: "Admission Form Availability", date: "March 1st" },
    { event: "Last Date for Submission", date: "March 31st" },
    { event: "Entrance Test", date: "April 15th" },
    { event: "Announcement of Results", date: "April 30th" },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-warning text-dark p-5 rounded"
          >
            <h1>Admissions</h1>
            <p>
              Join Springdale Public School and be a part of our vibrant
              community.
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow-sm admissions-card mb-4">
            <Card.Body>
              <Card.Title>Process</Card.Title>
              <Card.Text>
                Admission forms are available for download. Submit the completed
                form along with required documents at the school office.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm admissions-card mb-4">
            <Card.Body>
              <Card.Title>Criteria</Card.Title>
              <Card.Text>
                Admission is based on merit and availability of seats. Entrance
                tests may be conducted for certain grades.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm admissions-card mb-4">
            <Card.Body>
              <Card.Title>Important Dates</Card.Title>
              <Card.Text>
                {importantDates.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <strong>{item.event}:</strong> {item.date}
                  </motion.div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
