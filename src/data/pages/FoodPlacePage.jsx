// src/pages/FoodPlacePage.jsx
import { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Badge, ProgressBar } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../mockData';

export default function FoodPlacePage() {
  const { foodId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  let foodPlace = null;
  let parentDestination = null;

  for (const dest of destinations) {
    const found = dest.foodPlaces?.find(f => f.id === foodId);
    if (found) {
      foodPlace = found;
      parentDestination = dest;
      break;
    }
  }

  if (!foodPlace) {
    return (
      <Container className="my-5 text-center">
        <h2>Food Place Not Found</h2>
        <p>ID: {foodId}</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </Container>
    );
  }

  const images = foodPlace.images || [parentDestination.image];
  const specialties = foodPlace.specialties || ['Local delicacies', 'Signature dishes'];
  const reviews = foodPlace.reviews || [
    { name: 'Alice', rating: 5, text: 'Delicious food and amazing ambiance!' },
    { name: 'Michael', rating: 4, text: 'Great service and tasty meals.' },
    { name: 'Ravi', rating: 5, text: 'Perfect place for a family dinner.' }
  ];
  const cleanlinessScore = foodPlace.cleanlinessScore || 9.2;
  const averagePrice = foodPlace.averagePrice || 15;

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Link to={`/destinations/${parentDestination.id}`} className="text-decoration-none mb-4 d-inline-block text-muted">
        ← Back to {parentDestination.name}
      </Link>

      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold">{foodPlace.name}</h1>
          <p className="lead text-muted">
            <i className="bi bi-geo-alt-fill"></i> {foodPlace.location}
          </p>
          <div className="d-flex align-items-center gap-3">
            <span className="text-warning fs-5">★★★★★</span>
            <Badge bg="success" className="fs-6">{foodPlace.rating || 4.7}</Badge>
            <span className="text-muted">{reviews.length} reviews</span>
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
                  alt={`${foodPlace.name} - ${i + 1}`}
                  className="d-block w-100 rounded"
                  style={{ height: '500px', objectFit: 'cover' }}
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
          <p className="lead text-muted">{foodPlace.description}</p>
        </Col>
      </Row>

      {/* Specialties */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">Specialties</h2>
          <Row>
            {specialties.map((dish, i) => (
              <Col md={6} key={i} className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-basket-fill text-danger me-3 fs-5"></i>
                  <span className="fw-medium">{dish}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Cleanliness */}
      <Row className="mb-5">
        <Col lg={8}>
          <h2 className="h3 fw-bold mb-4">Cleanliness & Safety</h2>
          <div className="p-4 bg-light rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Cleanliness Score</h5>
              <span className="display-6 fw-bold text-success">{cleanlinessScore}/10</span>
            </div>
            <ProgressBar 
              now={cleanlinessScore * 10} 
              variant="success" 
              style={{ height: '12px' }} 
            />
            <p className="mt-3 text-muted small">
              Based on visitor reviews. Known for clean environment and hygiene.
            </p>
          </div>
        </Col>
      </Row>

      {/* Guest Reviews */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">Visitor Reviews</h2>
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
          <Button variant="outline-primary">Show all {reviews.length} reviews</Button>
        </Col>
      </Row>

      {/* Average Price / Reservation CTA */}
      <Row className="mb-5">
        <Col lg={8}>
          <div className="p-4 bg-light rounded d-flex justify-content-between align-items-center">
            <div>
              <strong className="display-5 text-danger">${averagePrice}</strong>
              <span className="text-muted"> / meal</span>
            </div>
            <Button size="lg" style={{ background: '#ff385c', border: 'none' }}>
              Reserve Table
            </Button>
          </div>
          <p className="mt-3 text-muted small">
            Free cancellation for reservations up to 1 hour before.
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
