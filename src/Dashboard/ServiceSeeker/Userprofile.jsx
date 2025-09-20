// src/pages/Profile.jsx
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

const Profile = () => {
  const serviceItems = [
    { id: 1, title: "Plumber Service", icon: <FaTools size={18} /> },
    { id: 2, title: "Electrician Service", icon: <FaBolt size={18} /> },
    { id: 3, title: "Carpenter Service", icon: <FaHammer size={18} /> },
    { id: 4, title: "AC Mechanic", icon: <FaSnowflake size={18} /> },
    { id: 5, title: "General Repair", icon: <FaWrench size={18} /> },
    { id: 6, title: "Painting", icon: <FaPaintRoller size={18} /> },
    { id: 7, title: "Public Transport", icon: <FaBus size={18} /> },
    { id: 8, title: "Cleaning Services", icon: <FaBroom size={18} /> },
    { id: 9, title: "Catering Services", icon: <FaUtensils size={18} /> },
    { id: 10, title: "Gardening Services", icon: <FaTree size={18} /> },
    { id: 11, title: "Healthcare", icon: <FaHospital size={18} /> },
    { id: 12, title: "IT Support", icon: <FaLaptop size={18} /> },
    { id: 13, title: "Taxi Service", icon: <FaTaxi size={18} /> },
    { id: 14, title: "Water Supply", icon: <FaShower size={18} /> },
    { id: 15, title: "Laundry Service", icon: <FaTshirt size={18} /> },
    { id: 16, title: "Mobile Repair", icon: <FaMobileAlt size={18} /> },
  ];

  const categories = ["Plumber", "Electrician", "Carpenter", "AC Mechanic"];
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
  };

  return (
    <>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: "#3f51b5" }} variant="dark" expand="lg" className="px-4">
        <Navbar.Brand as={Link} to="/">CityAssit</Navbar.Brand>
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
          <Nav.Link href="#login" className="text-white d-flex align-items-center">
            <FaSignInAlt className="me-1" /> Login
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
              <Link
                to="/Userservices"
                className="text-white text-decoration-none d-flex align-items-center"
              >
                <FaTools className="me-2" /> Services
              </Link>
            </h5>

            <ListGroup variant="flush">
              {categories.map((service, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  as={Link}
                  to="/Userservices"
                  style={{
                    backgroundColor: "transparent",
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
                style={{
                  backgroundColor: "transparent",
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
                        as={Link}
                        to="/services"
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

          {/* Profile Content */}
          <Col
            md={10}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "90vh" }}
          >
            <Card style={{ width: "25rem" }} className="shadow-lg text-center p-3">
              <FaUserCircle size={80} className="mb-3 text-primary" />
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email} <br />
                <strong>Phone:</strong> {user.phone} <br />
                <strong>Location:</strong> {user.location}
              </Card.Text>
              <Button style={{ backgroundColor: "#3f51b5", border: "none" }}>
                Edit Profile
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;