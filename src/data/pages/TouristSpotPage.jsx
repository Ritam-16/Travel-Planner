// src/pages/TouristSpotPage.jsx
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Carousel, ProgressBar } from 'react-bootstrap';
import { destinations } from '../mockData';
import { useState } from 'react';

export default function TouristSpotPage() {
  const { siteId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  let site = null;
  let parentDestination = null;

  // find the site in mockData
  for (const dest of destinations) {
    const found = dest.sites.find(s => s.id === siteId);
    if (found) {
      site = found;
      parentDestination = dest;
      break;
    }
  }

  if (!site) {
    return (
      <Container className="my-5 text-center">
        <h2>Tourist Spot Not Found</h2>
        <p>ID: {siteId}</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </Container>
    );
  }

  const images = site.images || [parentDestination.image];
  const reviews = site.reviews || [
    { name: 'Emily', rating: 5, text: 'Breathtaking experience, definitely worth it!' },
    { name: 'Raj', rating: 4, text: 'Beautiful place, but a bit crowded during weekends.' },
    { name: 'Clara', rating: 5, text: 'Magical vibes, great for photos and sunsets.' }
  ];
  const tips = site.tips || [
    'Best time to visit: early morning or sunset',
    'Carry water and sunscreen',
    'Book tickets online to avoid long queues'
  ];
  const highlights = site.highlights || [
    'Scenic Views',
    'Cultural Experience',
    'Historical Significance'
  ];
  const cleanlinessScore = 9.5;

  return (
    <Container className="my-5">
      {/* Back Button */}
      <Link to={`/destinations/${parentDestination.id}`} className="text-decoration-none mb-4 d-inline-block text-muted">
        ← Back to {parentDestination.name}
      </Link>

      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 fw-bold">{site.name}</h1>
          <p className="lead text-muted">
            <i className="bi bi-geo-alt-fill"></i> {parentDestination.name}
          </p>
          <div className="d-flex align-items-center gap-3">
            <span className="text-warning fs-5">★★★★★</span>
            <Badge bg="success" className="fs-6">{site.rating || 4.8}</Badge>
            <span className="text-muted">1.2k reviews</span>
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
                  alt={`${site.name} - ${i + 1}`}
                  className="d-block w-100 rounded"
                  style={{ height: '600px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnail images */}
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
          <h2 className="h3 fw-bold mb-3">About {site.name}</h2>
          <p className="lead text-muted">{site.description}</p>
          
          {/* Wikipedia Link */}
          {site.wiki && (
            <p className="mt-3">
              Learn more on{' '}
              <a href={site.wiki} target="_blank" rel="noopener noreferrer" className="text-primary">
                Wikipedia
              </a>.
            </p>
          )}
        </Col>
      </Row>

      {/* Highlights */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">Highlights</h2>
          <Row>
            {highlights.map((item, i) => (
              <Col md={6} key={i} className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-star-fill text-warning me-3 fs-5"></i>
                  <span className="fw-medium">{item}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Visitor Tips */}
      <Row className="mb-5">
        <Col lg={8}>
          <h2 className="h3 fw-bold mb-4">Visitor Tips</h2>
          <ul className="list-unstyled">
            {tips.map((tip, i) => (
              <li key={i} className="mb-2">
                <i className="bi bi-lightbulb-fill text-primary me-2"></i>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Cleanliness & Safety */}
      <Row className="mb-5">
        <Col lg={8}>
          <h2 className="h3 fw-bold mb-4">Cleanliness & Safety</h2>
          <div className="p-4 bg-light rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Cleanliness Score</h5>
              <span className="display-6 fw-bold text-success">{cleanlinessScore}/10</span>
            </div>
            <ProgressBar now={cleanlinessScore * 10} variant="success" style={{ height: '12px' }} />
            <p className="mt-3 text-muted small">
              Based on visitor reviews. Known for well-maintained surroundings and facilities.
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
          <Button variant="outline-primary">Show all 1.2k reviews</Button>
        </Col>
      </Row>

      {/* Nearby Recommendations */}
      <Row className="mb-5">
        <Col>
          <h2 className="h3 fw-bold mb-4">Nearby Hotels & Restaurants</h2>
          <Row>
            {parentDestination.hotels.slice(0, 2).map(h => (
              <Col md={6} key={h.id} className="mb-3">
                <div className="p-3 border rounded shadow-sm bg-light">
                  <img src={h.image} alt={h.name} className="rounded mb-3 w-100" style={{ height: '200px', objectFit: 'cover' }} />
                  <h5>{h.name}</h5>
                  <p className="text-muted small">{h.location}</p>
                  <Link to={`/hotel/${h.id}`} className="btn btn-outline-primary btn-sm">View Hotel</Link>
                </div>
              </Col>
            ))}
          </Row>
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
