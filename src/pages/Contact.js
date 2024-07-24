import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ContactUs.css"; // Custom CSS for Contact Us page

const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center bg-dark text-white p-5 rounded"
          >
            <h1>Contact Us</h1>
            <p>We'd love to hear from you!</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="contact-info p-4 rounded"
          >
            <h4>Address</h4>
            <p>
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
            <h4>Phone</h4>
            <p>+1 (123) 456-7890</p>
            <h4>Email</h4>
            <p>info@springdale.edu</p>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Form className="contact-form p-4 rounded">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="embed-responsive embed-responsive-16by9"
          >
            <iframe
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8437651044866!2d-122.08385138468721!3d37.42199997982561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5ab0a7c2f0b%3A0x56fdbf6b8a53b4a8!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2sin!4v1622120341000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
