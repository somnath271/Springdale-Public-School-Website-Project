import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Students.css"; // Custom CSS for Students page

const Students = () => {
  const activities = [
    "Music",
    "Dance",
    "Drama",
    "Art",
    "Sports",
    "Robotics",
    "Debate Club",
    "Science Club",
  ];
  const clubs = [
    "Literary Society",
    "Environmental Club",
    "Astronomy Club",
    "Coding Club",
  ];
  const achievements = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition",
  ];
  const council = [
    { title: "President", name: "Amy Parker", grade: "Grade 12" },
    { title: "Vice President", name: "Rajiv Mehta", grade: "Grade 11" },
    { title: "Secretary", name: "Lisa Wong", grade: "Grade 10" },
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-primary text-white p-5 rounded"
          >
            <h1>Life at Springdale</h1>
            <p>Explore the vibrant student life at Springdale Public School</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="shadow-sm students-card mb-4">
            <Card.Body>
              <Card.Title>Extracurricular Activities</Card.Title>
              <Card.Text>
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {activity}
                  </motion.div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm students-card mb-4">
            <Card.Body>
              <Card.Title>Clubs and Societies</Card.Title>
              <Card.Text>
                {clubs.map((club, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {club}
                  </motion.div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm students-card mb-4">
            <Card.Body>
              <Card.Title>Achievements</Card.Title>
              <Card.Text>
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {achievement}
                  </motion.div>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="shadow-sm students-card mb-4">
            <Card.Body>
              <Card.Title>Student Council</Card.Title>
              <Card.Text>
                {council.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <strong>{member.title}</strong>: {member.name},{" "}
                    {member.grade}
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

export default Students;
