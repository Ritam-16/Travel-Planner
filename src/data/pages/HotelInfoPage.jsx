// src/pages/HotelInfoPage.jsx
import { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Badge, ProgressBar, ListGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../mockData';

export default function HotelInfoPage() {
  const { hotelId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  let hotel = null;
  for (const dest of destinations) {
    hotel = dest.hotels.find(h => h.id === hotelId);
    if (hotel) break;
  }

  if (!hotel) {
    return (
      <Container className="my-5 text-center">
        <h2>Hotel Not Found</h2>
        <p>ID: {hotelId}</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </Container>
    );
  }

  const images = hotel.images || [hotel.image];
  const amenities = hotel.amenities || [];
  const reviews = hotel.reviews || [
    { name: 'Alex', rating: 5, text: 'Amazing stay! The rooftop pool was incredible.' },
    { name: 'Sarah', rating: 4, text: 'Great location, clean rooms, friendly staff.' },
    { name: 'John', rating: 5, text: 'Best hotel in Paris. Will come back!' }
  ];

  const cleanlinessScore = 9.7;

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Link to="/" className="text-decoration-none mb-4 d-inline-block text-muted">
        ← Back to Home
      </Link>

      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold">{hotel.name}</h1>
          <p className="lead text-muted">
            <i className="bi bi-geo-alt-fill"></i> {hotel.location}
          </p>
          <div className="d-flex align-items-center gap-3">
            <span className="text-warning fs-5">★★★★★</span>
            <Badge bg="success" className="fs-6">{hotel.rating || 4.9}</Badge>
            <span className="text-muted">128 reviews</span>
          </div>
        </Col>
      </Row>

      {/* Image Gallery */}
      <Row className="mb-5">
        <Col>
          <Carousel activeIndex={selectedImageIndex} onSelect={setSelectedImageIndex} interval={null}>
            {images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={img}
                  alt={`${hotel.name} - ${i + 1}`}
                  className="d-block w-100 rounded"
                  style={{ height: '600px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex gap-2 mt-3 flex-wrap justify-content-center">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`rounded border ${selectedImageIndex === i ? 'border-primary border-3' : 'border'}`}
                style={{ width: '100px', height: '70px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => setSelectedImageIndex(i)}
              />
            ))}
          </div>
        </Col>
      </Row>

      {/* About Section */}
      <Row className="mb-5">
        <Col lg={8}>
          <h2 className="h3 fw-bold mb-3">About this place</h2>
          <p className="lead text-muted">{hotel.description}</p>
        </Col>
      </Row>

      {/* Amenities */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">What this place offers</h2>
          <Row>
            {amenities.map((amenity, i) => (
              <Col md={6} key={i} className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                  <span className="fw-medium">{amenity}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Cleanliness Index */}
      <Row className="mb-5">
        <Col lg={8}>
          <h2 className="h3 fw-bold mb-4">Cleanliness & Safety</h2>
          <div className="p-4 bg-light rounded">
            <div className="d-flex justify-content-between align-items-items-center mb-3">
              <h5 className="mb-0">Cleanliness Score</h5>
              <span className="display-6 fw-bold text-success">{cleanlinessScore}/10</span>
            </div>
            <ProgressBar 
              now={cleanlinessScore * 10} 
              variant="success" 
              style={{ height: '12px' }} 
            />
            <p className="mt-3 text-muted small">
              Based on 128 guest reviews. This place is known for exceptional cleanliness.
            </p>
          </div>
        </Col>
      </Row>

      {/* Guest Reviews */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">Guest Reviews</h2>
          {reviews.map((review, i) => (
            <div key={i} className="border-bottom pb-4 mb-4">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="fw-bold">{review.name}</h6>
                  <div className="text-warning mb-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
                <small className="text-muted">2 weeks ago</small>
              </div>
              <p className="text-muted">{review.text}</p>
            </div>
          ))}
          <Button variant="outline-primary">Show all 128 reviews</Button>
        </Col>
      </Row>

      {/* Booking CTA */}
      <Row className="mb-5">
        <Col lg={8}>
          <div className="p-4 bg-light rounded d-flex justify-content-between align-items-center">
            <div>
              <strong className="display-5 text-danger">${hotel.price}</strong>
              <span className="text-muted"> / night</span>
            </div>
            <Button size="lg" style={{ background: '#ff385c', border: 'none' }}>
              Book Now
            </Button>
          </div>
          <p className="mt-3 text-muted small">
            Free cancellation until 24 hours before check-in
          </p>
        </Col>
      </Row>

      {/* Map Placeholder */}
      <Row>
        <Col>
          <h2 className="h3 fw-bold mb-4">Where you'll be</h2>
          <div 
            className="bg-light rounded d-flex align-items-center justify-content-center"
            style={{ height: '400px' }}
          >
            <p className="text-muted">Interactive map coming soon...</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}