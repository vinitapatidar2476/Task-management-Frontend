import React from "react";
import "../style/developerStyle.css";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
export const DeveloperLoginLayout = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")`,
        backgroundColor: "#fffde7",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Row>
        <Col>
          <div md={2} className="side-bar p-4 bg-dark">
            <Link
              to="developerDashBoardMain"
              className="nav-link text-white mb-2"
            >
              DashBoard
            </Link>
            <Link
              to="developerPendingTask"
              className="nav-link text-white mb-2"
            >
              pending Task
            </Link>
            <Link
              to="developerProgressTask"
              className="nav-link text-white mb-2"
            >
              progress Task
            </Link>
            <Link
              to="developerCompletedTask"
              className="nav-link text-white mb-2"
            >
              Completed Task
            </Link>
            <Link
              to="developerLogout"
              className="btn btn-warning mt-3 w-100 fw-bold"
            >
              LogOut
            </Link>
          </div>
        </Col>
        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
