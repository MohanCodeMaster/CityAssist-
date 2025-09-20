// src/pages/Services.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  ListGroup,
  Card,
  Collapse,
  InputGroup,
} from "react-bootstrap";
import {
  FaTools,
  FaBolt,
  FaHammer,
  FaSnowflake,
  FaWrench,
  FaPaintRoller,
  FaBus,
  FaBroom,
  FaUtensils,
  FaTree,
  FaHospital,
  FaLaptop,
  FaTaxi,
  FaShower,
  FaTshirt,
  FaMobileAlt,
  FaSearch,
  FaUserCircle,
  FaSignInAlt,
  FaHome,
} from "react-icons/fa";

const Services = () => {
  const serviceItems = [
    { id: 1, title: "Plumber Service", rating: "⭐ 4.5", desc: "Fix leaks, pipes, taps", icon: <FaTools size={20} /> },
    { id: 2, title: "Electrician Service", rating: "⭐ 4.2", desc: "Wiring, switches, repair", icon: <FaBolt size={20} /> },
    { id: 3, title: "Carpenter Service", rating: "⭐ 4.0", desc: "Furniture, wood work", icon: <FaHammer size={20} /> },
    { id: 4, title: "AC Mechanic", rating: "⭐ 4.3", desc: "AC repair & maintenance", icon: <FaSnowflake size={20} /> },
    { id: 5, title: "General Repair", rating: "⭐ 4.1", desc: "Misc household work", icon: <FaWrench size={20} /> },
    { id: 6, title: "Painting", rating: "⭐ 4.4", desc: "Interior & exterior paint", icon: <FaPaintRoller size={20} /> },
    { id: 7, title: "Public Transport", rating: "⭐ 4.3", desc: "Bus, metro, and cab services", icon: <FaBus size={20} /> },
    { id: 8, title: "Cleaning Services", rating: "⭐ 4.5", desc: "Home and office cleaning", icon: <FaBroom size={20} /> },
    { id: 9, title: "Catering Services", rating: "⭐ 4.4", desc: "Food for events & parties", icon: <FaUtensils size={20} /> },
    { id: 10, title: "Gardening Services", rating: "⭐ 4.2", desc: "Lawn care and tree trimming", icon: <FaTree size={20} /> },
    { id: 11, title: "Healthcare", rating: "⭐ 4.6", desc: "Doctors, nurses, first aid", icon: <FaHospital size={20} /> },
    { id: 12, title: "IT Support", rating: "⭐ 4.3", desc: "Laptop and software repair", icon: <FaLaptop size={20} /> },
    { id: 13, title: "Taxi Service", rating: "⭐ 4.1", desc: "Cab booking across the city", icon: <FaTaxi size={20} /> },
    { id: 14, title: "Water Supply", rating: "⭐ 4.0", desc: "Tankers and water services", icon: <FaShower size={20} /> },
    { id: 15, title: "Laundry Service", rating: "⭐ 4.2", desc: "Clothes wash & dry-cleaning", icon: <FaTshirt size={20} /> },
    { id: 16, title: "Mobile Repair", rating: "⭐ 4.4", desc: "Phone repair & accessories", icon: <FaMobileAlt size={20} /> },
  ];

  const categories = ["Plumber", "Electrician", "Carpenter", "AC Mechanic"];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [open, setOpen] = useState(false);

  const filteredServices = serviceItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Services"
        ? true
        : item.title.toLowerCase().startsWith(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#3f51b5" }} variant="dark" expand="lg" className="px-4">
        {/* <Navbar.Brand href="#">CityAssit</Navbar.Brand> */}
        <Form className="d-flex mx-auto w-50">
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="light">
              <FaSearch />
            </Button>
          </InputGroup>
        </Form>
        <Nav>
          <Nav.Link as={Link} to="/" className="text-white d-flex align-items-center">
            <FaHome className="me-1" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Userprofile" className="text-white d-flex align-items-center">
            <FaUserCircle className="me-1" /> Profile
          </Nav.Link>
          <Nav.Link href="/" className="text-white d-flex align-items-center">
            <FaSignInAlt className="me-1" /> Logout
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col
            md={2}
            className="vh-100 p-3"
            style={{ backgroundColor: "#3f51b5", color: "white" }}
          >
            <h5 className="text-white d-flex align-items-center">
              <FaTools className="me-2" /> Services
            </h5>
            <ListGroup variant="flush">
              {categories.map((service, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  active={selectedCategory === service}
                  onClick={() => setSelectedCategory(service)}
                  style={{
                    backgroundColor: selectedCategory === service ? "#303f9f" : "transparent",
                    color: "white",
                    border: "none",
                  }}
                >
                  {service}
                </ListGroup.Item>
              ))}

              {/* All Services dropdown */}
              <ListGroup.Item
                action
                onClick={() => setOpen(!open)}
                aria-controls="all-services-collapse"
                aria-expanded={open}
                active={selectedCategory === "All Services"}
                style={{
                  backgroundColor: selectedCategory === "All Services" ? "#303f9f" : "transparent",
                  color: "white",
                  border: "none",
                }}
              >
                All Services ▾
              </ListGroup.Item>
              <Collapse in={open}>
                <div id="all-services-collapse">
                  <ListGroup variant="flush" className="ms-3">
                    {serviceItems.map((item) => (
                      <ListGroup.Item
                        key={item.id}
                        action
                        onClick={() => setSelectedCategory("All Services")}
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                          border: "none",
                        }}
                      >
                        {item.icon} {item.title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              </Collapse>
            </ListGroup>
          </Col>

          {/* Main Content */}
          <Col md={10} className="p-4">
            <Row>
              {filteredServices.length > 0 ? (
                filteredServices.map((item) => (
                  <Col key={item.id} md={6} className="mb-4">
                    <Card className="h-100 shadow-sm text-center">
                      <Card.Body>
                        <div className="mb-3">{item.icon}</div>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.desc}</Card.Text>
                        <div className="text-muted">{item.rating}</div>
                        <Button style={{ backgroundColor: "#3f51b5", border: "none" }} className="mt-2">
                          Book Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className="text-muted">No services found.</p>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;