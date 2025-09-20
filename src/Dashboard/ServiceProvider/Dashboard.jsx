import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  Badge,
} from "react-bootstrap";
import {
  FaUser,
  FaWrench,
  FaBolt,
  FaBook,
  FaTruck,
  FaHammer,
  FaLeaf,
  FaTachometerAlt,
  FaHistory,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function DashboardPage() {
  // Dummy request data
  const [requests, setRequests] = useState([
    { id: 1, service: "Plumbing", icon: <FaWrench />, customer: "Ramesh", location: "Koramangala", time: "10:30 AM", status: "New" },
    { id: 2, service: "Electrician", icon: <FaBolt />, customer: "Anita", location: "BTM Layout", time: "11:00 AM", status: "New" },
    { id: 3, service: "Tutor", icon: <FaBook />, customer: "Rahul", location: "Whitefield", time: "12:15 PM", status: "Accepted" },
    { id: 4, service: "Delivery", icon: <FaTruck />, customer: "Priya", location: "Indiranagar", time: "1:00 PM", status: "New" },
    { id: 5, service: "Carpenter", icon: <FaHammer />, customer: "Sunil", location: "HSR Layout", time: "2:00 PM", status: "New" },
    { id: 6, service: "Gardener", icon: <FaLeaf />, customer: "Kiran", location: "JP Nagar", time: "3:30 PM", status: "New" },
  ]);

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: action } : req))
    );
  };

  const statusBadge = (status) => {
    switch (status) {
      case "New":
        return <Badge bg="warning">New</Badge>;
      case "Accepted":
        return <Badge bg="success">Accepted</Badge>;
      case "Rejected":
        return <Badge bg="danger">Rejected</Badge>;
      case "Completed":
        return <Badge bg="primary">Completed</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Top Navbar */}
      <Navbar style={{ backgroundColor: "#29289f" }} variant="dark" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">CityAssist - Provider Dashboard</Navbar.Brand> */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile">
              <FaUser className="me-1" /> Profile
            </Nav.Link>
            <Nav.Link href="/">
              <FaSignOutAlt className="me-1" /> Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div
          className="text-white p-3"
          style={{ backgroundColor: "#29289f", width: "220px" }}
        >
          <h5 className="mb-4">Menu</h5>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="text-white mb-2">
              <FaTachometerAlt className="me-2" /> Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/requests" className="text-white mb-2">
              <FaUser className="me-2" /> Requests
            </Nav.Link>
            <Nav.Link as={Link} to="/history" className="text-white mb-2">
              <FaHistory className="me-2" /> History
            </Nav.Link>
            <Nav.Link as={Link} to="/settings" className="text-white mb-2">
              <FaCog className="me-2" /> Settings
            </Nav.Link>
          </Nav>
        </div>

        {/* Dashboard Content */}
        <div className="flex-grow-1 p-4 bg-light">
          <Container fluid>
            <Row xs={1} md={2} lg={2} className="g-4">
              {requests.map((req) => (
                <Col key={req.id}>
                  <Card className="shadow-sm h-100">
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center">
                        <span
                          style={{ color: "#29289f", fontSize: "1.5rem" }}
                          className="me-2"
                        >
                          {req.icon}
                        </span>
                        {req.service}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {req.customer} - {req.location}
                      </Card.Subtitle>
                      <Card.Text>
                        <strong>Time:</strong> {req.time} <br />
                        <strong>Status:</strong> {statusBadge(req.status)}
                      </Card.Text>

                      {req.status === "New" && (
                        <div>
                          <Button
                            size="sm"
                            style={{
                              backgroundColor: "#29289f",
                              borderColor: "#29289f",
                            }}
                            className="me-2"
                            onClick={() => handleAction(req.id, "Accepted")}
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleAction(req.id, "Rejected")}
                          >
                            Reject
                          </Button>
                        </div>
                      )}

                      {req.status === "Accepted" && (
                        <Button
                          size="sm"
                          style={{
                            backgroundColor: "#29289f",
                            borderColor: "#29289f",
                          }}
                          onClick={() => handleAction(req.id, "Completed")}
                        >
                          Mark Completed
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
