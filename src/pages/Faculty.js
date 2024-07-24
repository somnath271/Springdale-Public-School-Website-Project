import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Faculty.css"; // Custom CSS for faculty page

const Faculty = () => {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal",
      qualification: "M.Ed",
      experience: "20 years",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualification: "M.Sc. in Physics",
      experience: "15 years",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualification: "M.A. in English",
      experience: "10 years",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualification: "M.Sc. in Mathematics",
      experience: "8 years",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualification: "M.Sc. in Chemistry",
      experience: "12 years",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualification: "B.Tech in Computer Science",
      experience: "5 years",
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-danger text-white p-5 rounded"
          >
            <h1>Our Faculty</h1>
            <p>Meet our dedicated team of educators</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        {facultyMembers.map((member, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {member.position}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Qualification:</strong> {member.qualification}
                  <br />
                  <strong>Experience:</strong> {member.experience}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Faculty;
