import React, { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DeveloperLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("developerLoginKey");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, [navigate]);

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <Alert variant="info">
            <h4>You have been logged out.</h4>
            <p>Redirecting to home page...</p>
          </Alert>
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    </Container>
  );
};
