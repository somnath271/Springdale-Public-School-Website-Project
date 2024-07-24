import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Gallery.css"; // Custom CSS for Gallery page

const Gallery = () => {
  const photos = [
    {
      src: "https://source.unsplash.com/1600x900/?sports",
      alt: "Sports Day",
      caption: "Students participating in various sports events.",
    },
    {
      src: "https://source.unsplash.com/1600x900/?science",
      alt: "Science Exhibition",
      caption: "Students presenting their science projects.",
    },
    {
      src: "https://source.unsplash.com/1600x900/?cultural",
      alt: "Cultural Fest",
      caption: "Students performing in the cultural fest.",
    },
    {
      src: "https://source.unsplash.com/1600x900/?classroom",
      alt: "Classroom",
      caption: "A glimpse of our interactive classrooms.",
    },
    {
      src: "https://source.unsplash.com/1600x900/?library",
      alt: "Library",
      caption: "Students reading and studying in the school library.",
    },
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/school_tour.mp4",
      title: "Virtual tour of Springdale Public School.",
    },
    {
      src: "https://www.youtube.com/embed/annual_function.mp4",
      title: "Highlights from the Annual Function 2023.",
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
            className="text-center bg-success text-white p-5 rounded"
          >
            <h1>Gallery</h1>
            <p>Explore moments captured at Springdale Public School</p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-4">
        {photos.map((photo, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-sm gallery-card">
                <Card.Img variant="top" src={photo.src} alt={photo.alt} />
                <Card.Body>
                  <Card.Text>{photo.caption}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        {videos.map((video, index) => (
          <Col md={6} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-sm gallery-card">
                <Card.Body>
                  <Card.Title>{video.title}</Card.Title>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={video.src}
                      allowFullScreen
                      title={video.title}
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
