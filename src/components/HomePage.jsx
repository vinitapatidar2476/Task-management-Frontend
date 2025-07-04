import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
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
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                style={{
                  color: "#f9a825",
                  fontWeight: "bold",
                  fontSize: "3rem",
                  lineHeight: "1.3",
                }}
              >
                Manage Tasks <br />
                <span style={{ color: "#f57f17" }}>
                  Effortlessly & Effectively
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-3"
                style={{ fontSize: "1.2rem", color: "#4e4e4e" }}
              >
                Welcome to <strong>TaskMaster Pro</strong> — your go-to solution
                for powerful and seamless Task Management.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Button
                  variant="warning"
                  size="lg"
                  className="mt-4 px-5 py-3 rounded-pill fw-bold shadow"
                  as={Link}
                  to="/developerLogin"
                >
                  🚀 Get Started
                </Button>
              </motion.div>
            </Col>
            <Col md={6} className="text-center">
              <motion.img
                src="https://cdn-icons-png.flaticon.com/512/3405/3405808.png"
                alt="Task Manager"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
