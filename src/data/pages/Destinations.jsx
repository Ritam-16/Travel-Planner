import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { destinations } from '../mockData';

export default function Destinations() {
  const { id } = useParams();
  const dest = destinations.find(d => d.id === id);
  if (!dest) return <Container className="my-5"><h3>Destination not found</h3></Container>;

  return (
    <Container className="my-5">
      <Link to="/" className="btn btn-link mb-3">← Back to Home</Link>
      <Row>
        <Col md={6}>
          <img src={dest.image} alt={dest.name} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h1>{dest.name}</h1>
          <p>{dest.description}</p>

          <h4>Hotels</h4>
          <ListGroup className="mb-4">
            {dest.hotels.map(h => (
              <ListGroup.Item key={h.id} className="d-flex justify-content-between align-items-center">
                <div>
                  {h.name} {Array(h.rating).fill('⭐').join('')}
                </div>
                <Badge bg="success">${h.price}/night</Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4>Restaurants</h4>
          <ListGroup className="mb-4">
            {dest.restaurants.map(r => (
              <ListGroup.Item key={r.id}>
                {r.name} – {r.cuisine} {r.price}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <h4>Must-See Sites</h4>
          <ListGroup className="mb-4">
            {dest.sites.map(s => (
              <ListGroup.Item key={s.id}>{s.name} ({s.type})</ListGroup.Item>
            ))}
          </ListGroup>

          <Row>
            <Col>
              <h5>Travel Agencies</h5>
              {dest.agencies.map(a => (
                <Badge key={a.id} bg="info" className="me-1 mb-1 d-block">{a.name}</Badge>
              ))}
            </Col>
            <Col>
              <h5>Festivals</h5>
              {dest.festivals.map(f => (
                <Badge key={f.id} bg="warning" className="me-1 mb-1 d-block">{f.name} ({f.date})</Badge>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}