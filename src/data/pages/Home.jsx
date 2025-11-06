// src/data/pages/Home.jsx
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { popularPackages, destinations } from '../mockData';
import DraggableItem from './DraggableItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [tripItems, setTripItems] = useState([]);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(null); // 'checkin' | 'checkout' | null

  // GUEST COUNTER
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showGuests, setShowGuests] = useState(false);

  const totalGuests = adults + children + infants;

  // REFS FOR CLICK OUTSIDE
  const calendarRef = useRef(null);
  const guestsRef = useRef(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const activeIdx = tripItems.findIndex(i => i.id === active.id);
    const overIdx = tripItems.findIndex(i => i.id === over.id);
    setTripItems(items => arrayMove(items, activeIdx, overIdx));
  };

  const addToTrip = (item) => {
    if (!tripItems.find(i => i.id === item.id)) {
      setTripItems(prev => [...prev, { id: item.id, content: item.name }]);
    }
  };

  // CLICK OUTSIDE TO CLOSE
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close Calendar
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(null);
      }
      // Close Guests
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuests(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* 1. IMAGE CAROUSEL */}
      <Carousel className="mb-5" indicators={false}>
        {destinations.slice(0, 3).map(dest => (
          <Carousel.Item key={dest.id}>
            <div className="position-relative">
              <img
                className="d-block w-100"
                src={dest.image}
                alt={dest.name}
                style={{ height: '60vh', objectFit: 'cover', filter: 'brightness(70%)' }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="display-3 fw-bold">{dest.name}</h1>
                <p className="lead">{dest.description}</p>
                <Button as={Link} to={`/destinations/${dest.id}`} variant="light" size="lg">
                  Explore Now
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* 2. SEARCH BAR WITH CLICK-OUTSIDE */}
      <div
        className="bg-white shadow-lg rounded-pill p-2 mb-5 sticky-top d-flex align-items-center"
        style={{ top: '70px', zIndex: 1000, maxWidth: '900px', margin: '0 auto' }}
      >
        <Container className="p-0">
          <Form className="d-flex align-items-center">
            <div className="grow d-flex">
              {/* WHERE */}
              <div className="border-end px-3 py-2 grow">
                <small className="text-muted d-block">Where</small>
                <Form.Control
                  type="text"
                  placeholder="Search destinations"
                  className="border-0 p-0"
                  style={{ fontSize: '0.95rem', fontWeight: '500' }}
                />
              </div>

              {/* CHECK IN */}
              <div ref={showCalendar === 'checkin' ? calendarRef : null} className="border-end px-3 py-2 position-relative" style={{ minWidth: '140px' }}>
                <small className="text-muted d-block">Check in</small>
                <div
                  className="text-truncate"
                  style={{ fontSize: '0.95rem', fontWeight: '500', cursor: 'pointer' }}
                  onClick={() => setShowCalendar('checkin')}
                >
                  {arrivalDate
                    ? arrivalDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    : 'Add dates'}
                </div>
                {showCalendar === 'checkin' && (
                  <div className="position-absolute top-100 start-0 mt-2 shadow-lg bg-white rounded" style={{ zIndex: 2000 }}>
                    <DatePicker
                      selected={arrivalDate}
                      onChange={(date) => {
                        setArrivalDate(date);
                        setShowCalendar(null);
                      }}
                      selectsStart
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={new Date()}
                      inline
                    />
                  </div>
                )}
              </div>

              {/* CHECK OUT */}
              <div ref={showCalendar === 'checkout' ? calendarRef : null} className="border-end px-3 py-2 position-relative" style={{ minWidth: '140px' }}>
                <small className="text-muted d-block">Check out</small>
                <div
                  className="text-truncate"
                  style={{ fontSize: '0.95rem', fontWeight: '500', cursor: 'pointer' }}
                  onClick={() => setShowCalendar('checkout')}
                >
                  {departureDate
                    ? departureDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    : 'Add dates'}
                </div>
                {showCalendar === 'checkout' && (
                  <div className="position-absolute top-100 start-0 mt-2 shadow-lg bg-white rounded" style={{ zIndex: 2000 }}>
                    <DatePicker
                      selected={departureDate}
                      onChange={(date) => {
                        setDepartureDate(date);
                        setShowCalendar(null);
                      }}
                      selectsEnd
                      startDate={arrivalDate}
                      endDate={departureDate}
                      minDate={arrivalDate || new Date()}
                      inline
                    />
                  </div>
                )}
              </div>

              {/* WHO + GUEST COUNTER */}
              <div ref={guestsRef} className="px-3 py-2 position-relative" style={{ minWidth: '180px' }}>
                <div
                  className="d-flex align-items-center justify-content-between"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowGuests(!showGuests)}
                >
                  <div>
                    <small className="text-muted d-block">Who</small>
                    <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>
                      {totalGuests === 0 ? 'Add guests' : `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`}
                    </span>
                  </div>
                  <Button
                    className="rounded-circle d-flex align-items-center justify-content-center ms-3"
                    style={{ width: '48px', height: '48px', background: '#ff385c', border: 'none' }}
                    onClick={(e) => {
                      e.stopPropagation(); // ← THIS FIXES IT
                      // Add search logic here later
                      console.log('Search clicked!', { arrivalDate, departureDate, totalGuests });
                    }}
                  >
                    <i className="bi bi-search text-white"></i>
                  </Button>
                </div>

                {/* GUEST COUNTER POPUP */}
                {showGuests && (
                  <div
                    className="position-absolute top-100 end-0 mt-2 bg-white shadow-lg rounded p-3"
                    style={{ width: '320px', zIndex: 2000 }}
                  >
                    {/* Adults */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <div className="fw-bold">Adults</div>
                        <small className="text-muted">Ages 13 or above</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{adults}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <div className="fw-bold">Children</div>
                        <small className="text-muted">Ages 2–12</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{children}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-bold">Infants</div>
                        <small className="text-muted">Under 2</small>
                      </div>
                      <div className="d-flex align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setInfants(Math.max(0, infants - 1))}
                        >
                          −
                        </Button>
                        <span className="mx-3 fw-bold">{infants}</span>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="rounded-circle"
                          onClick={() => setInfants(infants + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Form>
        </Container>
      </div>

      {/* 3. REST OF PAGE */}
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4">Discover Your Next Adventure</h1>
            <p className="lead">Hotels • Restaurants • Sites • Festivals • Agencies</p>
          </Col>
        </Row>

        <h2 className="mb-4" id="packages">Popular Packages</h2>
        <Row className="g-4 mb-5">
          {popularPackages.map(pkg => (
            <Col md={6} key={pkg.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{pkg.title}</Card.Title>
                  <Card.Text>
                    <strong>${pkg.price}</strong>
                    <ul className="mt-2 small">
                      {pkg.items.map((it, i) => <li key={i}>{it}</li>)}
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="mb-4">Explore Destinations</h2>
        <Row className="g-4 mb-5">
          {destinations.map(dest => (
            <Col md={4} key={dest.id}>
              <Card className="h-100 shadow-sm" as={Link} to={`/destinations/${dest.id}`}>
                <Card.Img variant="top" src={dest.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{dest.name}</Card.Title>
                  <Card.Text>{dest.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="mb-4" id="planner">Plan Your Own Trip</h2>
        <Row>
          <Col md={6}>
            <h5>Add Items</h5>
            <div className="mb-3">
              {destinations.flatMap(d =>
                [...d.hotels, ...d.restaurants, ...d.sites].map(item => (
                  <Button
                    key={item.id}
                    variant="outline-primary"
                    size="sm"
                    className="me-2 mb-2"
                    onClick={() => addToTrip(item)}
                  >
                    {item.name}
                  </Button>
                ))
              )}
            </div>
          </Col>

          <Col md={6}>
            <h5>Your Itinerary</h5>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={tripItems.map(i => i.id)} strategy={verticalListSortingStrategy}>
                <div className="border rounded p-3 min-vh-50 bg-light">
                  {tripItems.length === 0 ? (
                    <p className="text-muted">Add items above to build your trip!</p>
                  ) : (
                    tripItems.map(item => (
                      <DraggableItem key={item.id} id={item.id} content={item.content} />
                    ))
                  )}
                </div>
              </SortableContext>
            </DndContext>
            {tripItems.length > 0 && (
              <Button variant="success" className="mt-3">Save Trip</Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}