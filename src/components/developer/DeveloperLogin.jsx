import React, { useState } from "react";
import { Form, Card, Button, Container } from "react-bootstrap";
import { Navigation } from "../Navigation";
import "../style/developerStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DeveloperLogin = () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/auth/developer-login",
          {
            username,
            password,
          }
        );

        localStorage.setItem("developerLoginKey", res.data.token);
        alert("Login successful");
        navigate("/developerLoginLayout");
      } catch (err) {
        console.error("Login error:", err);
        alert("Invalid credentials");
      }
    }

    setValidated(true);
  };

  return (
    <div>
      <Navigation />
      <div
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")`,
          backgroundColor: "#fffde7",
          backgroundRepeat: "repeat",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 10px",
        }}
      >
        <Container style={{ maxWidth: "500px" }}>
          <Card
            className="shadow-lg"
            style={{
              backgroundColor: "#f4f4f4",
              border: "none",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <Card.Body>
              <h4 className="text-center fw-bold mb-3">Developer Login</h4>
              <hr />
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustom01" className="mb-3">
                  <Form.Label className="text-dark text-center w-100">
                    Username
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Username"
                    className="rounded-pill"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="validationCustom02" className="mb-3">
                  <Form.Label className="text-dark text-center w-100">
                    Password
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Enter Password"
                    className="rounded-pill"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="warning"
                  className="w-100 rounded-pill mt-3 fw-bold"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};
